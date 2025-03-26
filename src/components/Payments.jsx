import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button, Card, Table, Alert, Container } from "react-bootstrap";

const Payments = () => {
  const location = useLocation();
  const [payments, setPayments] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  // Function to clear expired payments
  const clearExpiredPayments = () => {
    const storedPayments = JSON.parse(localStorage.getItem("payments")) || [];
    const currentTime = new Date().getTime();

    const validPayments = storedPayments.filter(
      (payment) => currentTime - payment.timestamp < 3600000 // 1 hour = 3600000 ms
    );

    setPayments(validPayments);
    localStorage.setItem("payments", JSON.stringify(validPayments));
  };

  // Load and clear expired payments when the component mounts
  useEffect(() => {
    clearExpiredPayments();
  }, []);

  // Auto-clear expired payments every minute
  useEffect(() => {
    const interval = setInterval(clearExpiredPayments, 60000);
    return () => clearInterval(interval);
  }, []);

  // Add new payment and save it with a timestamp
  useEffect(() => {
    if (location.state && location.state.paymentData) {
      const newPayment = {
        ...location.state.paymentData,
        timestamp: new Date().getTime(), // Add timestamp
      };

      const storedPayments = JSON.parse(localStorage.getItem("payments")) || [];
      const updatedPayments = [...storedPayments, newPayment];

      setPayments(updatedPayments);
      localStorage.setItem("payments", JSON.stringify(updatedPayments));

      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  }, [location.state]);

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card className="shadow-lg p-4 rounded" style={{ width: "80%", maxWidth: "900px" }}>
        <h2 className="text-center mb-4 text-primary fw-bold">💳 Payment History</h2>

        {showSuccess && (
          <Alert variant="success" className="text-center fw-bold fade-in">
            ✅ Payment Successful!
          </Alert>
        )}

        {payments.length > 0 ? (
          <>
            <h4 className="mt-4 text-secondary">📜 Your Recent Transactions</h4>
            <Table striped bordered hover responsive className="mt-3 text-center">
              <thead className="bg-primary text-white">
                <tr>
                  <th>#</th>
                  <th>Plan</th>
                  <th>Location</th>
                  <th>Amount (₹)</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment, index) => (
                  <tr key={index} className="align-middle">
                    <td>{index + 1}</td>
                    <td className="fw-semibold">{payment.plan}</td>
                    <td>{payment.location && payment.location !== "" ? payment.location : "N/A"}</td>
                    <td className="text-success fw-bold">₹{payment.amount}</td>
                    <td>{payment.date}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        ) : (
          <p className="text-center text-muted mt-3">😞 No payments made yet.</p>
        )}

        <Button variant="primary" className="w-100 mt-4 fw-bold py-2" href="/">
          🔙 Back to Home
        </Button>
      </Card>
    </Container>
  );
};

export default Payments;
