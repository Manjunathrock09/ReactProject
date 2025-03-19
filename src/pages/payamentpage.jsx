import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, Form, Button, InputGroup, Container, Row, Col } from "react-bootstrap";
import { Input, Select, message } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/reset.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const { Option } = Select;

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { plan, location: selectedLocation } = location.state || {};
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [quantity, setQuantity] = useState(1);

  if (!plan || !selectedLocation) {
    return <p className="text-center mt-5 text-danger">⚠️ Invalid selection. Please go back and select a plan.</p>;
  }

  const prices = {
    "Co-Working Day Pass": 6550.72,
    "Dedicated Desk Plan": 9966.65,
  };

  const pricePerUnit = prices[plan] || 9999;
  const totalPrice = pricePerUnit * quantity;

  const handlePayment = () => {
    message.success(
      `✅ Payment Successful! 🎉\nPlan: ${plan}\nLocation: ${selectedLocation.name}\nDuration: ${quantity} ${
        plan === "Co-Working Day Pass" ? "days" : "months"
      }\nAmount: ₹${totalPrice}`
    );
    navigate("/");
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6}>
          <Card className="p-4 shadow-lg border-0 rounded-4 text-center" style={{ backgroundColor: "#f8f9fa" }}>
            <h2 className="fw-bold text-primary">
              <i className="bi bi-lock-fill"></i> Secure Payment
            </h2>
            <p className="text-muted">Review your booking details before proceeding.</p>
            <Card.Body>
              <h4 className="fw-bold">{plan} ✅</h4>
              <h5 className="text-danger">
                <i className="bi bi-geo-alt-fill"></i> Location: {selectedLocation.name}
              </h5>

              <div className="text-center">
                <img
                  src={selectedLocation.image}
                  alt={selectedLocation.name}
                  className="img-fluid rounded mb-3 shadow-sm"
                  style={{ maxWidth: "100%", height: "auto", maxHeight: "220px", objectFit: "cover", borderRadius: "12px" }}
                />
              </div>

              <p className="text-secondary">{selectedLocation.description}</p>

              <Form className="mt-3">
                <Form.Label className="fw-bold">
                  <i className="bi bi-calendar-check"></i> Select {plan === "Co-Working Day Pass" ? "Number of Days" : "Number of Months"}
                </Form.Label>
                <Input
                  type="number"
                  min="1"
                  max="60"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="fw-bold w-100 p-2 border rounded-3"
                  style={{ fontSize: "16px" }}
                />
              </Form>

              <h3 className="text-success fw-bold mt-3">
                <i className="bi bi-cash-stack"></i> Total: ₹{totalPrice} + VAT
              </h3>

              <Form className="mt-4">
              <Form.Label className="fw-bold">
        <i className="bi bi-credit-card"></i> Choose Payment Method
      </Form.Label>
          <Select value={paymentMethod} onChange={(value) => setPaymentMethod(value)} className="w-100" style={{ height: "45px",
          fontSize: "16px",
          borderRadius: "8px",
          paddingLeft: "12px",
          display: "flex",
          alignItems: "center",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Option value="credit-card">💳 Credit Card</Option>
        <Option value="debit-card">💳 Debit Card</Option>
        <Option value="upi">📱 UPI</Option>
        <Option value="net-banking">🏦 Net Banking</Option>
        <Option value="wallet">👛 Wallet</Option>
          </Select>
                {paymentMethod === "credit-card" || paymentMethod === "debit-card" ? (
                  <div className="mt-3 text-start">
                    <Form.Label>Card Number</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <i className="bi bi-credit-card"></i>
                      </InputGroup.Text>
                      <Input type="text" placeholder="1234 5678 9012 3456" className="w-100 p-2 rounded-3" />
                    </InputGroup>

                    <Row className="mt-2">
                      <Col xs={6}>
                        <Form.Label>Expiry Date</Form.Label>
                        <Input placeholder="MM/YY" className="p-2 rounded-3 w-100" />
                      </Col>
                      <Col xs={6}>
                        <Form.Label>CVV</Form.Label>
                        <Input type="password" placeholder="***" className="p-2 rounded-3 w-100" />
                      </Col>
                    </Row>
                  </div>
                ) : null}

                {paymentMethod === "upi" ? (
                  <div className="mt-3">
                    <Form.Label>UPI ID</Form.Label>
                    <Input placeholder="example@upi" className="w-100 p-2 rounded-3" />
                  </div>
                ) : null}

                {paymentMethod === "net-banking" ? (
                  <div className="mt-3">
                    <Form.Label>Bank Name</Form.Label>
                    <Input placeholder="Enter bank name" className="w-100 p-2 rounded-3" />
                  </div>
                ) : null}

                {paymentMethod === "wallet" ? (
                  <div className="mt-3">
                    <Form.Label>Wallet Provider</Form.Label>
                    <Select className="w-100 p-2 rounded-3">
                      <Option value="paytm">Paytm</Option>
                      <Option value="google-pay">Google Pay</Option>
                      <Option value="phonepe">PhonePe</Option>
                    </Select>
                  </div>
                ) : null}

                <Button
                  variant="success"
                  className="mt-4 w-100 fw-bold shadow-sm p-3 rounded-3"
                  onClick={handlePayment}
                  size="lg"
                  style={{ fontSize: "18px", transition: "0.3s ease-in-out" }}
                >
                  ✅ Pay ₹{totalPrice} Now
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentPage;
