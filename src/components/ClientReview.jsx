import React from "react";
import { Card, Typography, Avatar, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const ClientReview = () => {
  return (
    <Card
      id="review"
      style={{
        width: "100%",
        maxWidth: "1400px",
        margin: "auto",
        borderRadius: "10px",
        padding: "40px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#F8F9FA",
        border: "none",
      }}
    >
      <Row gutter={[32, 32]} align="middle">
        {/* Avatar & Text Section */}
        <Col xs={24} md={12}>
          <Text
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#222",
              fontWeight: "400",
              textAlign: "center",
              display: "block",
            }}
          >
            I am very happy with the office space and the service we receive
            from the Workhub team. Any and all problems, which are few in
            number, are quickly and fully resolved in a friendly and efficient
            manner. We have no hesitation in recommending Workhub to our own
            clients.
          </Text>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: 32 }}>
            <Avatar
              size={64}
              icon={<UserOutlined />}
              style={{ backgroundColor: "#F15A24", marginRight: 16 }}
            />
            <div>
              <Title level={5} style={{ margin: 0, fontWeight: "600", textAlign: "center" }}>
                Andrew Gorby, Managing Director
              </Title>
              <Text strong style={{ color: "#333", display: "block", textAlign: "center" }}>
                IRIS Analytics
              </Text>
            </div>
          </div>
        </Col>

        {/* Image Section */}
        <Col xs={24} md={12} className="text-center">
          <img
            src="/images/image.png"
            alt="Office workspace"
            style={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default ClientReview;
