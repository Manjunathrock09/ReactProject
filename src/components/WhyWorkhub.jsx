import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import { CustomerServiceOutlined, SwapOutlined, DollarOutlined, HistoryOutlined, BankOutlined, TrophyOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const featuresData = [
  { id: 1, title: "Customer Support", description: "Our dedicated team provides support to clients every step of the way.", icon: <CustomerServiceOutlined /> },
  { id: 2, title: "Flexible", description: "Hassle-free cancellations and no long-term contracts.", icon: <SwapOutlined /> },
  { id: 3, title: "Cost-saving", description: "Adds professionalism to your business without the big expense.", icon: <DollarOutlined /> },
  { id: 4, title: "Immediate Setup", description: "After submitting your details, you'll have instant use.", icon: <HistoryOutlined /> },
  { id: 5, title: "Prestigious Locations", description: "Our virtual addresses and serviced offices are located at 5 prime Dublin locations, carefully selected for their prestigious postcodes.", icon: <BankOutlined /> },
  { id: 6, title: "High Level of Service", description: "Workhub offers a high level of service to all its clients. We are always on hand to help, whilst staying behind the scenes, allowing clients to dedicate their full attention to their business.", icon: <TrophyOutlined /> }
];

const WhyWorkhub = () => {
  return (
    <section id="whyWorkhub" style={{ background: "#f8f9fa", padding: "80px 0" }}> {/* Increased padding for better spacing */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}> {/* Full width adjustment */}
        <Row gutter={[48, 48]} align="middle">
          
          {/* Left Section */}
          <Col xs={24} md={10}>
            <Title level={5} style={{ color: "#D9534F", fontWeight: "600" }}>WHY WORKHUB</Title>
            <Title level={2} style={{ fontWeight: "bold", lineHeight: "1.2" }}>We empower our clients' businesses.</Title>
            <Text type="secondary">
              Our range of plans and services have been carefully developed to help clients run their businesses efficiently and cost-effectively.
            </Text>
            <br /><br />
            <a href="#" style={{ fontWeight: "bold", color: "#333", textDecoration: "none", fontSize: "16px" }}>
              Our Company <span style={{ marginLeft: "5px" }}>&#8594;</span>
            </a>
          </Col>

          {/* Right Section - Features Grid */}
          <Col xs={24} md={14}>
            <Row gutter={[24, 24]}>
              {featuresData.map((feature) => (
                <Col xs={24} sm={12} key={feature.id}>
                  <Card 
                    hoverable 
                    bordered={false} 
                    style={{
                      textAlign: "center",
                      padding: "20px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      transition: "transform 0.3s ease-in-out",
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                    onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1.0)"}
                  >
                    {/* Icon Container */}
                    <div style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "12px",
                      border: "2px solid #D9534F",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 15px",
                      fontSize: "32px",
                      color: "#D9534F"
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
