import React from "react";
import { Card, Typography, Avatar, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const ClientReview = () => {
  return (
    <Card id="review" style={cardStyle}>
      <Row gutter={[24, 24]} align="middle" justify="center">
        {/* Avatar & Text Section */}
        <Col xs={24} md={12} style={textContainerStyle}>
          <Text style={reviewTextStyle}>
            "I am very happy with the office space and the service we receive
            from the Workhub team. Any and all problems, which are few in
            number, are quickly and fully resolved in a friendly and efficient
            manner. We have no hesitation in recommending Workhub to our own
            clients."
          </Text>

          {/* User Info */}
          <div style={userInfoStyle}>
            <Avatar size={64} icon={<UserOutlined />} style={avatarStyle} />
            <div>
              <Title level={4} style={nameStyle}>Andrew Gorby</Title>
              <Text strong style={positionStyle}>Managing Director, IRIS Analytics</Text>
            </div>
          </div>
        </Col>

        {/* Image Section */}
        <Col xs={24} md={12} style={imageContainerStyle}>
          <img
            src="/images/image.png"
            alt="Office workspace"
            style={imageStyle}
          />
        </Col>
      </Row>
    </Card>
  );
};

/* Custom Styles */
const cardStyle = {
  width: "90%",
  maxWidth: "1000px",
  margin: "auto",
  borderRadius: "12px",
  padding: "30px",
  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
  border: "none",
  textAlign: "center",
};

/* Ensures better spacing & stacking on mobile */
const textContainerStyle = {
  textAlign: "center",
  padding: "0 10px",
};

const reviewTextStyle = {
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#444",
  fontWeight: "400",
  fontStyle: "italic",
  padding: "0 10px",
};

const userInfoStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 24,
};

const avatarStyle = {
  backgroundColor: "#F15A24",
  marginBottom: "10px",
  border: "3px solid #fff",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
};

const nameStyle = {
  margin: 0,
  fontWeight: "600",
  color: "#222",
  fontSize: "16px",
  textAlign: "center",
};

const positionStyle = {
  color: "#666",
  display: "block",
  marginTop: "5px",
  textAlign: "center",
  fontSize: "14px",
};

const imageContainerStyle = {
  display: "flex",
  justifyContent: "center",
};

const imageStyle = {
  width: "100%",
  maxWidth: "360px",
  height: "auto",
  borderRadius: "10px",
  objectFit: "cover",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
};

export default ClientReview;
