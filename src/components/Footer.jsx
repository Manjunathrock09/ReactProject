import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { 
  FacebookOutlined, InstagramOutlined, LinkedinOutlined, WhatsAppOutlined, 
  HomeFilled, AppstoreOutlined, MailOutlined, PhoneOutlined, CoffeeOutlined, 
  FileTextOutlined, EnvironmentOutlined 
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="bg-light py-5" id="contact"> 
      <Container>
        <Row className="gy-4"> 
          
          {/* Company Info */}
          <Col xs={12} md={4}>
            <h5 className="d-flex align-items-center">
              <HomeFilled className="text-primary me-2" />
              Workhub
            </h5>
            <p className="text-muted">
              Specializes in finding the right solution for you and your business.
            </p>

            {/* Social Media Icons */}
            <div className="mt-3">
              <a href="#" className="text-decoration-none me-3 text-primary"><FacebookOutlined className="fs-3" /></a>
              <a href="#" className="text-decoration-none me-3 text-danger"><InstagramOutlined className="fs-3" /></a>
              <a href="#" className="text-decoration-none me-3 text-info"><LinkedinOutlined className="fs-3" /></a>
              <a href="#" className="text-decoration-none text-success"><WhatsAppOutlined className="fs-3" /></a>
            </div>
          </Col>

          {/* Footer Links */}
          {footerLinks.map((category, index) => (
            <Col xs={6} md={2} key={index}>
              <h6 className="fw-bold">
                {category.icon} {category.title}
              </h6>
              <ul className="list-unstyled">
                {category.links.map((link, idx) => (
                  <li key={idx} className="text-primary">
                    {link.icon} {link.label}
                  </li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>

        {/* Divider */}
        <hr className="my-4" />

        {/* Footer Bottom */}
        <div className="text-center">
          <p className="text-muted mb-0">
            © {new Date().getFullYear()} - Workhub. All Rights Reserved  
            <span className="text-danger ms-2">Web Development</span>
          </p>
          <div className="mt-3">
            <a href="#" className="text-dark text-decoration-none me-3">Privacy Policy</a>
            <a href="#" className="text-dark text-decoration-none me-3">Terms & Conditions</a>
            <a href="#" className="text-dark text-decoration-none me-3">Sitemap</a>
            <a href="#" className="text-dark text-decoration-none">Careers</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

const footerLinks = [
  {
    title: "Office Space",
    icon: <AppstoreOutlined className="text-primary" />,
    links: [
      { label: "Serviced Offices", icon: <EnvironmentOutlined className="text-primary" /> },
      { label: "Locations", icon: <EnvironmentOutlined className="text-primary" /> },
      { label: "Meeting Rooms", icon: <CoffeeOutlined className="text-primary" /> },
      { label: "Custom Workspaces", icon: <AppstoreOutlined className="text-primary" /> },
    ],
  },
  {
    title: "Virtual Office",
    icon: <FileTextOutlined className="text-primary" />,
    links: [
      { label: "Essential Plan", icon: <FileTextOutlined className="text-primary" /> },
      { label: "Plus Plan", icon: <FileTextOutlined className="text-primary" /> },
      { label: "Business Plan", icon: <FileTextOutlined className="text-primary" /> },
      { label: "Enterprise Plan", icon: <FileTextOutlined className="text-primary" /> },
    ],
  },
  {
    title: "Co-Working",
    icon: <CoffeeOutlined className="text-primary" />,
    links: [
      { label: "Dedicated Desk", icon: <CoffeeOutlined className="text-primary" /> },
      { label: "Day Pass", icon: <CoffeeOutlined className="text-primary" /> },
      { label: "Private Booth", icon: <CoffeeOutlined className="text-primary" /> },
      { label: "Startup Hub", icon: <CoffeeOutlined className="text-primary" /> },
    ],
  },
  {
    title: "Support",
    icon: <MailOutlined className="text-primary" />,
    links: [
      { label: "Contact Us", icon: <MailOutlined className="text-primary" /> },
      { label: "FAQs", icon: <FileTextOutlined className="text-primary" /> },
      { label: "Help Center", icon: <PhoneOutlined className="text-primary" /> },
      { label: "Community Support", icon: <AppstoreOutlined className="text-primary" /> },
    ],
  },
];

export default Footer;
