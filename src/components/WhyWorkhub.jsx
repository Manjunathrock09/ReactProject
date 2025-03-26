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
  { id: 1, title: "24/7 Customer Support", description: "Our team is available round the clock to assist businesses across India.", icon: <CustomerServiceOutlined /> },
  { id: 2, title: "Flexible Workspaces", description: "Choose from virtual offices, coworking spaces, and private cabins.", icon: <SwapOutlined /> },
  { id: 3, title: "Affordable Pricing", description: "Premium business addresses and services at competitive Indian rates.", icon: <DollarOutlined /> },
  { id: 4, title: "Instant Business Setup", description: "Get your workspace or virtual office activated within minutes.", icon: <HistoryOutlined /> },
  { id: 5, title: "Prime Indian Locations", description: "We offer addresses in Mumbai, Delhi, Bangalore, Chennai, and more.", icon: <BankOutlined /> },
  { id: 6, title: "Professional Business Services", description: "From GST registration to mail handling, we cover it all.", icon: <TrophyOutlined /> },
];

const WhyWorkhub = () => {
  return (
    <section id="whyWorkhub" style={sectionStyle}>
      <div style={containerStyle}>
        <Row gutter={[24, 24]} align="middle">
          {/* Left Section */}
          <Col xs={24} md={8}>
            <Title level={5} style={subTitleStyle}>WHY WORKHUB INDIA</Title>
            <Title level={2} style={mainTitleStyle}>Empowering Indian Businesses & Startups</Title>
            <Text type="secondary" style={textStyle}>
              We provide flexible office solutions tailored to India's dynamic business environment, enabling startups, freelancers, and enterprises to work efficiently.
            </Text>
            <br /><br />
            <Link to="/our-company" style={linkStyle}>
              Learn More <span style={{ marginLeft: "5px" }}>&#8594;</span>
            </Link>
          </Col>

          {/* Right Section - Features */}
          <Col xs={24} md={16}>
            <Row gutter={[16, 16]} justify="center">
              {featuresData.map((feature) => (
                <Col key={feature.id} xs={24} sm={12} md={8} lg={8} xl={8} style={{ display: "flex", justifyContent: "center" }}>
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
  background: "linear-gradient(to right, #f8f9fa, #e9ecef)",
  padding: "80px 0",
};

const containerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 20px",
};

const subTitleStyle = {
  color: "#D9534F",
  fontWeight: "700",
  fontSize: "14px",
  letterSpacing: "1px",
  textTransform: "uppercase",
};

const mainTitleStyle = {
  fontWeight: "bold",
  lineHeight: "1.3",
  fontSize: "24px",
};

const textStyle = {
  fontSize: "14px",
  color: "#444",
  lineHeight: "1.6",
};

const linkStyle = {
  fontWeight: "bold",
  color: "#D9534F",
  textDecoration: "none",
  fontSize: "14px",
  transition: "color 0.3s ease-in-out",
};
linkStyle[":hover"] = { color: "#A94442" };

const cardStyle = {
  textAlign: "center",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px",
  borderRadius: "12px",
  minHeight: "220px",
  width: "100%", // Adjust width dynamically
  maxWidth: "320px", // Restrict max width for uniformity
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  backgroundColor: "#fff",
};
cardStyle[":hover"] = { transform: "translateY(-5px)", boxShadow: "0 8px 16px rgba(0,0,0,0.15)" };

const iconContainerStyle = {
  width: "55px",
  height: "55px",
  backgroundColor: "#D9534F",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  marginBottom: "12px",
  transition: "background 0.3s ease-in-out",
};
iconContainerStyle[":hover"] = { backgroundColor: "#A94442" };

const iconStyle = {
  fontSize: "28px",
  color: "#fff",
};

const cardTitleStyle = {
  fontWeight: "600",
  marginBottom: "8px",
  fontSize: "16px",
  textAlign: "center",
};

const cardTextStyle = {
  fontSize: "13px",
  color: "#666",
  textAlign: "center",
  maxWidth: "100%",
  margin: "0 auto",
};

export default WhyWorkhub;
