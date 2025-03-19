import React, { useState } from "react";
import { Input, Button, Modal, Card, Row, Col, Spin, message } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [offices, setOffices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchOffices = async () => {
    if (!searchQuery.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(searchQuery)}&client_id=${UNSPLASH_ACCESS_KEY}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data. Check your API key.");
      }

      const data = await response.json();
      setOffices(data.results || []);
      setShowModal(true);
      setSearchQuery(""); // Clear search input after search
    } catch (error) {
      setError(error.message);
      setOffices([]);
      message.error("Error fetching offices!"); // Ant Design message feedback
    } finally {
      setLoading(false);
    }
  };

  // Handle keypress (Enter key to trigger search)
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchOffices();
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section
        id="hero" // ✅ Added id for navbar connection
        style={{
          backgroundColor: "#fff",
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#333" }}>
          Welcome to <span style={{ color: "#1890ff" }}>WorkHub</span>
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#666", marginBottom: "20px" }}>
          Your Best Workspace Solution.
        </p>

        {/* Responsive Search Bar */}
        <div style={{ width: "90%", maxWidth: "500px", display: "flex" }}>
          <Input
            placeholder="Enter city name..."
            size="large"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onPressEnter={handleKeyPress}
            style={{
              borderRadius: "8px",
              padding: "12px",
              fontSize: "16px",
              flex: 1,
            }}
          />
          <Button
            type="primary"
            icon={<SearchOutlined />}
            size="large"
            style={{
              marginLeft: "10px",
              borderRadius: "8px",
              padding: "12px 20px",
            }}
            onClick={fetchOffices}
          >
            Search
          </Button>
        </div>

        {/* Loading Indicator */}
        {loading && <Spin size="large" style={{ marginTop: "20px" }} />}
      </section>

      {/* Modal for Search Results */}
      <Modal
        title="Search Results"
        open={showModal}
        onCancel={() => setShowModal(false)}
        footer={[
          <Button key="close" type="primary" onClick={() => setShowModal(false)}>
            Close
          </Button>,
        ]}
      >
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

        <Row gutter={[16, 16]}>
          {offices.length > 0 ? (
            offices.map((office) => (
              <Col key={office.id} xs={24} sm={12} md={8}>
                <Card
                  hoverable
                  cover={
                    <img
                      src={office.urls.small}
                      alt={office.alt_description || "Office space"}
                      style={{
                        height: "200px",
                        objectFit: "cover",
                        borderTopLeftRadius: "8px",
                        borderTopRightRadius: "8px",
                      }}
                    />
                  }
                  style={{
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Card.Meta
                    title={office.alt_description || "Office Space"}
                    description="Modern workspace"
                  />
                </Card>
              </Col>
            ))
          ) : (
            !loading && <p style={{ textAlign: "center" }}>No offices found.</p>
          )}
        </Row>
      </Modal>
    </>
  );
};

export default Hero;
