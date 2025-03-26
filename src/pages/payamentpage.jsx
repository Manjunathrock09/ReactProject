import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Form, Input, Select, Button, message } from "antd";
import { motion } from "framer-motion";
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
  const [form] = Form.useForm();

  if (!plan || !selectedLocation) {
    return <p className="text-center mt-5 text-danger">⚠️ Invalid selection. Please go back and select a plan.</p>;
  }

  // Dynamic Pricing based on the selected plan
  const prices = {
    "Co-Working Day Pass": 500, // ₹500 per day
    "Dedicated Desk Plan": 700, // ₹700 per day
    "Private Office Plan": 1200, // ₹1200 per day
    "Meeting Room Plan": 1500, // ₹1500 per day
  };

  // Calculate Total Price Dynamically
  const pricePerUnit = prices[plan] || 999; // Default fallback price
  const totalPrice = pricePerUnit * quantity;

  // Handle Payment Submission
  const handlePayment = async () => {
    try {
      await form.validateFields();

      const paymentData = {
        id: Date.now(),
        plan,
        location: selectedLocation.name,
        amount: totalPrice.toFixed(2),
        date: new Date().toLocaleString(),
      };

      message.success(`✅ Payment Successful! Amount Paid: ₹${totalPrice}`);

      setTimeout(() => {
        navigate("/payments", { state: { paymentData } });
      }, 2500);
    } catch (error) {
      message.error("⚠️ Please fill in all required fields correctly!");
    }
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-4 shadow-lg border-0 rounded-4 text-center bg-light">
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

                <h3 className="text-success fw-bold">
                  <i className="bi bi-cash-stack"></i> Total: ₹{totalPrice} + VAT
                </h3>

                <Form form={form} layout="vertical" className="mt-3">
                <Form.Item 
                label="SLNo" 
                name="SLNO" 
                initialValue={1} // Default value
                rules={[{ required: true, message: "Please enter quantity!" }]}
          >
  <Input
    type="number"
    min="1"
    max="60"
    value={quantity}
    onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
    className="fw-bold w-100 p-2 border rounded-3"
  />
</Form.Item>

                  <Form.Item label="Payment Method" name="paymentMethod" rules={[{ required: true, message: "Please select a payment method!" }]}>
                    <Select value={paymentMethod} onChange={setPaymentMethod} className="w-100">
                      <Option value="credit-card">💳 Credit Card</Option>
                      <Option value="debit-card">💳 Debit Card</Option>
                      <Option value="upi">📱 UPI</Option>
                      <Option value="net-banking">🏦 Net Banking</Option>
                      <Option value="wallet">👛 Wallet</Option>
                      <Option value="paypal">🅿️ PayPal</Option>
                      <Option value="apple-pay">🍏 Apple Pay</Option>
                      <Option value="google-pay">📱 Google Pay</Option>
                    </Select>
                  </Form.Item>

                  {["credit-card", "debit-card"].includes(paymentMethod) && (
                    <>
                      <Form.Item label="Card Number" name="cardNumber" rules={[{ required: true, message: "Enter card number!" }]}>
                        <Input placeholder="1234 5678 9012 3456" maxLength={16} />
                      </Form.Item>

                      <Row>
                        <Col xs={6}>
                          <Form.Item label="Expiry Date" name="expiryDate" rules={[{ required: true, message: "Enter expiry date!" }]}>
                            <Input placeholder="MM/YY" maxLength={5} />
                          </Form.Item>
                        </Col>
                        <Col xs={6}>
                          <Form.Item label="CVV" name="cvv" rules={[{ required: true, message: "Enter CVV!" }]}>
                            <Input.Password placeholder="***" maxLength={4} />
                          </Form.Item>
                        </Col>
                      </Row>
                    </>
                  )}

                  {paymentMethod === "upi" && (
                    <Form.Item label="UPI ID" name="upiId" rules={[{ required: true, message: "Enter UPI ID!" }]}>
                      <Input placeholder="example@upi" />
                    </Form.Item>
                  )}

                  {paymentMethod === "net-banking" && (
                    <Form.Item label="Bank Name" name="bankName" rules={[{ required: true, message: "Enter bank name!" }]}>
                      <Input placeholder="Enter bank name" />
                    </Form.Item>
                  )}

                  {paymentMethod === "wallet" && (
                    <Form.Item label="Wallet Provider" name="walletProvider" rules={[{ required: true, message: "Select wallet provider!" }]}>
                      <Select>
                        <Option value="paytm">Paytm</Option>
                        <Option value="google-pay">Google Pay</Option>
                        <Option value="phonepe">PhonePe</Option>
                      </Select>
                    </Form.Item>
                  )}

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button type="primary" className="w-100 fw-bold mt-3 p-3" onClick={handlePayment}>
                      ✅ Pay ₹{totalPrice} Now
                    </Button>
                  </motion.div>
                </Form>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentPage;
