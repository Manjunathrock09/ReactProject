import React, { useState } from "react";
import { Input, Button, Modal, Card, Row, Col, Spin, message, AutoComplete } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const styles = {
  section: {
    backgroundColor: "#fff",
    minHeight: "60vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "40px 20px",
  },
  input: { borderRadius: "8px", padding: "12px", fontSize: "16px", flex: 1 },
  button: { marginLeft: "10px", borderRadius: "8px", padding: "12px 20px" },
  img: { height: "200px", objectFit: "cover", borderTopLeftRadius: "8px", borderTopRightRadius: "8px" },
  card: { borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" },
};

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [offices, setOffices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedOffice, setSelectedOffice] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [options, setOptions] = useState([]);

  const officeSuggestions = [
    "Modern Office",
    "Corporate Office",
    "Coworking Space",
    "Startup Office",
    "Open Workspace",
    "Minimalist Office",
    "Tech Office",
    "Luxury Office",
    "Meeting Room",
    "Conference Room",
  ];

  const fetchOffices = async () => {
    if (!searchQuery.trim()) return;

    // Ensure the search query is from the predefined suggestions
    if (!officeSuggestions.includes(searchQuery)) {
      message.error("Please select an office type from the suggestions!");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(searchQuery)}&client_id=${UNSPLASH_ACCESS_KEY}`
      );
      if (!response.ok) throw new Error("Failed to fetch data. Check your API key.");
      const data = await response.json();

      if (data.results.length === 0) {
        message.error("No offices found!");
      }

      setOffices(data.results || []);
      setShowModal(true);
      setSearchQuery("");
    } catch (err) {
      setError(err.message);
      setOffices([]);
      message.error("Error fetching offices!");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => e.key === "Enter" && fetchOffices();

  const handleOfficeClick = (office) => {
    setSelectedOffice(office);
    setShowDetailModal(true);
  };

  const handleSearchChange = (value) => {
    setSearchQuery(value);
    setOptions(
      officeSuggestions
        .filter((suggestion) => suggestion.toLowerCase().includes(value.toLowerCase()))
        .map((suggestion) => ({ value: suggestion }))
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section id="hero" style={styles.section}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#333" }}>
          Welcome to <span style={{ color: "#1890ff" }}>WorkHub</span>
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#666", marginBottom: "20px" }}>
          Your Best Workspace Solution.
        </p>
        <div style={{ width: "90%", maxWidth: "500px", display: "flex" }}>
          <AutoComplete
            options={options}
            style={{ flex: 1 }}
            onSearch={handleSearchChange}
            onSelect={(value) => setSearchQuery(value)}
            value={searchQuery}
          >
            <Input
              placeholder="Search office type..."
              size="large"
              onChange={(e) => setSearchQuery(e.target.value)}
              onPressEnter={handleKeyPress}
              style={styles.input}
            />
          </AutoComplete>
          <Button type="primary" icon={<SearchOutlined />} size="large" style={styles.button} onClick={fetchOffices}>
            Search
          </Button>
        </div>
        {loading && <Spin size="large" style={{ marginTop: "20px" }} />}
      </section>

      {/* Modal for Search Results */}
      <Modal
        title="Search Results"
        open={showModal}
        onCancel={() => setShowModal(false)}
        footer={[<Button key="close" type="primary" onClick={() => setShowModal(false)}>Close</Button>]}
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
                      style={styles.img}
                      onClick={() => handleOfficeClick(office)}
                    />
                  }
                  style={styles.card}
                >
                  <Card.Meta title={office.alt_description || "Office Space"} description="Modern workspace" />
                </Card>
              </Col>
            ))
          ) : (
            !loading && <p style={{ textAlign: "center" }}>No offices found.</p>
          )}
        </Row>
      </Modal>

      {/* Detail Modal for Selected Office */}
      <Modal
        title={selectedOffice ? selectedOffice.alt_description || "Office Space" : ""}
        open={showDetailModal}
        onCancel={() => setShowDetailModal(false)}
        footer={[<Button key="close" type="primary" onClick={() => setShowDetailModal(false)}>Close</Button>]}
      >
        {selectedOffice && (
          <div>
            <img
              src={selectedOffice.urls.regular}
              alt={selectedOffice.alt_description || "Office Space"}
              style={{ width: "100%", borderRadius: "8px", marginBottom: "20px" }}
            />
            <p style={{ fontSize: "16px", color: "#666" }}>
              {selectedOffice.description || "No additional description available."}
            </p>
          </div>
        )}
      </Modal>
    </>
  );
};

export default Hero;
