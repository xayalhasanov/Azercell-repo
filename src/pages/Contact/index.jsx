import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const ContactSection = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:info@simsim.az";
  };

  return (
    <Container
      fluid
      className="min-vh-100 d-flex flex-column justify-content-center align-items-center   py-5"
    >
      <h1 className="text-center mb-5">Bizimlə Əlaqə Saxlayın</h1>
      <Row className="g-4 justify-content-evenly ">
        <Col
          xs={12}
          sm={6}
          md={4}
          lg={3}
          className="d-flex justify-content-center align-items-stretch"
        >
          <Card
            style={{
              width: "18rem",
              minWidth: "250px",
              minHeight: "280px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#BBBBBB",
              transition: "transform 0.3s ease",
            }}
            className="text-center p-4 shadow  card-main"
          >
            <Card.Body>
              <div className="mb-3 d-flex justify-content-center">
                <i
                  className="bi bi-whatsapp"
                  style={{ fontSize: "3.5rem" }}
                ></i>
              </div>
              <Card.Title style={{ whiteSpace: "nowrap", textAlign: "center" }}>
                +994 50 247 37 36
              </Card.Title>
              <Button
                variant="dark"
                className="mt-3 w-100"
                href="https://wa.me/+994502473736"
              >
                Mesaj Yaz
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col
          xs={12}
          sm={6}
          md={4}
          lg={3}
          className="d-flex justify-content-center align-items-stretch"
        >
          <Card
            style={{
              width: "18rem",
              minWidth: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#BBBBBB",
            }}
            className="text-center p-4  shadow card-main"
          >
            <Card.Body>
              <div className="mb-3 d-flex justify-content-center">
                {" "}
                <i
                  className="bi bi-telephone "
                  style={{ fontSize: "3.5rem" }}
                ></i>
              </div>
              <Card.Title style={{ whiteSpace: "nowrap", textAlign: "center" }}>
                +994 50 247 37 36
              </Card.Title>
              <Button
                variant="dark"
                className="mt-3 w-100"
                href="tel:+994502473736"
              >
                Zəng Et
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col
          xs={12}
          sm={6}
          md={4}
          lg={3}
          className="d-flex justify-content-center align-items-stretch"
        >
          <Card
            style={{
              width: "18rem",
              minWidth: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#BBBBBB",
            }}
            className="text-center p-4  shadow card-main "
          >
            <Card.Body>
              <div className="mb-3 d-flex justify-content-center">
                <i
                  className="bi bi-envelope"
                  style={{ fontSize: "3.5rem" }}
                ></i>
              </div>
              <Card.Title style={{ whiteSpace: "nowrap", textAlign: "center" }}>
                info@simsim.az
              </Card.Title>
              <Button
                variant="dark"
                className="mt-3 w-100"
                onClick={handleEmailClick}
              >
                Email Yaz
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactSection;
