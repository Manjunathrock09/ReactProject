import React, { useState } from "react";
import { auth } from "../firebase/firebaseConfig"; // Ensure correct Firebase import
import { sendPasswordResetEmail } from "firebase/auth";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Check your email for reset instructions.");
    } catch (err) {
      setError("Error: " + err.message);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="shadow-lg p-4 rounded" style={{ width: "100%", maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Forgot Password</h2>

        {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}

        <Form onSubmit={handleReset}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Reset Password
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default ForgotPassword;
