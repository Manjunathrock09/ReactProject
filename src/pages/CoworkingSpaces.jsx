import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Card, Row, Col } from "react-bootstrap";
import "antd/dist/reset.css";

const locations = [
  {
    name: "Connaught Place, Delhi",
    description: "Premium coworking space in the heart of Delhi with all modern amenities.",
    price: "₹500 per day",
    image: "/images/delhi.jpg"
  },
  {
    name: "Indiranagar, Bangalore",
    description: "A vibrant coworking space in one of Bangalore’s prime locations.",
    image: "/images/bengaluru.jpg"
  },
  {
    name: "Bandra Kurla Complex, Mumbai",
    description: "A state-of-the-art business hub in Mumbai’s corporate district.",
    image: "/images/mumbai.jpg"
  },
  {
    name: "T. Nagar, Chennai",
    description: "Fully equipped coworking space in Chennai’s commercial hub.",
    image: "/images/t-nagar.jfif"
  },
  {
    name: "Hitech City, Hyderabad",
    description: "A modern coworking space in Hyderabad’s major IT and business district.",
    image: "/images/hyderabad.jpg"
  },
];

const CoworkingSpaces = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();

  const handleBuyNow = (plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  const handleSelectLocation = (location) => {
    setShowModal(false);
    navigate("/payment", { state: { plan: selectedPlan, location } });
  };

  return (
    <div className="container mt-5">
      {/* Introduction Section */}
      <Row className="align-items-center">
        <Col md={6} className="text-md-start text-center">
          <h5 className="text-uppercase text-danger fw-bold">Work From Anywhere</h5>
          <h2 className="fw-bold text-primary">
            Looking for a productive workspace? <br />
            Get access to top coworking spaces across India with Workhub Pass.
          </h2>
          <p className="text-muted">
            Workhub provides access to high-quality coworking spaces in major Indian cities. 
            Choose from flexible plans for individuals and teams, available from 1 day to 1 year.
          </p>
        </Col>
        <Col md={6} className="text-center mt-4 mt-md-0">
          <Card className="border-0 shadow-lg rounded-3 overflow-hidden">
            <img src="/images/coworking-space.jpg" alt="Coworking Space" className="img-fluid" />
          </Card>
        </Col>
      </Row>

      {/* Plans Section */}
      <div className="text-center mt-5">
        <h5 className="text-uppercase text-danger fw-bold">CO-WORKING PLANS</h5>
        <h2 className="fw-bold text-primary">Choose a Plan That Suits You</h2>
      </div>

      <Row className="mt-4 g-4">
        {/* Day Pass */}
        <Col md={6} className="d-flex align-items-stretch">
          <Card className="p-4 border-0 shadow-lg rounded-4 w-100">
            <h6 className="text-danger text-uppercase">CO-WORKING</h6>
            <h4 className="fw-bold text-primary">Day Pass</h4>
            <p>Access a coworking space for a day. Ideal for freelancers and remote workers.</p>
            <h3 className="text-danger fw-bold">₹500<span className="fs-6">/ day</span></h3>
            <Button variant="dark" className="mt-3 w-100" onClick={() => handleBuyNow("Day Pass")}>
              Buy Now
            </Button>
          </Card>
        </Col>

        {/* Dedicated Desk */}
        <Col md={6} className="d-flex align-items-stretch">
          <Card className="p-4 border-0 shadow-lg rounded-4 w-100">
            <h6 className="text-danger text-uppercase">CO-WORKING</h6>
            <h4 className="fw-bold text-primary">Dedicated Desk</h4>
            <p>A fixed desk in a shared workspace. Perfect for teams and individuals needing a consistent workspace.</p>
            <h3 className="text-danger fw-bold">₹800<span className="fs-6">/ day</span></h3>
            <Button variant="dark" className="mt-3 w-100" onClick={() => handleBuyNow("Dedicated Desk")}>
              Buy Now
            </Button>
          </Card>
        </Col>
      </Row>

      {/* Location Selection Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Select a Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Select a location for your {selectedPlan}:</p>
          {locations.map((location, index) => (
            <Card key={index} className="mb-3 p-3 border shadow-sm rounded-3">
              <Row className="align-items-center">
                <Col xs={3}>
                  <img src={location.image} alt={location.name} className="img-fluid rounded-2" />
                </Col>
                <Col xs={6}>
                  <h6 className="fw-bold mb-1">{location.name}</h6>
                  <p className="text-muted small mb-0">{location.description}</p>
                </Col>
                <Col xs={3} className="text-end">
                  <Button variant="primary" size="sm" onClick={() => handleSelectLocation(location)}>Select</Button>
                </Col>
              </Row>
            </Card>
          ))}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CoworkingSpaces;
