import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Offcanvas, Button, Container } from "react-bootstrap";
import { FaBars } from "react-icons/fa";

const AppHeader = () => {
  const [show, setShow] = useState(false);

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -70;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });

      setTimeout(() => {
        window.history.replaceState(null, document.title, window.location.pathname);
      }, 500);

      setShow(false);
    }
  };

  return (
    <>
      {/* Bootstrap Navbar */}
      <Navbar expand="lg" bg="dark" variant="dark" fixed="top" className="px-3">
        <Container>
          {/* Logo */}
          <Navbar.Brand href="/" className="fw-bold text-white">
            WorkHub
          </Navbar.Brand>

          {/* Navbar Toggle Button for Mobile & Tablet */}
          <Navbar.Toggle aria-controls="navbar-nav" className="border-0">
            <FaBars size={24} color="white" />
          </Navbar.Toggle>

          {/* Navbar Links (Collapsible on tablets) */}
          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav>
              {["hero", "features", "whyWorkhub", "review", "footer"].map((section, index) => (
                <Nav.Link
                  key={section}
                  onClick={() => handleScrollToSection(section)}
                  className="text-white"
                >
                  {["Home", "About", "Services", "Review", "Contact"][index]}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Offcanvas Menu for Mobile & Tablet */}
      <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {["hero", "features", "whyWorkhub", "review", "footer"].map((section, index) => (
              <Nav.Link
                key={section}
                onClick={() => handleScrollToSection(section)}
                className="fs-5"
              >
                {["Home", "About", "Services", "Review", "Contact"][index]}
              </Nav.Link>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default AppHeader;
