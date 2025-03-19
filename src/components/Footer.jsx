import React from "react";
import { Layout, Row, Col, Typography, Divider, Space } from "antd";
import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  WhatsAppOutlined,
  HomeOutlined,
  AppstoreOutlined,
  FileTextOutlined,
  CoffeeOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  QuestionCircleOutlined,
  RocketOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;
const { Title, Text, Link } = Typography;

const footerLinks = [
  {
    title: "Office Space",
    icon: <AppstoreOutlined />,
    links: ["Serviced Offices", "Locations", "Meeting Rooms", "Custom Workspaces"],
  },
  {
    title: "Virtual Office",
    icon: <FileTextOutlined />,
    links: ["Essential Plan", "Plus Plan", "Business Plan", "Enterprise Plan"],
  },
  {
    title: "Co-Working",
    icon: <CoffeeOutlined />,
    links: ["Dedicated Desk", "Day Pass", "Private Booth", "Startup Hub"],
  },
  {
    title: "Support",
    icon: <MailOutlined />,
    links: ["Contact Us", "FAQs", "Help Center", "Community Support"],
  },
];

const socialLinks = [
  { icon: <FacebookFilled />, color: "#1877f2", url: "https://facebook.com" },
  { icon: <InstagramFilled />, color: "#E4405F", url: "https://instagram.com" },
  { icon: <LinkedinFilled />, color: "#0077b5", url: "https://linkedin.com" },
  { icon: <WhatsAppOutlined />, color: "#25D366", url: "https://wa.me/1234567890" },
];

const AppFooter = () => {
  return (
    <Footer style={{ backgroundColor: "#f8f9fa", padding: "40px 20px" }}>
      <Row gutter={[40, 30]} justify="center">
        {/* Company Info */}
        <Col xs={24} md={8}>
          <Title level={4} style={{ display: "flex", alignItems: "center", color: "#1677ff" }}>
            <HomeOutlined style={{ fontSize: 22, marginRight: 8 }} />
            Workhub
          </Title>
          <Text style={{ color: "#666" }}>
            Specializes in finding the right solution for you and your business.
          </Text>
          <Space size="middle" style={{ marginTop: 15 }}>
            {socialLinks.map(({ icon, color, url }, index) => (
              <a key={index} href={url} target="_blank" rel="noopener noreferrer">
                <span style={{ fontSize: 24, color }}>{icon}</span>
              </a>
            ))}
          </Space>
        </Col>

        {/* Footer Links */}
        {footerLinks.map((section, index) => (
          <Col xs={12} md={4} key={index}>
            <Title level={5} style={{ color: "#333" }}>
              {section.icon} {section.title}
            </Title>
            <Space direction="vertical">
              {section.links.map((link, idx) => (
                <Link key={idx} href="#" style={{ color: "#1677ff" }}>
                  {link}
                </Link>
              ))}
            </Space>
          </Col>
        ))}
      </Row>

      <Divider style={{ margin: "30px 0" }} />

      {/* Footer Bottom */}
      <Row justify="space-between" align="middle">
        <Col xs={24} md={12}>
          <Text style={{ color: "#666" }}>
            © {new Date().getFullYear()} Workhub. All Rights Reserved.
          </Text>
        </Col>
        <Col xs={24} md={12} style={{ textAlign: "right" }}>
          <Space size="large">
            {["Privacy Policy", "Terms & Conditions", "Sitemap", "Careers"].map((item, idx) => (
              <Link key={idx} href="#" style={{ color: "#444" }}>
                {item}
              </Link>
            ))}
          </Space>
        </Col>
      </Row>
    </Footer>
  );
};

export default AppFooter;
