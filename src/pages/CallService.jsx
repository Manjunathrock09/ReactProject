import React from "react";
import { Row, Col, Card, Typography, Button } from "antd";
import {
  ClockCircleOutlined,
  PhoneOutlined,
  GlobalOutlined,
  UserOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap for layout

const { Title, Paragraph } = Typography;

const sections = [
  {
    title: "Immediate Set Up",
    description: "After selecting your plan and checking out online, you will have instant use of your service.",
    icon: <ClockCircleOutlined />,
  },
  {
    title: "Customer Support",
    description: "Our dedicated team provides support to clients every step of the way.",
    icon: <PhoneOutlined />,
  },
  {
    title: "Dublin Phone Number",
    description: "A dedicated 015 telephone number is provided.",
    icon: <PhoneOutlined />,
  },
  {
    title: "Optional Overseas Numbers",
    description: "Available for all major markets. Contact us for details.",
    icon: <GlobalOutlined />,
  },
];

const steps = [
  {
    title: "How do I sign up?",
    description: "Choose a plan, complete the form, add billing details, and submit required documents.",
    icon: <UserOutlined />,
  },
  {
    title: "How long does it take?",
    description: "After submission, you'll have instant access to your selected plan.",
    icon: <ClockCircleOutlined />,
  },
  {
    title: "How do I pay?",
    description: "Annual subscriptions require credit card payment upon sign-up.",
    icon: <CreditCardOutlined />,
  },
];

const services = [
  {
    title: "Call Answering Service",
    description: "A dedicated telephone number with calls professionally answered in your company’s name.",
    image: "/images/Call Answering Service.webp",
  },
  {
    title: "Call Forwarding Service",
    description: "A dedicated number that diverts calls to your chosen mobile, landline, or phone system.",
    image: "/images/Call Forwarding Service.webp",
  },
];

const CallService = () => {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <Card className="text-center shadow-lg p-5" style={{ borderRadius: "10px", background: "#f8f9fa" }}>
        <Paragraph className="text-primary text-uppercase fw-bold">CALL SERVICES SOLUTIONS</Paragraph>
        <Title level={2} className="fw-bold">
          Guarantee that essential business calls are always answered promptly and professionally.
        </Title>
        <Paragraph>
          Workhub Call Services provide startups and small businesses with a professional answering service—without the overhead costs.
        </Paragraph>
      </Card>

      {/* Call Plans */}
      <Title level={3} className="mt-5 text-center">Call Plans Include</Title>
      <Row gutter={[24, 24]} justify="center">
        {sections.map((item, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              className="text-center shadow-sm"
              style={{
                padding: "20px",
                borderRadius: "10px",
                transition: "all 0.3s ease-in-out",
                cursor: "pointer",
              }}
              hoverable
            >
              <div style={{ fontSize: "50px", color: "#ff4d4f", marginBottom: "10px" }}>{item.icon}</div>
              <Title level={4}>{item.title}</Title>
              <Paragraph>{item.description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Services Section */}
      {services.map((service, index) => (
        <div
          key={index}
          className={`d-flex flex-column flex-md-row align-items-center justify-content-center mt-5 ${
            index % 2 !== 0 ? "flex-md-row-reverse" : ""
          }`}
          style={{ gap: "20px" }}
        >
          <img
            src={service.image}
            alt={service.title}
            className="img-fluid"
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          />
          <div>
            <Paragraph className="text-primary text-uppercase fw-bold">CALL SERVICES SOLUTIONS</Paragraph>
            <Title level={2} className="fw-bold">{service.title}</Title>
            <Paragraph>{service.description}</Paragraph>
          </div>
        </div>
      ))}

      {/* How to Get Started */}
      <Title level={2} className="fw-bold mt-5 text-center">How to Get Started</Title>
      <Row gutter={[24, 24]} justify="center">
        {steps.map((item, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              className="text-center shadow-sm"
              style={{
                padding: "20px",
                borderRadius: "10px",
                transition: "all 0.3s ease-in-out",
                cursor: "pointer",
              }}
              hoverable
            >
              <div style={{ fontSize: "50px", color: "#ff4d4f", marginBottom: "10px" }}>{item.icon}</div>
              <Title level={4}>{item.title}</Title>
              <Paragraph>{item.description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Start Now Button */}
      <div className="text-center mt-4">
        <Button
          type="primary"
          size="large"
          style={{
            background: "#ff4d4f",
            borderColor: "#ff4d4f",
            fontSize: "18px",
            padding: "12px 30px",
            borderRadius: "30px",
            transition: "all 0.3s ease-in-out",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "#d9363e";
            e.target.style.borderColor = "#d9363e";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "#ff4d4f";
            e.target.style.borderColor = "#ff4d4f";
          }}
        >
          Start Now
        </Button>
      </div>
    </div>
  );
};

export default CallService;
