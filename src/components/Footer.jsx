import React from "react";
import { Row, Col, Typography, Space, Divider } from "antd";
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, WhatsAppOutlined, HomeFilled } from "@ant-design/icons";

const { Title, Text } = Typography;

const Footer = () => {
  return (
    <footer style={footerStyle} id="footer">
      <div className="container" style={containerStyle}>
        <Row gutter={[32, 32]} align="middle" justify="space-between">
          
          {/* Company Info */}
          <Col xs={24} md={8} style={{ textAlign: "left" }}>
            <Title level={3} style={titleStyle}>
              <HomeFilled style={{ color: "#1677ff", marginRight: 10 }} />
              Workhub
            </Title>
            <Text style={textStyle}>
              Specializes in finding the right solution for you and your business.
            </Text>
          </Col>

          {/* Social Media Icons */}
          <Col xs={24} md={8} style={{ textAlign: "center" }}>
            <Space size="large">
              <a href="#" style={iconHoverEffect}>
                <FacebookOutlined style={iconStyle("#1877f2")} />
              </a>
              <a href="#" style={iconHoverEffect}>
                <InstagramOutlined style={iconStyle("#E4405F")} />
              </a>
              <a href="#" style={iconHoverEffect}>
                <LinkedinOutlined style={iconStyle("#0077b5")} />
              </a>
              <a href="#" style={iconHoverEffect}>
                <WhatsAppOutlined style={iconStyle("#25D366")} />
              </a>
            </Space>
          </Col>
        </Row>

        {/* Divider */}
        <Divider style={{ borderColor: "#ddd", margin: "40px 0" }} />

        {/* Footer Bottom Section */}
        <div style={{ textAlign: "center" }}>
          <Text style={footerTextStyle}>
            © {new Date().getFullYear()} - Workhub. All Rights Reserved  
            <span style={{ color: "#ff4d4f", marginLeft: 5 }}> Web Development</span>
          </Text>
          
          <div style={{ marginTop: 15 }}>
            <Space size="large">
              <a href="#" style={bottomLinkStyle}>Privacy Policy</a>
              <a href="#" style={bottomLinkStyle}>Terms & Conditions</a>
              <a href="#" style={bottomLinkStyle}>Sitemap</a>
              <a href="#" style={bottomLinkStyle}>Careers</a>
            </Space>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* Custom Styles */
const footerStyle = {
  background: "#fff", 
  padding: "40px 0",
  fontFamily: "'Poppins', sans-serif",
  color: "#333",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
};

const containerStyle = {
  maxWidth: "1200px",
  margin: "auto",
  padding: "0 20px",
};

const titleStyle = {
  display: "flex",
  alignItems: "center",
  fontWeight: "bold",
  color: "#333",
};

const textStyle = {
  fontSize: "16px",
  color: "#666",
  lineHeight: "1.8",
};

const iconStyle = (color) => ({
  fontSize: "28px",
  color,
  transition: "transform 0.3s ease-in-out, color 0.3s",
  cursor: "pointer",
});

const iconHoverEffect = {
  display: "inline-block",
  transition: "transform 0.3s ease-in-out",
};

const footerTextStyle = {
  fontSize: "15px",
  color: "#666",
};

const bottomLinkStyle = {
  fontSize: "15px",
  color: "#1677ff",
  textDecoration: "none",
  transition: "color 0.3s ease-in-out",
};

export default Footer;
