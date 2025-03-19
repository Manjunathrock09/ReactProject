import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button, Offcanvas, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { List } from "react-bootstrap-icons";

const AppHeader = () => {
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -70;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setShow(false);
    }
  };

  return (
    <Navbar fixed="top" expand="lg" bg="dark" variant="dark" className="shadow-lg p-3">
      <Container>
        {/* Logo */}
        <Navbar.Brand
          onClick={() => navigate("/")}
          style={{ cursor: "pointer", fontSize: "1.8rem", fontWeight: "bold" }}
        >
          Work<span style={{ color: "#1890ff" }}>Hub</span>
        </Navbar.Brand>

        {/* Mobile Menu Button */}
        {isMobile && (
          <Button variant="outline-light" onClick={() => setShow(true)}>
            <List size={30} />
          </Button>
        )}

        {/* Desktop Navbar */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => handleScrollToSection("hero")}>
              Home
            </Nav.Link>
            <Nav.Link onClick={() => handleScrollToSection("features")}>
              About
            </Nav.Link>
            <Nav.Link onClick={() => handleScrollToSection("whyWorkhub")}>
              Services
            </Nav.Link>
            <Nav.Link onClick={() => handleScrollToSection("review")}>
              Review
            </Nav.Link>
            <Nav.Link onClick={() => handleScrollToSection("footer")}>
              Contact
            </Nav.Link>
          </Nav>
          <Button variant="primary" className="ms-3" onClick={() => navigate("/login")}>Login</Button>
        </Navbar.Collapse>
      </Container>

      {/* Mobile Offcanvas Menu */}
      <Offcanvas show={show} onHide={() => setShow(false)} placement="end" className="bg-light">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link onClick={() => handleScrollToSection("hero")}>
              Home
            </Nav.Link>
            <Nav.Link onClick={() => handleScrollToSection("features")}>
              About
            </Nav.Link>
            <Nav.Link onClick={() => handleScrollToSection("whyWorkhub")}>
              Services
            </Nav.Link>
            <Nav.Link onClick={() => handleScrollToSection("review")}>
              Review
            </Nav.Link>
            <Nav.Link onClick={() => handleScrollToSection("footer")}>
              Contact
            </Nav.Link>
          </Nav>
          <Button variant="primary" className="w-100 mt-3" onClick={() => navigate("/login")}>Login</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
};

export default AppHeader;
