import React from "react";
import { Row, Col, Typography, Space, Divider } from "antd";
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, WhatsAppOutlined, HomeFilled } from "@ant-design/icons";

const { Title, Text, Link } = Typography;

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f8f9fa", padding: "40px 0" }} id="footer">
      <div className="container">
        <Row gutter={[32, 32]}>
          {/* Company Info */}
          <Col xs={24} md={8}>
            <Title level={4}>
              <HomeFilled style={{ color: "#1677ff", marginRight: 8 }} />
              Workhub
            </Title>
            <Text type="secondary">
              Specialises in finding the right solution for you and your business.
            </Text>
            <div style={{ marginTop: 15 }}>
              <Space size="large">
                <Link href="https://facebook.com" target="_blank">
                  <FacebookOutlined style={{ fontSize: 24, color: "#3b5998" }} />
                </Link>
                <Link href="https://instagram.com" target="_blank">
                  <InstagramOutlined style={{ fontSize: 24, color: "#E4405F" }} />
                </Link>
                <Link href="https://linkedin.com" target="_blank">
                  <LinkedinOutlined style={{ fontSize: 24, color: "#0077b5" }} />
                </Link>
                <Link href="https://wa.me/+1234567890" target="_blank">
                  <WhatsAppOutlined style={{ fontSize: 24, color: "#25D366" }} />
                </Link>
              </Space>
            </div>
          </Col>

          {/* Footer Links */}
          <Col xs={24} md={16}>
            <Row gutter={[16, 16]}>
              <Col xs={12} md={6}>
                <Text type="secondary">Office Space</Text>
                <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                  <li><Link href="/offices">Serviced Offices</Link></li>
                  <li><Link href="/locations">Locations</Link></li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <Text type="secondary">Virtual Office</Text>
                <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                  <li><Link href="/plans">Essential Plan</Link></li>
                  <li><Link href="/plans">Plus Plan</Link></li>
                  <li><Link href="/plans">Business Plan</Link></li>
                  <li><Link href="/plans">Scale Plan</Link></li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <Text type="secondary">Co-Working</Text>
                <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                  <li><Link href="/coworking">Dedicated Desk</Link></li>
                  <li><Link href="/coworking">Day Pass</Link></li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <Text type="secondary">Contact & Support</Text>
                <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                  <li><Link href="/contact">Contact Us</Link></li>
                  <li><Link href="/faq">FAQ’s</Link></li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>

        <Divider style={{ margin: "30px 0" }} />

        {/* Copyright Section */}
        <div style={{ textAlign: "center" }}>
          <Text type="secondary">
            © {new Date().getFullYear()} - Workhub. All Rights Reserved 
            <Link href="/developer" style={{ color: "#ff4d4f", marginLeft: 5 }}> Web Development</Link>
          </Text>
          <div style={{ marginTop: 10 }}>
            <Space size="large">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </Space>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
