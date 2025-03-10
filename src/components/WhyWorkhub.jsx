import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import { CustomerServiceOutlined, SwapOutlined, DollarOutlined, HistoryOutlined, BankOutlined, TrophyOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const featuresData = [
  { id: 1, title: "Customer support", description: "Our dedicated team provides support to clients every step of the way.", icon: <CustomerServiceOutlined style={{ fontSize: 32, color: "#D9534F" }} /> },
  { id: 2, title: "Flexible", description: "Hassle-free cancellations and no long-term contracts.", icon: <SwapOutlined style={{ fontSize: 32, color: "#D9534F" }} /> },
  { id: 3, title: "Cost-saving", description: "Adds professionalism to your business without the big expense.", icon: <DollarOutlined style={{ fontSize: 32, color: "#D9534F" }} /> },
  { id: 4, title: "Immediate setup", description: "After submitting your details, you'll have instant use.", icon: <HistoryOutlined style={{ fontSize: 32, color: "#D9534F" }} /> },
  { id: 5, title: "Prestigious Locations", description: "Our virtual addresses and serviced offices are located at 5 prime Dublin locations, carefully selected for their prestigious postcodes.", icon: <BankOutlined style={{ fontSize: 32, color: "#D9534F" }} /> },
  { id: 6, title: "High level of service", description: "Workhub offers a high level of service to all its clients. We are always on hand to help, whilst staying behind the scenes, allowing clients to dedicate their full attention to their business.", icon: <TrophyOutlined style={{ fontSize: 32, color: "#D9534F" }} /> }
];

const WhyWorkhub = () => {
  return (
    <section id="whyWorkhub" style={{ background: "#f8f9fa", padding: "60px 20px" }}> {/* Light background */}
      <div className="container">
        <Row gutter={[32, 32]} align="top">
          
          {/* Left Side - Text Content */}
          <Col xs={24} md={10}>
            <Title level={5} style={{ color: "#D9534F", fontWeight: "600" }}>WHY WORKHUB</Title>
            <Title level={2} style={{ fontWeight: "bold" }}>We empower our clients' businesses.</Title>
            <Text type="secondary">
              Our range of plans and services have been carefully developed to help clients run their businesses efficiently and cost-effectively.
            </Text>
            <br /><br />
            <a href="#" style={{ fontWeight: "bold", color: "#333", textDecoration: "none" }}>
              Our Company <span style={{ marginLeft: "5px" }}>&#8594;</span>
            </a>
          </Col>

          {/* Right Side - Features Grid */}
          <Col xs={24} md={14}>
            <Row gutter={[16, 16]}>
              {featuresData.map((feature) => (
                <Col xs={24} sm={12} key={feature.id}>
                  <Card hoverable bordered style={{ textAlign: "center", padding: "20px" }}>
                    <div style={{
                      width: "90px",
                      height: "90px",
                      borderRadius: "12px",
                      border: "2px solid #D9534F",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 15px"
                    }}>
                      {feature.icon}
                    </div>
                    <Title level={5}>{feature.title}</Title>
                    <Text type="secondary">{feature.description}</Text>
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

export default WhyWorkhub;