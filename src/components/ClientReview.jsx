import React from "react";
import { Card, Typography, Avatar, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const ClientReview = () => {
  return (
    <Card id = "review" style={cardStyle}>
      <Row gutter={[32, 32]} align="middle" justify="center">
        {/* Avatar & Text Section */}
        <Col xs={24} md={12} style={{ textAlign: "center" }}>
          <Text style={reviewTextStyle}>
            "I am very happy with the office space and the service we receive
            from the Workhub team. Any and all problems, which are few in
            number, are quickly and fully resolved in a friendly and efficient
            manner. We have no hesitation in recommending Workhub to our own
            clients."
          </Text>

          {/* User Info */}
          <div style={userInfoStyle}>
            <Avatar size={72} icon={<UserOutlined />} style={avatarStyle} />
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
  width: "95%",
  maxWidth: "1200px",
  margin: "auto",
  borderRadius: "12px",
  padding: "40px",
  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
  border: "none",
  textAlign: "center",
};

const reviewTextStyle = {
  fontSize: "18px",
  lineHeight: "1.8",
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
  marginTop: 32,
};

const avatarStyle = {
  backgroundColor: "#F15A24",
  marginBottom: "10px",
  border: "4px solid #fff",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
};

const nameStyle = {
  margin: 0,
  fontWeight: "600",
  color: "#222",
  textAlign: "center",
};

const positionStyle = {
  color: "#666",
  display: "block",
  marginTop: "5px",
  textAlign: "center",
};

const imageContainerStyle = {
  display: "flex",
  justifyContent: "center",
};

const imageStyle = {
  width: "100%",
  maxWidth: "420px",
  height: "auto",
  borderRadius: "10px",
  objectFit: "cover",
  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
};

export default ClientReview;
