import { useState, useEffect, useRef } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import CustomAlert from "../../components/CustomAlert";
import SearchForm from "../../components/SearchForm";
import ContactModal from "../../components/ContactModal";
import NumberCard from "../../components/NumberCard";
import { fetchNumberListings } from "../../api";
import "./style.css";
import bannerGif from '../../assets/simsim_at_store.gif';

const LIMIT = 20;

const Home = () => {
  const [prefix, setPrefix] = useState("");
  const [digits, setDigits] = useState(Array(7).fill(""));
  const [searchTriggered, setSearchTriggered] = useState(false);
  const inputRefs = useRef([]);
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedNumberListing, setSelectedNumberListing] = useState(null);
  const [offset, setOffset] = useState(0);
  const [numbers, setNumbers] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  // Show alerts as needed.
  const showAlert = (message, type) => {
    setAlert({ message, type });
  };

  // Helper to fetch numbers with pagination. Always sends "offset" and "limit".
  const fetchNumbers = async (currentOffset) => {
    try {
      setLoading(true);
      const params = new URLSearchParams(searchParams);
      params.set("offset", currentOffset);
      params.set("limit", LIMIT);
      const numberListings = await fetchNumberListings(params);
      return numberListings;
    } catch (error) {
      console.error(error);
      showAlert("Məlumatları yükləyərkən xəta baş verdi", "error");
      return [];
    } finally {
      setLoading(false);
    }
  };

  // Fetch the next set of numbers. If overrideOffset is provided (e.g. 0 for new search), use that.
  const fetchNext = async (overrideOffset = null) => {
    const currentOffset = overrideOffset !== null ? overrideOffset : offset;
    const newNumbers = await fetchNumbers(currentOffset);
    if (currentOffset === 0) {
      setNumbers(newNumbers);
    } else {
      setNumbers((prev) => [...prev, ...newNumbers]);
    }
    setOffset(currentOffset + newNumbers.length);
    setHasMore(newNumbers.length === LIMIT);
  };

  // When searchParams change (triggered by Search or Clear Filters), update state and reload data.
  useEffect(() => {
    // Retrieve filter values from URL.
    const urlPrefix = searchParams.get("prefix") || "";
    const urlDigits = Array(7).fill("");
    for (let i = 1; i <= 7; i++) {
      const digit = searchParams.get(`num${i}`);
      if (digit) urlDigits[i - 1] = digit;
    }

    // If any filter is present, update state.
    if (urlPrefix || urlDigits.some((d) => d)) {
      setPrefix(urlPrefix);
      setDigits(urlDigits);
      setSearchTriggered(true);
    } else {
      setHasMore(true);
      setSearchTriggered(false);
      setPrefix("");
      setDigits(Array(7).fill(""));
    }
    

    // Reset the list and offset, then fetch from the beginning.
    setNumbers([]);
    setOffset(0);
    fetchNext(0);
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  // On first mount, if there are no search parameters, load unfiltered data.
  useEffect(() => {
    if (!searchParams.toString()) {
      setNumbers([]);
      setOffset(0);
      fetchNext(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // When the Search button is clicked.
  const handleSearch = () => {
    const hasDigits = digits.some((d) => d);
    if (!prefix && !hasDigits && !searchTriggered) {
      return;
    }
    const params = new URLSearchParams();
    if (prefix) {
      params.set("prefix", prefix);
    }
    digits.forEach((digit, index) => {
      if (digit) {
        params.set(`num${index + 1}`, digit);
      }
    });
    // Updating the URL search params triggers the useEffect above.
    setSearchParams(params);
  };

  // When Clear Filters is clicked, remove the filters and load unfiltered data.
  const clearFilters = () => {
    if (searchTriggered) {
        setNumbers([]);
        setSearchParams(new URLSearchParams());        
        setSearchTriggered(false);
    }
  };

  const handleInputChange = (index, value) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newDigits = [...digits];
      newDigits[index] = value;
      setDigits(newDigits);
      if (value.length === 1 && index < 6) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Enter" && inputRefs.current[index]) {
      inputRefs.current[index].focus();
    }
  };

  const handleContactClick = (numberListing) => {
    setSelectedNumberListing(numberListing);
    setShowContactModal(true);
  };

  return (
    <>
      {alert && (
        <CustomAlert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(null)}
        />
      )}

      <div className="home-content">
        <div className="header-text">
          <h1 style={{ textAlign: "center", fontWeight: 700, fontSize: "40px" }}>
            Axtarış
          </h1>
        </div>

        <div className="search-section">
          <SearchForm
            prefix={prefix}
            digits={digits}
            inputRefs={inputRefs}
            handleSearch={handleSearch}
            handlePrefixChange={(e) => setPrefix(e.target.value)}
            handleDigitChange={handleInputChange}
            handleKeyDown={handleKeyDown}
            clearFilters={clearFilters}
            setSearchResults={setNumbers}
            setDigits={setDigits}
            setPrefix={setPrefix}
          />
        </div>

        <div className="content-section">
          <div className="banner-container">
            <Link to="/about" style={{ textDecoration: "none" }}>
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  backgroundImage:  `url(${bannerGif})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "12px",
                  height: "150px",
                  maxWidth: "900px",
                  margin: "0 auto", 
                }}
              ></div>
            </Link>
          </div>

          <Row className="mt-4 justify-content-center">
            <Col xs={12} className="px-3" style={{ maxWidth: "95%" }}>
              {numbers.length === 0 && !loading ? (
                <div className="text-center my-5">
                  <p>Nəticə tapılmadı</p>
                </div>
              ) : (
                <InfiniteScroll
                  dataLength={numbers.length}
                  next={fetchNext}
                  hasMore={hasMore}
                  loader={
                    <div className="text-center my-5">
                      <Spinner animation="border" variant="primary" />
                    </div>
                  }>
                  {numbers.map((numberListing) => (
                    <NumberCard
                      key = {numberListing.msisdn}
                      numberListing = {numberListing}
                      handleContactClick = {handleContactClick}
                    />
                  ))}
                </InfiniteScroll>
              )}
            </Col>
          </Row>
        </div>
      </div>

      {showContactModal && (
        <ContactModal
          numberListing={selectedNumberListing}
          onClose={() => setShowContactModal(false)}
        />
      )}
    </>
  );
};

export default Home;
