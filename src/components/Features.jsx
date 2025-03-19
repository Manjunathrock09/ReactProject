import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Button } from "antd";

const featuresData = [
  {
    id: 1,
    title: "Office Space",
    description:
      "Choose from a range of office sizes and styles across 5 locations in Dublin City and Sandyford Business District.",
    image: "/images/office-space.jpg",
    path: "/office-space",
  },
  {
    id: 2,
    title: "Meeting Rooms",
    description:
      "Book professional meeting rooms equipped with high-speed internet, whiteboards, and video conferencing facilities.",
    image: "/images/meeting-room.jpg",
    path: "/meeting-rooms",
  },
  {
    id: 3,
    title: "Co-working Spaces",
    description:
      "Flexible co-working spaces with high-speed internet, ergonomic furniture, and a collaborative environment.",
    image: "/images/coworking-space.jpg",
    path: "/coworking-spaces",
  },
  {
    id: 4,
    title: "Virtual Offices",
    description:
      "Get a prestigious business address, mail handling, and call forwarding services.",
    image: "/images/virtual-office.jpg",
    path: "/virtual-offices",
  },
  {
    id: 5,
    title: "Event Spaces",
    description:
      "Host workshops, conferences, and networking events in our well-equipped event spaces.",
    image: "/images/event-space.jpg",
    path: "/event-spaces",
  },
  {
    id: 6,
    title: "Dedicated Desks",
    description:
      "Secure a dedicated desk in a shared workspace with storage options and 24/7 access.",
    image: "/images/dedicated-desk.jpg",
    path: "/dedicated-desks",
  },
  {
    id: 7,
    title: "Call Service",
    description:
      "Professional call answering and forwarding services to ensure you never miss an important call.",
    image: "/images/call-service.jpg",
    path: "/call-service",
  },
  {
    id: 8,
    title: "Storage Solutions",
    description:
      "Secure, climate-controlled storage spaces for businesses and individuals to store important documents, equipment, or personal belongings.",
    image: "/images/storage-solutions.jpg",
    path: "/storage-solutions",
  },
];

const Features = () => {
  return (
    <section
      id="features" // ✅ Added id for navbar connection
      style={{
        backgroundColor: "#f5f5f5",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>
        Our Features
      </h2>

      <Row gutter={[24, 24]} justify="center">
        {featuresData.map((feature) => (
          <Col key={feature.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={
                <div
                  style={{
                    height: "200px",
                    overflow: "hidden",
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px",
                  }}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              }
              style={{
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease-in-out",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h3 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{feature.title}</h3>
              <p style={{ color: "#666", fontSize: "0.9rem", flexGrow: 1 }}>
                {feature.description}
              </p>
              <Link to={feature.path}>
                <Button type="primary" shape="round" block>
                  Learn More →
                </Button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Hover effect */}
      <style>
        {`
          .ant-card:hover {
            transform: translateY(-5px);
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
          }
        `}
      </style>
    </section>
  );
};

export default Features;
