  import React, { useState, useEffect } from "react";
  import { Navbar, Nav, Button, Offcanvas, Container } from "react-bootstrap";
  import { useNavigate, useLocation } from "react-router-dom";
  import { List } from "react-bootstrap-icons";
  import { CreditCard } from "react-bootstrap-icons"; // Import icon

  const AppHeader = () => {
    const [show, setShow] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= 768);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleScrollToSection = (id) => {
      if (location.pathname !== "/") {
        navigate("/"); // Navigate to home first
        setTimeout(() => scrollToSection(id), 300); // Delay to ensure the home page loads
      } else {
        scrollToSection(id);
      }
      setShow(false);
    };

    const scrollToSection = (id) => {
      const section = document.getElementById(id);
      if (section) {
        const yOffset = -70;
        const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };

    const isActive = (path) => location.pathname === path;

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
              <Nav.Link
                onClick={() => handleScrollToSection("hero")}
                className={isActive("/") ? "text-primary fw-bold" : ""}
              >
                Home
              </Nav.Link>
              <Nav.Link
                onClick={() => handleScrollToSection("features")}
                className={location.pathname === "/" ? "" : "text-primary fw-bold"}
              >
                About
              </Nav.Link>
              <Nav.Link
                onClick={() => handleScrollToSection("whyWorkhub")}
                className={location.pathname === "/" ? "" : "text-primary fw-bold"}
              >
                Services
              </Nav.Link>
              <Nav.Link
                onClick={() => handleScrollToSection("review")}
                className={location.pathname === "/" ? "" : "text-primary fw-bold"}
              >
                Review
              </Nav.Link>
              <Nav.Link
                onClick={() => handleScrollToSection("footer")}
                className={location.pathname === "/" ? "" : "text-primary fw-bold"}
              >
                Contact
              </Nav.Link>
              <Nav.Link
                onClick={() => navigate("/payments")}
                className={isActive("/payments") ? "text-primary fw-bold" : ""}
              >
                Payments
              </Nav.Link>
            </Nav>
            <Button variant="primary" className="ms-3" onClick={() => navigate("/login")}>
              Login
            </Button>
          </Navbar.Collapse>
        </Container>

        {/* Mobile Offcanvas Menu */}
        <Offcanvas show={show} onHide={() => setShow(false)} placement="end" className="bg-light">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              <Nav.Link
                onClick={() => handleScrollToSection("hero")}
                className={isActive("/") ? "text-primary fw-bold" : ""}
              >
                Home
              </Nav.Link>
              <Nav.Link
                onClick={() => handleScrollToSection("features")}
                className={location.pathname === "/" ? "" : "text-primary fw-bold"}
              >
                About
              </Nav.Link>
              <Nav.Link
                onClick={() => handleScrollToSection("whyWorkhub")}
                className={location.pathname === "/" ? "" : "text-primary fw-bold"}
              >
                Services
              </Nav.Link>
              <Nav.Link
                onClick={() => handleScrollToSection("review")}
                className={location.pathname === "/" ? "" : "text-primary fw-bold"}
              >
                Review
              </Nav.Link>
              <Nav.Link
                onClick={() => handleScrollToSection("footer")}
                className={location.pathname === "/" ? "" : "text-primary fw-bold"}
              >
                Contact
              </Nav.Link>
              <Nav.Link onClick={() => navigate("/payments")} className={isActive("/payments") ? "text-primary fw-bold" : ""}>
            <CreditCard size={20} className="me-2" /> Payments
              </Nav.Link>
            </Nav>
            <Button variant="primary" className="w-100 mt-3" onClick={() => navigate("/login")}>
              Login
            </Button>
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>
    );
  };

  export default AppHeader;
