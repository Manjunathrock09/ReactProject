import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Typography, Avatar, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const OurCompany = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form validation
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email is required.";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(`Thank you, ${formData.name}! Your inquiry has been submitted.`);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
    <Container fluid className="py-5 px-md-5" style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: "#fffbe7" }}>
      
      {/* Company Intro Section */}
      <Row className="align-items-center mb-5 g-4 animate-fade-in">
        <Col md={6} className="d-flex flex-column">
          <Title level={5} className="text-uppercase text-warning fw-bold">Welcome to Workhub India 🇮🇳</Title>
          <Title level={2} className="fw-bold text-dark">Empowering Indian Entrepreneurs</Title>
          <Paragraph className="text-muted fs-5">
            Workhub India provides **flexible office spaces**, meeting room rentals, and virtual office plans for **startups, freelancers, and businesses** across the country. Our goal is to **fuel India's entrepreneurial spirit**.
          </Paragraph>
          <Button 
            variant="warning" 
            className="mt-3 px-4 py-2 shadow-sm fw-bold text-dark"
            onClick={() => document.getElementById("contact-form").scrollIntoView({ behavior: "smooth" })}
          >
            Contact Us
          </Button>
        </Col>
        <Col md={6} className="text-center">
          <img
            src="/images/india-office.jpg"
            alt="Indian Startup Culture"
            className="img-fluid rounded-4 shadow-lg img-hover-effect"
            style={{ maxHeight: "350px", objectFit: "cover" }}
          />
        </Col>
      </Row>

      {/* Success Stories Section */}
      <Row className="bg-white p-5 rounded-4 shadow-lg mb-5 g-4 animate-fade-in">
        <Col md={12} className="text-center">
          <Title level={3} className="fw-bold text-dark">Success Stories</Title>
          <Paragraph className="text-muted fs-5">Discover how Indian startups thrive with Workhub India.</Paragraph>
        </Col>
        <Col md={6} className="text-center">
          <img
            src="/images/success-story1.jpg"
            alt="Startup Success"
            className="img-fluid rounded-4 shadow-lg img-hover-effect"
            style={{ maxHeight: "350px", objectFit: "cover" }}
          />
          <Title level={4} className="mt-3">TechNova</Title>
          <Paragraph className="text-muted">From a garage startup to a funded tech giant with Workhub India's co-working spaces.</Paragraph>
        </Col>
        <Col md={6} className="text-center">
          <img
            src="/images/success-story2.jpg"
            alt="Entrepreneur Growth"
            className="img-fluid rounded-4 shadow-lg img-hover-effect"
            style={{ maxHeight: "350px", objectFit: "cover" }}
          />
          <Title level={4} className="mt-3">GreenMart</Title>
          <Paragraph className="text-muted">Expanded to 10 cities in just 2 years with our virtual office plans.</Paragraph>
        </Col>
      </Row>

      {/* Contact Form Section */}
      <Row id="contact-form" className="bg-white p-5 rounded-4 shadow-lg mb-5 g-4 animate-fade-in">
        <Col md={6} className="d-flex flex-column">
          <Title level={3} className="fw-bold text-dark">Get in Touch</Title>
          <Paragraph className="text-muted fs-5">
            Have questions? Fill out the form below, and our team will get back to you.
          </Paragraph>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Input name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
              {errors.name && <div className="text-danger">{errors.name}</div>}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
              {errors.email && <div className="text-danger">{errors.email}</div>}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Input.TextArea name="message" value={formData.message} onChange={handleChange} placeholder="Enter your message" rows={4} />
              {errors.message && <div className="text-danger">{errors.message}</div>}
            </Form.Group>

            <Button variant="warning" type="submit" className="fw-bold text-dark px-4 py-2">
              Submit Inquiry
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default OurCompany;
