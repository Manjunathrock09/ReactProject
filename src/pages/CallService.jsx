import React from "react";
import { Row, Col, Card, Typography, Button } from "antd";
import { ClockCircleOutlined, PhoneOutlined,GlobalOutlined, UserOutlined,CreditCardOutlined,} from "@ant-design/icons";
const { Title, Paragraph } = Typography;
const sections = [
  {
    title: "Immediate set up",
    description:
      "After selecting your plan and checking out online, you will have instant use of your service.",
    icon: <ClockCircleOutlined />,
  },
  {
    title: "Customer support",
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
    description: "Available for all major markets. Contact us for details.",
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
  return (
    <div className="container">
      <Card className="text-center shadow-sm p-5">
        <Paragraph className="text-warning text-uppercase fw-bold">
          CALL SERVICES SOLUTIONS
        </Paragraph>
        <Title level={2} className="fw-bold">
          Guarantee that essential business calls are always answered promptly
          and professionally.
        </Title>
        <Paragraph>
          Workhub Call Services provide startups and small businesses with a
          professional answering service—without the overhead costs.
        </Paragraph>
      </Card>

      <Title level={3} className="mt-5">Call Plans Include</Title>
      <Row gutter={[16, 16]} justify="center">
        {sections.map((item, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card className="text-center shadow-sm p-4">
              <div className="mb-3" style={{ fontSize: "50px", color: "red" }}>
                {item.icon}
              </div>
              <Title level={4}>{item.title}</Title>
              <Paragraph>{item.description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>

      {services.map((service, index) => (
        <div
          key={index}
          className={`mt-5 d-flex flex-column flex-md-row align-items-center ${
            index % 2 !== 0 ? "flex-md-row-reverse" : ""
          }`}
        >
          <img
            src={service.image}
            alt={service.title}
            className="img-fluid mx-md-4 mb-3"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <div>
            <Paragraph className="text-warning text-uppercase fw-bold">
              CALL SERVICES SOLUTIONS
            </Paragraph>
            <Title level={2} className="fw-bold">{service.title}</Title>
            <Paragraph>{service.description}</Paragraph>
          </div>
        </div>
      ))}

      <Title level={2} className="fw-bold mt-5 text-center">
        How to Get Started
      </Title>
      <Row gutter={[16, 16]} justify="center">
        {steps.map((item, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card className="text-center shadow-sm p-4">
              <div className="mb-3" style={{ fontSize: "50px", color: "red" }}>
                {item.icon}
              </div>
              <Title level={4}>{item.title}</Title>
              <Paragraph>{item.description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-center mt-4">
        <Button type="primary" size="large">
          Start now
        </Button>
      </div>
    </div>
  );
};

export default CallService;
