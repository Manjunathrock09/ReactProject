import React from "react";
import { Row, Col, Typography, Space, Divider } from "antd";
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, WhatsAppOutlined, HomeFilled } from "@ant-design/icons";

const { Title, Text, Link } = Typography;

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f8f9fa", padding: "50px 0", fontFamily: "'Poppins', sans-serif" }} id="footer">
      <div className="container">
        <Row gutter={[32, 32]}>
          
          {/* Company Info */}
          <Col xs={24} md={8}>
            <Title level={4} style={{ display: "flex", alignItems: "center", fontWeight: "bold" }}>
              <HomeFilled style={{ color: "#1677ff", marginRight: 10 }} />
              Workhub
            </Title>
            <Text style={{ fontSize: "16px", color: "#444", lineHeight: "1.8" }}>
              Specialises in finding the right solution for you and your business.
            </Text>

            {/* Social Media Icons */}
            <div style={{ marginTop: 20 }}>
              <Space size="large">
                <Link href="https://facebook.com" target="_blank">
                  <FacebookOutlined style={iconStyle("#3b5998")} />
                </Link>
                <Link href="https://instagram.com" target="_blank">
                  <InstagramOutlined style={iconStyle("#E4405F")} />
                </Link>
                <Link href="https://linkedin.com" target="_blank">
                  <LinkedinOutlined style={iconStyle("#0077b5")} />
                </Link>
                <Link href="https://wa.me/+1234567890" target="_blank">
                  <WhatsAppOutlined style={iconStyle("#25D366")} />
                </Link>
              </Space>
            </div>
          </Col>

          {/* Footer Links Section */}
          <Col xs={24} md={16}>
            <Row gutter={[16, 16]}>
              {footerLinks.map((category, index) => (
                <Col xs={12} md={6} key={index}>
                  <Text style={{ fontSize: "16px", fontWeight: "bold", color: "#333" }}>{category.title}</Text>
                  <ul style={{ listStyle: "none", paddingLeft: 0, marginTop: 10 }}>
                    {category.links.map((link, idx) => (
                      <li key={idx} style={{ marginBottom: "6px" }}>
                        <Link href={link.href} style={{ fontSize: "15px", color: "#1677ff" }}>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Divider */}
        <Divider style={{ margin: "40px 0" }} />

        {/* Footer Bottom Section */}
        <div style={{ textAlign: "center" }}>
          <Text style={{ fontSize: "15px", color: "#666" }}>
            © {new Date().getFullYear()} - Workhub. All Rights Reserved  
            <Link href="/developer" style={{ color: "#ff4d4f", marginLeft: 5 }}> Web Development</Link>
          </Text>
          
          <div style={{ marginTop: 15 }}>
            <Space size="large">
              <Link href="/privacy" style={bottomLinkStyle}>Privacy Policy</Link>
              <Link href="/terms" style={bottomLinkStyle}>Terms & Conditions</Link>
              <Link href="/sitemap" style={bottomLinkStyle}>Sitemap</Link>
              <Link href="/careers" style={bottomLinkStyle}>Careers</Link>
            </Space>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* Custom Styles */
const iconStyle = (color) => ({
  fontSize: "28px",
  color,
  transition: "transform 0.3s ease-in-out",
  cursor: "pointer",
  marginRight: "10px"
});

const bottomLinkStyle = {
  fontSize: "15px",
  color: "#444",
  transition: "color 0.3s ease-in-out",
};

const footerLinks = [
  {
    title: "Office Space",
    links: [
      { label: "Serviced Offices", href: "/offices" },
      { label: "Locations", href: "/locations" },
      { label: "Meeting Rooms", href: "/meeting-rooms" },
      { label: "Custom Workspaces", href: "/custom-workspaces" },
    ],
  },
  {
    title: "Virtual Office",
    links: [
      { label: "Essential Plan", href: "/plans" },
      { label: "Plus Plan", href: "/plans" },
      { label: "Business Plan", href: "/plans" },
      { label: "Enterprise Plan", href: "/enterprise" },
    ],
  },
  {
    title: "Co-Working",
    links: [
      { label: "Dedicated Desk", href: "/coworking" },
      { label: "Day Pass", href: "/coworking" },
      { label: "Private Booth", href: "/private-booth" },
      { label: "Startup Hub", href: "/startup-hub" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "FAQs", href: "/faq" },
      { label: "Help Center", href: "/help" },
      { label: "Community Support", href: "/community" },
    ],
  },
];

export default Footer;
