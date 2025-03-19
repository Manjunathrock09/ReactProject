import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Typography, Avatar } from "antd";
import {
  UserOutlined,
  BankOutlined,
  StarOutlined,
  SolutionOutlined,
  RocketOutlined,
  GlobalOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const OurCompany = () => {
  return (
    <Container fluid className="py-5" style={{ fontFamily: "'Poppins', sans-serif" }}>
      
      {/* Company Intro Section */}
      <Row className="align-items-center mb-5 g-4">
        <Col md={6} className="d-flex flex-column">
          <Title level={5} className="text-uppercase text-danger">Workhub</Title>
          <Title level={2} className="fw-bold">Our Company Intro</Title>
          <Paragraph className="text-muted fs-5">
            Workhub provides flexible serviced office space, meeting room rental, virtual office plans,
            and a range of other business services for individuals and SMEs within Ireland and abroad.
          </Paragraph>
        </Col>
        <Col md={6}>
          <img
            src="/images/ourcompany.jpg"
            alt="Workhub Team Meeting"
            className="img-fluid rounded shadow"
          />
        </Col>
      </Row>

      {/* Expert Business Advisors Section */}
      <Row className="align-items-center mb-5 g-4">
        <Col md={6}>
          <img
            src="/images/business-advisors.jpg"
            alt="Business Advisors"
            className="img-fluid rounded shadow"
          />
        </Col>
        <Col md={6} className="d-flex flex-column">
          <Title level={2} className="fw-bold">Expert Business Advisors</Title>
          <Paragraph className="fw-bold text-dark fs-5">
            We are a team of dedicated business advisors with a wealth of experience setting up and 
            operating businesses. We are always on hand to help, whilst staying behind the scenes, 
            allowing clients to dedicate their full attention to running a successful business.
          </Paragraph>
        </Col>
      </Row>

      {/* Testimonial Section */}
      <Row className="align-items-center bg-light p-5 rounded shadow mb-5 g-4">
        <Col md={6} className="d-flex flex-column">
          <Paragraph className="fst-italic text-dark fs-5">
            "I am very happy with the office space and the service we receive from the Workhub team. 
            Any and all problems, which are few in number, are quickly and fully resolved in a friendly 
            and efficient manner. We have no hesitation in recommending Workhub to our own clients."
          </Paragraph>
          <div className="d-flex align-items-center mt-3">
            <Avatar size={60} icon={<UserOutlined />} className="bg-danger me-3" />
            <div>
              <Title level={5} className="mb-0">Andrew Gorby, Managing Director</Title>
              <Paragraph className="fw-bold text-danger mb-0">IRIS Analytics</Paragraph>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <img
            src="/images/testimonial.jpg"
            alt="Office Space"
            className="img-fluid rounded shadow"
          />
        </Col>
      </Row>

    </Container>
  );
};

export default OurCompany;
