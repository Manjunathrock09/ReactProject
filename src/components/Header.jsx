import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Offcanvas, Button, Container } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AppHeader = () => {
  const [show, setShow] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check authentication status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsAuthenticated(false);
      navigate("/login"); // Redirect to login after logout
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -70;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });

      setTimeout(() => {
        window.history.replaceState(null, document.title, window.location.pathname);
      }, 500);

      setShow(false); // Close mobile menu after clicking
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
          <Navbar.Toggle aria-controls="navbar-nav" className="border-0" onClick={() => setShow(true)}>
            <FaBars size={24} color="white" />
          </Navbar.Toggle>

          {/* Navbar Links */}
          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav className="me-3">
              {["hero", "features", "whyWorkhub", "review", "footer"].map((section, index) => (
                <Nav.Link key={section} onClick={() => handleScrollToSection(section)} className="text-white">
                  {["Home", "About", "Services", "Review", "Contact"][index]}
                </Nav.Link>
              ))}
            </Nav>

            {/* Authentication Buttons */}
            {isAuthenticated ? (
              <Button variant="outline-light" onClick={handleLogout} className="fw-bold">
                Logout
              </Button>
            ) : (
              <Button variant="danger" onClick={() => navigate("/login")} className="fw-bold">
                Login
              </Button>
            )}
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
              <Nav.Link key={section} onClick={() => handleScrollToSection(section)} className="fs-5">
                {["Home", "About", "Services", "Review", "Contact"][index]}
              </Nav.Link>
            ))}
          </Nav>

          {/* Authentication Button in Offcanvas */}
          <div className="mt-4 text-center">
            {isAuthenticated ? (
              <Button variant="outline-danger" onClick={handleLogout} className="w-100">
                Logout
              </Button>
            ) : (
              <Button variant="danger" onClick={() => navigate("/login")} className="fw-bold w-100">
                Login
              </Button>
            )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default AppHeader;
