import React, { useState } from "react";
import { Input, Button, AutoComplete, message, Spin, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const { Title, Text } = Typography;
const officeSuggestions = [
  "Modern Office", "Corporate Office", "Coworking Space", "Startup Office",
  "Open Workspace", "Minimalist Office", "Tech Office", "Luxury Office",
  "Meeting Room", "Conference Room"
];

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();
  const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  const fetchOffices = async () => {
    if (!searchQuery.trim() || !officeSuggestions.includes(searchQuery)) {
      message.error("Please select a valid office type!");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${UNSPLASH_ACCESS_KEY}`
      );
      const data = await res.json();
      if (!data.results.length) message.error("No offices found!");
      else navigate("/results", { state: { offices: data.results, searchQuery } });
    } catch {
      message.error("Error fetching offices!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="hero" className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-white">
      <div className="card p-4 text-center shadow-sm rounded" style={{ maxWidth: "450px", width: "100%" }}>
        <Title level={3} className="text-dark mb-2">
          Find Your <span className="text-warning">Perfect Workspace</span>
        </Title>
        <Text type="secondary" className="text-muted">Discover the best office spaces.</Text>

        {/* Search Box */}
        <div className="d-flex mt-3">
          <AutoComplete
            options={officeSuggestions.map(s => ({ value: s }))}
            onSearch={val => setOptions(
              officeSuggestions.filter(s => s.toLowerCase().includes(val.toLowerCase()))
                .map(s => ({ value: s }))
            )}
            onSelect={setSearchQuery}
            value={searchQuery}
            className="w-100"
          >
            <Input
              placeholder="Search office type..."
              size="large"
              onChange={e => setSearchQuery(e.target.value)}
              onPressEnter={fetchOffices}
            />
          </AutoComplete>
          <Button type="primary" icon={<SearchOutlined />} size="large" onClick={fetchOffices} className="ms-2">
            Search
          </Button>
        </div>

        {loading && <Spin size="large" className="mt-3" />}
      </div>
    </div>
  );
};

export default Hero;
