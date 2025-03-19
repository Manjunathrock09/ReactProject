import React, { useState } from "react";
import { Row, Col, Card, Typography, Button, Modal, Form, Input, message } from "antd";
import {
  ClockCircleOutlined,
  PhoneOutlined,
  GlobalOutlined,
  UserOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap for layout

const { Title, Paragraph } = Typography;

// Style constants to reduce repetition
const cardCommonStyle = {
  padding: "20px",
  borderRadius: "10px",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  cursor: "pointer",
};

const startNowBtnStyle = {
  background: "linear-gradient(45deg, #ff4d4f, #ff7875)",
  borderColor: "transparent",
  fontSize: "18px",
  padding: "12px 30px",
  borderRadius: "30px",
  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
  transition: "background 0.3s, box-shadow 0.3s",
};

const sections = [
  {
    title: "Immediate Set Up",
    description:
      "After selecting your plan and checking out online, you will have instant use of your service.",
    icon: <ClockCircleOutlined />,
  },
  {
    title: "Customer Support",
    description:
      "Our dedicated team provides support to clients every step of the way.",
    icon: <PhoneOutlined />,
  },
  {
    title: "Dublin Phone Number",
    description: "A dedicated 015 telephone number is provided.",
    icon: <PhoneOutlined />,
  },
  {
    title: "Optional Overseas Numbers",
    description:
      "Available for all major markets. Contact us for details.",
    icon: <GlobalOutlined />,
  },
];

const steps = [
  {
    title: "How do I sign up?",
    description:
      "Choose a plan, complete the form, add billing details, and submit required documents.",
    icon: <UserOutlined />,
  },
  {
    title: "How long does it take?",
    description:
      "After submission, you'll have instant access to your selected plan.",
    icon: <ClockCircleOutlined />,
  },
  {
    title: "How do I pay?",
    description:
      "Annual subscriptions require credit card payment upon sign-up.",
    icon: <CreditCardOutlined />,
  },
];

const services = [
  {
    title: "Call Answering Service",
    description:
      "A dedicated telephone number with calls professionally answered in your company’s name.",
    image: "/images/Call Answering Service.webp",
  },
  {
    title: "Call Forwarding Service",
    description:
      "A dedicated number that diverts calls to your chosen mobile, landline, or phone system.",
    image: "/images/Call Forwarding Service.webp",
  },
];

const CallService = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => setIsModalVisible(true);
  const handleCancel = () => setIsModalVisible(false);

  // Handle form submission – shows success message and closes modal
  const handleFinish = (values) => {
    message.success("Successfully submitted!");
    setIsModalVisible(false);
  };

  return (
    <div className="container py-5">
      {/* Hero Section */}
      <Card
        className="text-center shadow-lg p-5 mb-5"
        style={{ borderRadius: "10px", background: "#f8f9fa" }}
      >
        <Paragraph className="text-primary text-uppercase fw-bold" style={{ letterSpacing: "2px" }}>
          CALL SERVICES SOLUTIONS
        </Paragraph>
        <Title level={2} className="fw-bold" style={{ marginBottom: "20px" }}>
          Guarantee that essential business calls are always answered promptly and professionally.
        </Title>
        <Paragraph style={{ fontSize: "1.1rem" }}>
          Workhub Call Services provide startups and small businesses with a professional answering service—without the overhead costs.
        </Paragraph>
      </Card>

      {/* Call Plans */}
      <Title level={3} className="mt-5 text-center" style={{ color: "#333", fontWeight: "bold" }}>
        Call Plans Include
      </Title>
      <Row gutter={[24, 24]} justify="center" className="mb-5">
        {sections.map((item, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              className="text-center shadow-sm"
              style={cardCommonStyle}
              hoverable
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
              }}
            >
              <div style={{ fontSize: "50px", color: "#ff4d4f", marginBottom: "10px" }}>
                {item.icon}
              </div>
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
          className={`d-flex flex-column flex-md-row align-items-center justify-content-center mb-5 ${
            index % 2 !== 0 ? "flex-md-row-reverse" : ""
          }`}
          style={{ gap: "20px" }}
        >
          <img
            src={service.image}
            alt={service.title}
            className="img-fluid"
            style={{
              width: "100%",
              maxWidth: "500px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          />
          <div style={{ maxWidth: "500px" }}>
            <Paragraph className="text-primary text-uppercase fw-bold" style={{ letterSpacing: "1px" }}>
              CALL SERVICES SOLUTIONS
            </Paragraph>
            <Title level={2} className="fw-bold" style={{ marginBottom: "20px" }}>
              {service.title}
            </Title>
            <Paragraph style={{ fontSize: "1.1rem" }}>{service.description}</Paragraph>
          </div>
        </div>
      ))}

      {/* How to Get Started */}
      <Title level={2} className="fw-bold text-center mb-4" style={{ color: "#333" }}>
        How to Get Started
      </Title>
      <Row gutter={[24, 24]} justify="center" className="mb-5">
        {steps.map((item, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              className="text-center shadow-sm"
              style={cardCommonStyle}
              hoverable
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
              }}
            >
              <div style={{ fontSize: "50px", color: "#ff4d4f", marginBottom: "10px" }}>
                {item.icon}
              </div>
              <Title level={4}>{item.title}</Title>
              <Paragraph>{item.description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Start Now Button */}
      <div className="text-center mb-5">
        <Button
          type="primary"
          size="large"
          style={startNowBtnStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "linear-gradient(45deg, #ff7875, #ff4d4f)";
            e.currentTarget.style.boxShadow = "0px 8px 20px rgba(0, 0, 0, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "linear-gradient(45deg, #ff4d4f, #ff7875)";
            e.currentTarget.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.2)";
          }}
          onClick={showModal}
        >
          Start Now
        </Button>
      </div>

      {/* Modal Popup */}
      <Modal
        title="Get Started with Call Services"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
      >
        <Form layout="vertical" onFinish={handleFinish}>
          <Form.Item label="Full Name" name="name" rules={[{ required: true, message: "Please enter your name" }]}>
            <Input placeholder="Enter your full name" />
          </Form.Item>

          <Form.Item label="Email" name="email" rules={[{ required: true, message: "Please enter your email" }]}>
            <Input type="email" placeholder="Enter your email" />
          </Form.Item>

          <Form.Item label="Phone Number" name="phone">
            <Input placeholder="Enter your phone number" />
          </Form.Item>

          <div className="text-center">
            <Button type="primary" htmlType="submit" style={{ background: "#ff4d4f", borderColor: "#ff4d4f" }}>
              Submit
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default CallService;
