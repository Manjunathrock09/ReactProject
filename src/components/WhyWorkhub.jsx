import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Typography } from "antd";
import {
  CustomerServiceOutlined,
  SwapOutlined,
  DollarOutlined,
  HistoryOutlined,
  BankOutlined,
  TrophyOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const featuresData = [
  { id: 1, title: "Customer Support", description: "Our dedicated team provides support to clients every step of the way.", icon: <CustomerServiceOutlined /> },
  { id: 2, title: "Flexible", description: "Hassle-free cancellations and no long-term contracts.", icon: <SwapOutlined /> },
  { id: 3, title: "Cost-saving", description: "Adds professionalism to your business without the big expense.", icon: <DollarOutlined /> },
  { id: 4, title: "Immediate Setup", description: "After submitting your details, you'll have instant use.", icon: <HistoryOutlined /> },
  { id: 5, title: "Prestigious Locations", description: "Our virtual addresses and serviced offices are located at 5 prime Dublin locations.", icon: <BankOutlined /> },
  { id: 6, title: "High Level of Service", description: "We provide a high level of service, allowing clients to focus on their business.", icon: <TrophyOutlined /> },
];

const WhyWorkhub = () => {
  return (
    <section id="whyWorkhub" style={sectionStyle}>
      <div style={containerStyle}>
        <Row gutter={[32, 32]} align="top">
          {/* Left Section */}
          <Col xs={24} md={8}>
            <Title level={5} style={subTitleStyle}>WHY WORKHUB</Title>
            <Title level={2} style={mainTitleStyle}>We empower our clients' businesses.</Title>
            <Text type="secondary" style={textStyle}>
              Our range of plans and services have been carefully developed to help clients run their businesses efficiently and cost-effectively.
            </Text>
            <br /><br />
            <Link to="/our-company" style={linkStyle}>
              Our Company <span style={{ marginLeft: "5px" }}>&#8594;</span>
            </Link>
          </Col>

          {/* Right Section - Features */}
          <Col xs={24} md={16}>
            <Row gutter={[16, 16]}>
              {featuresData.map((feature) => (
                <Col key={feature.id} xs={24} sm={12} md={8} style={{ display: "flex" }}>
                  <Card hoverable bordered={false} style={cardStyle}>
                    <div style={iconContainerStyle}>
                      <span style={iconStyle}>{feature.icon}</span>
                    </div>
                    <Title level={5} style={cardTitleStyle}>{feature.title}</Title>
                    <Text type="secondary" style={cardTextStyle}>{feature.description}</Text>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};

/* Custom Styles */
const sectionStyle = {
  background: "#f8f9fa",
  padding: "60px 0",
};

const containerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 20px",
};

const subTitleStyle = {
  color: "#D9534F",
  fontWeight: "600",
  fontSize: "14px",
};

const mainTitleStyle = {
  fontWeight: "bold",
  lineHeight: "1.3",
  fontSize: "22px",
};

const textStyle = {
  fontSize: "14px",
  color: "#666",
};

const linkStyle = {
  fontWeight: "bold",
  color: "#333",
  textDecoration: "none",
  fontSize: "14px",
  transition: "color 0.3s ease-in-out",
};

const cardStyle = {
  textAlign: "center",
  flex: 1, 
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px", // Reduced padding for mobile
  borderRadius: "10px",
  minHeight: "250px",
  height: "100%",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  transition: "transform 0.3s ease-in-out",
  width: "100%",
};

const iconContainerStyle = {
  width: "60px", // Smaller icon container for mobile
  height: "60px",
  backgroundColor: "#D9534F",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  marginBottom: "10px",
};

const iconStyle = {
  fontSize: "30px", // Adjusted icon size for mobile
  color: "#fff",
};

const cardTitleStyle = {
  fontWeight: "600",
  marginBottom: "8px",
  fontSize: "16px", // Adjusted for better readability
  textAlign: "center",
};

const cardTextStyle = {
  fontSize: "12px",
  color: "#666",
  textAlign: "center",
  maxWidth: "90%", // Ensures better wrapping
  margin: "0 auto",
};

export default WhyWorkhub;
