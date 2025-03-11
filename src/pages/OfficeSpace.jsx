import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const officesData = [
  {
    id: 3,
    location: "Baggot Street, D04 N528",
    image: "/images/baggot-street.jpg",
    description: "Cozy solo 70 sq ft office...",
    desks: 1,
    size: "70 sq ft",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Baggot+Street,+D04+N528",
  },
  {
    id: 214,
    location: "Bracken Road, D18 CV48",
    image: "/images/bracken-road.jpg",
    description: "Inviting office oasis...",
    desks: 8,
    size: "330 sq ft",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bracken+Road,+D18+CV48",
  },
  {
    id: 218,
    location: "Fern Road, Sandyford D18 FP98",
    image: "/images/fern-road-218.jpg",
    description:
      "Explore efficiency in this compact 80 sqft first-floor office with LED lighting, ideal for two. Privacy and security ensured with coded corridor access.",
    desks: 2,
    size: "80 sq ft",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Fern+Road,+Sandyford+D18+FP98",
  },
  {
    id: 6,
    location: "Camden Street, D02 XE80",
    image: "/images/camden-street.jpg",
    description:
      "Balancing functionality and comfort, promising growth and collaboration in Pleasant Street's vibrant ambiance. Workspace with 4 desks and a cozy couch.",
    desks: 4,
    size: "150 sq ft",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Camden+Street,+D02+XE80",
  },
];

const OfficeSpace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [offices, setOffices] = useState(officesData);
  const [loading, setLoading] = useState(false);

  const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  const fetchImages = async (query) => {
    if (!query) {
      setOffices(officesData);
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get("https://api.unsplash.com/search/photos", {
        params: { query, per_page: officesData.length },
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        },
      });

      const updatedOffices = officesData.map((office, index) => ({
        ...office,
        image: response.data.results[index]?.urls.regular || office.image,
      }));

      setOffices(updatedOffices);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
    setLoading(false);
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchTerm(query);
    fetchImages(query);
  };

  return (
    <div className="container-fluid py-5 bg-light">
      <div className="container text-center">
        <h5 className="text-danger fw-bold">OFFICE SPACE</h5>
        <h1 className="fw-bold display-4">Find Your Ideal Office</h1>
        <p className="text-muted lead">
          Lockable and move-in ready office spaces with access to shared conference rooms, common areas, and premium amenities.
        </p>
        <p className="text-muted">
          From cozy private offices to expansive suites, find a space that enhances productivity with high-speed internet, ergonomic workstations, and top-tier security.
        </p>

        {/* Search Bar */}
        <div className="d-flex justify-content-center my-4">
          <input
            type="text"
            className="form-control form-control-lg w-50 rounded-pill shadow-sm text-center border-0"
            placeholder="Search for office images 🔍"
            value={searchTerm}
            onChange={handleSearchChange}
            style={{ maxWidth: "500px" }}
          />
        </div>

        {/* Loading Indicator */}
        {loading && <p className="text-center text-primary">Loading images...</p>}

        {/* Office Cards Grid */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-4">
          {offices.map((office) => (
            <div key={office.id} className="col">
              <div className="card shadow-lg border-0 h-100 rounded-4">
                <div className="rounded-top overflow-hidden">
                  <img
                    src={office.image}
                    alt={office.location}
                    className="card-img-top"
                    style={{ objectFit: "cover", height: "230px" }}
                    onError={(e) => (e.target.src = "/images/placeholder.jpg")}
                  />
                </div>
                <div className="card-body">
                  <h6 className="text-danger fw-bold">OFFICE {office.id}</h6>
                  <h4 className="fw-bold">{office.location}</h4>
                  <p className="text-muted">
                    <a href={office.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                      View in Maps 📍
                    </a>
                  </p>
                  <p className="text-muted">{office.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold text-primary">👥 {office.desks} Desks</span>
                    <span className="fw-bold text-secondary">📏 {office.size}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfficeSpace;
