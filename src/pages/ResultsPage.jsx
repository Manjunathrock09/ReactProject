import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, Row, Col, Button, Typography } from "antd";

const { Title, Text } = Typography;

// Office descriptions based on searchQuery
const officeDescriptions = {
  "modern office": "A sleek, stylish workspace designed for productivity.",
  "corporate office": "A professional office with high-end amenities.",
  "coworking space": "A shared workspace for collaboration and networking.",
  "startup office": "An innovative office space perfect for growing businesses.",
  "open workspace": "A spacious, open-concept office for flexibility and teamwork.",
  "minimalist office": "A clean and simple workspace with modern aesthetics.",
  "tech office": "A high-tech office with cutting-edge infrastructure.",
  "luxury office": "An elegant workspace with premium furnishings.",
  "meeting room": "A professional meeting space with all necessary amenities.",
  "conference room": "A high-end conference room for business discussions.",
};

// Function to filter out images containing people
const filterOfficeImages = (office) => {
  const description = office.alt_description?.toLowerCase() || "";
  const title = office.description?.toLowerCase() || "";

  // Keywords to exclude (people-related)
  const excludeKeywords = ["person", "people", "man", "woman", "portrait", "face", "human", "team", "group"];

  return !excludeKeywords.some(keyword => description.includes(keyword) || title.includes(keyword));
};

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { offices, searchQuery } = location.state || { offices: [], searchQuery: "" };

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <Title level={3} className="text-dark">Search Results for "{searchQuery}"</Title>
        <Button type="primary" onClick={() => navigate("/")}>Back to Search</Button>
      </div>

      <Row gutter={[16, 16]} justify="center">
        {offices.length > 0 ? (
          offices
            .filter(filterOfficeImages) // Filter only relevant office images
            .map((office, index) => {
              // Get office title & description dynamically
              const officeName = office.alt_description || "Office Space";
              const officeDescription = officeDescriptions[searchQuery.toLowerCase()] || "A beautiful office space.";
              
              // Generate Google Maps link based on search query
              const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(searchQuery)}`;

              return (
                <Col key={office.id || index} xs={24} sm={12} md={8} lg={6}>
                  <Card
                    hoverable
                    cover={
                      <img 
                        src={office.urls.small} 
                        alt={officeName} 
                        className="office-img" 
                        style={{ height: "220px", objectFit: "cover", borderRadius: "5px" }} 
                      />
                    }
                    className="shadow-sm"
                  >
                    <Card.Meta 
                      title={officeName.charAt(0).toUpperCase() + officeName.slice(1)} 
                      description={<Text type="secondary">{officeDescription}</Text>} 
                    />
                    
                    {/* Buttons Section */}
                    <div className="d-flex justify-content-between mt-3">
                      <Button type="link" href={mapsUrl} target="_blank">
                        View in Maps
                      </Button>
                      <Button type="primary">
                        Buy Now
                      </Button>
                    </div>
                  </Card>
                </Col>
              );
            })
        ) : (
          <div className="text-center w-100">
            <p className="text-muted">No suitable office images found.</p>
          </div>
        )}
      </Row>
    </div>
  );
};

export default ResultsPage;
