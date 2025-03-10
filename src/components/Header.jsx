import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Offcanvas, Button } from "react-bootstrap";
import { FaBars } from "react-icons/fa";

const AppHeader = () => {
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      <Navbar expand="lg" bg="dark" variant="dark" fixed="top" className="px-3">
        <Navbar.Brand href="/" className="fw-bold text-white">
          WorkHub
        </Navbar.Brand>

        {isMobile ? (
          <Button variant="dark" onClick={() => setShow(true)} className="ms-auto">
            <FaBars size={24} />
          </Button>
        ) : (
          <Nav className="ms-auto">
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
        )}
      </Navbar>

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
