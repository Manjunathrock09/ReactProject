import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login, guestLogin } from "../firebase/auth";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGuestLogin = async () => {
    setError("");
    try {
      await guestLogin();
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="shadow-lg p-4 rounded" style={{ width: "100%", maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Login</h2>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleLogin}>
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

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>

          <Button variant="outline-secondary" onClick={handleGuestLogin} className="w-100 mt-2">
            Guest Login
          </Button>
        </Form>

        <div className="text-center mt-3">
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary">
              Sign up
            </Link>
          </p>
          <p>
            <Link to="/forgot-password" className="text-danger">
              Forgot Password?
            </Link>
          </p>
        </div>
      </Card>
    </Container>
  );
};

export default Login;
