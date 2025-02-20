import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./style.css";
import Logo from "../../assets/simsim_logo_black.png";

const NavbarSection = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => setExpanded(false);

  return (
    <Navbar
      expand="lg"
      className="navbar-custom"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleNavClick}>
          <img
            className="img"
            src={Logo}
            alt="SimSim Logo"
          />
          <span className="simsim ms-2">SimSim</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggler"
        >
          {expanded ? <FaTimes size={24} /> : <FaBars size={24} />}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" id="links">
            <Nav.Link as={NavLink} to="/" onClick={handleNavClick}>
              Nömrələr
            </Nav.Link>
            <Nav.Link as={NavLink} to="/catalog" onClick={handleNavClick}>
              Rəqəmsal Kataloq
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" onClick={handleNavClick}>
              Haqqımızda
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
              onClick={handleNavClick}
              className="button-join"
            >
              Qoşul & Əlaqə
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarSection;
