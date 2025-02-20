import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router";
import "./style.css";
import StoreStandImage from "../../assets/store_stand.png";
import QrCodeImage from "../../assets/store_qr_code.png";

const CatalogSection = () => {
  return (
    <Container className="catalog-container py-5">
      <Row className="align-items-center mb-5">
        <Col xs={12} md={6} className="mb-4 mb-md-0">
          <Image
            src={StoreStandImage}
            alt="Catalog Image"
            fluid
            className="catalog-image"
          />
        </Col>
        <Col xs={12} md={6}>
          <h2 className="catalog-title">Kağız Kataloqlar Keçmişdə Qaldı!</h2>
          <p className="catalog-paragraph">
            Mağazanız üçün təqdim etdiyimiz planşetlər vasitəsilə kağız
            kataloqların istifadəsinə son qoyun! İstənilən operatora uyğun
            rəqəmsal kataloq: Azercell, Bakcell, Nar — fərqi yoxdur! Onlayn
            kataloqla müştərilərinizə daha rahat xidmət göstərin.
          </p>
          <h5 className="catalog-subtitle">Üstünlüklərimiz:</h5>
          <ul className="catalog-list">
            <li>
              <b>Daha az qaralama və kağız israfı:</b> Kağız dəyişmə
              problemlərini aradan qaldırır
            </li>
            <li>
              <b>Limitlərə son:</b> 15 nömrə limiti yoxdur, hər şey sürətli və
              əlçatan
            </li>
            <li>
              <b>Həm onlayn, həm mağazada servis:</b> Nömrələrinizi internetdə
              və mağazanızda asanlıqla təqdim edin.
            </li>
          </ul>
          <h6 className="catalog-highlight">
            <b>
              Kağızdan rəqəmsala keçərək həm vaxtınıza, həm də resurslarınıza
              qənaət edin!
            </b>
          </h6>
        </Col>
      </Row>

      {/* --- SECOND SECTION --- */}
      <Row className="align-items-center">
        {/* Image on the right for large screens */}
        <Col xs={12} md={6} className="order-md-2 mb-4 mb-md-0">
          <Image
            src={QrCodeImage}
            alt="QR Image"
            fluid
            className="catalog-image"
          />
        </Col>
        {/* Text on the left for large screens */}
        <Col xs={12} md={6} className="order-md-1">
          <h2 className="catalog-title">QR Kodla Daha Rahat Xidmət!</h2>
          <p className="catalog-paragraph">
            Müştərilərinizə innovativ həll təqdim edin! Sizə təqdim edəcəyimiz
            <b> QR kod </b> vasitəsilə müştərilər nömrələrinizi öz
            telefonlarında görüntüləyə biləcəklər.
          </p>
          <h5 className="catalog-subtitle">Üstünlüklərimiz:</h5>
          <ul className="catalog-list">
            <li>
              <b>Sıra gözləmədən xidmət:</b> Müştərilər kataloqa dərhal giriş
              əldə edirlər.
            </li>
            <li>
              <b>Təmasdan uzaq, təhlükəsiz təcrübə:</b> Heç kimlə kontaktda
              olmadan və ümumi ekrana toxunmadan rahatlıqla istifadə.
            </li>
            <li>
              <b>Rahatlıq və sürət:</b> Hər zaman, hər yerdə nömrələrinizə asan
              giriş
            </li>
          </ul>
          <h6 className="catalog-highlight">
            <b>
              Müasir texnologiya ilə müştərilərinizə həm rahat, həm də
              təhlükəsiz xidmət təqdim edin!
            </b>
          </h6>
        </Col>
      </Row>

      {/* --- BUTTON --- */}
      <div className="d-flex justify-content-center mt-4">
        <Button
          variant="primary"
          as={Link}
          to="/contact"
          className="text-decoration-none text-white"
        >
          SimSim-ə qoşul
        </Button>
      </div>
    </Container>
  );
};

export default CatalogSection;
