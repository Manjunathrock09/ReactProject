import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Card, Row, Col } from "react-bootstrap";
import { Tooltip } from "antd";
import "antd/dist/reset.css";

const locations = [
  {
    name: "Baggot Street",
    description: "A fully-serviced modern office building in Dublin.",
    price: "₹6,550.72 per annum",
    image: "/images/baggot-street.webp"
  },
  {
    name: "Bracken Road",
    description: "A fully-serviced modern office in Carlisle Business Park, Sandyford.",
    image: "/images/bracken-road.webp"
  },
  {
    name: "Fern Road",
    description: "A fully-serviced modern office in Sandyford Business District.",
    image: "/images/fernroad.webp"
  },
  {
    name: "Camden Street",
    description: "A bright, airy, refurbished building in Dublin with great transport links.",
    image: "/images/camden-street.webp"
  },
];

const CoworkingSpaces = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [infoContent, setInfoContent] = useState(null);

  const handleShowMore = (title, description) => {
    setInfoContent({ title, description });
    setShowInfoModal(true);
  };

  const handleBuyNow = (plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
    setShowModal(false);
    alert(`You have selected ${location.name} for your ${selectedPlan} purchase.`);
  };

  return (
    <div className="container mt-5">
      {/* Section 1: Introduction */}
      <Row className="align-items-center">
        <Col md={6} className="text-md-start text-center">
          <h5 className="text-uppercase text-danger fw-bold">Work From Everywhere</h5>
          <h2 className="fw-bold text-primary">
            Need a change of scenery now and again? <br />
            Use a desk in a co-working space in Dublin with a Workhub Day Pass.
          </h2>
          <p className="text-muted">
            Workhub offers convenient co-working day passes in Dublin, providing access to top-quality 
            Business Centres for up to 8 hours a day. These passes can be purchased individually 
            or in bundles of 5, 10, or 20.
          </p>
        </Col>
        <Col md={6} className="text-center mt-4 mt-md-0">
          <Card className="border-0 shadow-lg rounded-3">
            <img src="/images/coworking-space.png" alt="Coworking Space" className="img-fluid rounded" />
          </Card>
        </Col>
      </Row>

      {/* Section 2: Plans and Prices */}
      <div className="text-center mt-5">
        <h5 className="text-uppercase text-danger fw-bold">CO-WORKING</h5>
        <h2 className="fw-bold text-primary">Co-Working Plans and Prices</h2>
        <p className="text-muted">
          Our 4 virtual office plans have been carefully created to meet a range of business 
          requirements. If you need advice about which plan to choose, please contact us.
        </p>
      </div>

      {/* Plans */}
      <Row className="mt-4 g-4">
        {/* Co-Working Day Pass */}
        <Col md={6}>
          <Card className="p-4 border-0 shadow-lg rounded-4">
            <h6 className="text-danger text-uppercase">CO-WORKING</h6>
            <h4 className="fw-bold text-primary">Co-Working Day Pass</h4>
            <p>Individuals can access coworking space at one of our locations for up to 8 hours a day. From 1 to 60 days.</p>
            <p className="fw-bold text-muted">FROM</p>
            <h3 className="text-danger fw-bold">₹6,550.72<span className="fs-6">/ day + VAT</span></h3>
            <div className="d-flex gap-3 mt-3">
              <Tooltip title="Get more details">
                <Button variant="outline-dark" onClick={() => handleShowMore("Co-Working Day Pass", "Individuals can access coworking space at one of our locations for up to 8 hours a day. From 1 to 60 days.")}>Know more</Button>
              </Tooltip>
              <Button variant="dark" onClick={() => handleBuyNow("Co-Working Day Pass")}>Buy now</Button>
            </div>
          </Card>
        </Col>

        {/* Dedicated Desk Plan */}
        <Col md={6}>
          <Card className="p-4 border-0 shadow-lg rounded-4">
            <h6 className="text-danger text-uppercase">CO-WORKING</h6>
            <h4 className="fw-bold text-primary">Dedicated Desk Plan</h4>
            <p>Fixed Desk in an open-plan office. Use of all facilities within the selected location. From 3 months to 1 year.</p>
            <p className="fw-bold text-muted">FROM</p>
            <h3 className="text-danger fw-bold">₹9,966.65<span className="fs-6">/ 3 months + VAT</span></h3>
            <div className="d-flex gap-3 mt-3">
              <Tooltip title="Get more details">
                <Button variant="outline-dark" onClick={() => handleShowMore("Dedicated Desk Plan", "Fixed Desk in an open-plan office. Use of all facilities within the selected location. From 3 months to 1 year.")}>Know more</Button>
              </Tooltip>
              <Button variant="dark" onClick={() => handleBuyNow("Dedicated Desk Plan")}>Buy now</Button>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Location Selection Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Select a Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please select a location for your {selectedPlan}:</p>
          {locations.map((location, index) => (
            <Card key={index} className="mb-3 p-2 border shadow-sm rounded-3">
              <Row className="align-items-center">
                <Col xs={3}>
                  <img src={location.image} alt={location.name} className="img-fluid rounded-2" />
                </Col>
                <Col xs={6}>
                  <h6 className="fw-bold">{location.name}</h6>
                  <p className="mb-1 text-muted">{location.description}</p>
                </Col>
                <Col xs={3} className="text-end">
                  <Button variant="primary" size="sm" onClick={() => handleSelectLocation(location)}>Select</Button>
                </Col>
              </Row>
            </Card>
          ))}
        </Modal.Body>
      </Modal>

      {/* Info Modal */}
      <Modal show={showInfoModal} onHide={() => setShowInfoModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{infoContent?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{infoContent?.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowInfoModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CoworkingSpaces;
