import React, { useState, useEffect } from "react";
import { Button, Spinner, CloseButton } from "react-bootstrap";
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { getStoreData } from "../../api";
import "./style.css";

const ContactModal = ({ numberListing, onClose }) => {
  const [contactData, setContactData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!numberListing?.storeId) return;

    const fetchStoreData = async () => {
      setLoading(true);
      try {
        const data = await getStoreData(numberListing.storeId);
        setContactData(data);
      } catch (error) {
        console.error("Error fetching store data:", error);
        setContactData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchStoreData();
  }, [numberListing?.storeId]);

  if (!numberListing?.storeId) return null;

  const formatPhoneNumber = (number) =>
    number.replace(
      /(\+?\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/,
      "$1 $2 $3 $4 $5"
    );

  // Destructure values from contactData for easier access.
  const { storeName, whatsappNumber, contactNumber, lat, lng } = contactData || {};

  return (
    <div
      className="modal-overlay d-flex justify-content-center align-items-center"
      onClick={onClose}
    >
      <div
        className="custom-modal-card d-flex flex-column p-4 position-relative"
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton
          className="close-button position-absolute top-0 end-0 m-3"
          onClick={onClose}
        />

        {loading ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "150px" }}
          >
            <Spinner animation="border" variant="primary" />
          </div>
        ) : contactData ? (
          <>
            <h4
              className="fw-bold mb-4 title-two-lines"
              style={{ paddingRight: "60px" }}
            >
              {storeName}
            </h4>

            <div className="mb-3 w-100">
              {whatsappNumber && (
                <p className="d-flex align-items-center text-start mb-1">
                  <FaWhatsapp className="me-1 text-black" />
                  {formatPhoneNumber(whatsappNumber)}
                </p>
              )}
              {contactNumber && (
                <p className="d-flex align-items-center text-start mb-1">
                  <BsTelephone className="me-1 text-black" />
                  {formatPhoneNumber(contactNumber)}
                </p>
              )}
            </div>

            <div className="d-grid gap-2 w-100" style={{ marginTop: "auto" }}>
              {whatsappNumber && (
                <Button
                  variant="outline-secondary"
                  className="d-flex align-items-center button-contact w-100"
                  href={`https://wa.me/${whatsappNumber}?text=Salam, ${numberListing.msisdn} nömrəsi barədə məlumat almaq istəyirəm.`}
                  target="_blank"
                  style={{
                    backgroundColor: "#bbbbbb",
                    border: "none",
                    justifyContent: "flex-start",
                  }}
                >
                  <FaWhatsapp className="me-2 text-black" />
                  <span style={{ color: "black" }}>Mesaj yaz</span>
                </Button>
              )}

              {contactNumber && (
                <Button
                  variant="outline-secondary"
                  className="d-flex align-items-center button-contact w-100"
                  href={`tel:${contactNumber}`}
                  style={{
                    backgroundColor: "#bbbbbb",
                    border: "none",
                    justifyContent: "flex-start",
                  }}
                >
                  <BsTelephone className="me-2 text-black" />
                  <span style={{ color: "black" }}>Zəng et</span>
                </Button>
              )}

              {lat && lng && (
                <Button
                  variant="outline-secondary"
                  className="d-flex align-items-center button-contact w-100"
                  href={`https://www.google.com/maps?q=${lat},${lng}`}
                  target="_blank"
                  style={{
                    backgroundColor: "#bbbbbb",
                    border: "none",
                    justifyContent: "flex-start",
                  }}
                >
                  <FaMapMarkerAlt className="me-2 text-black" />
                  <span style={{ color: "black" }}>Mağazanın ünvanı</span>
                </Button>
              )}
            </div>
          </>
        ) : (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "150px" }}
          >
            Mağaza məlumatları tapılmadı.
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
