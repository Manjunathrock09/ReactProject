import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const officesData = [
  { 
    id: 1, 
    name: "Hinjewadi, Pune", 
    description: "A modern 100 sq ft private office in Pune’s top IT hub. Ideal for startups and professionals.", 
    image: "/images/office1.jpg"
  },
  { 
    id: 2, 
    name: "MG Road, Bengaluru", 
    description: "Located in the heart of Bangalore, this 200 sq ft workspace is perfect for tech entrepreneurs.", 
    image: "/images/office2.jpg"
  },
  { 
    id: 3, 
    name: "Bandra Kurla Complex, Mumbai", 
    description: "A premium 500 sq ft office in Mumbai’s prime business district. Ideal for corporate setups.", 
    image: "/images/office3.jpg"
  },
  { 
    id: 4, 
    name: "Connaught Place, Delhi", 
    description: "A 300 sq ft modern office in Delhi’s iconic commercial center, perfect for high-end businesses.", 
    image: "/images/office4.jpg"
  },
  { 
    id: 5, 
    name: "Salt Lake, Kolkata", 
    description: "This 150 sq ft smart workspace is located in Kolkata’s IT hub. Best for tech startups and freelancers.", 
    image: "/images/office5.jpg"
  },
  { 
    id: 6, 
    name: "Gachibowli, Hyderabad", 
    description: "A spacious 400 sq ft office in Hyderabad’s corporate district. Close to top MNCs and IT parks.", 
    image: "/images/office6.jpg"
  },
];

const OfficeSpace = () => {
  // Function to open Google Maps with a search for the office name
  const handleViewMap = (officeName) => {
    const googleMapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(officeName)}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <div className="container py-5">
      {/* Title & Description */}
      <h1 className="text-center mb-4 fw-bold text-dark">🏢 Find Your Ideal Office</h1>
      <p className="text-center text-muted mb-5 px-3">
        Explore premium office spaces in major Indian cities.
      </p>

      {/* Office Cards */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {officesData.map((office) => (
          <div key={office.id} className="col">
            <div 
              className="card shadow-sm border-0 h-100"
              style={{ 
                transition: "transform 0.3s ease-in-out", 
                cursor: "pointer", 
                borderRadius: "12px",
                overflow: "hidden"
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.03)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              <img 
                src={office.image} 
                alt={office.name} 
                className="card-img-top" 
                style={{ 
                  width: "100%", 
                  height: "250px", 
                  objectFit: "cover", 
                  borderRadius: "12px 12px 0 0" 
                }} 
              />
              <div className="card-body text-center">
                <h5 className="fw-bold text-dark">{office.name}</h5>
                <p className="text-muted">{office.description}</p>
                <button 
                  className="btn btn-primary px-4"
                  style={{ borderRadius: "20px" }}
                  onClick={() => handleViewMap(office.name)}
                >
                  📍 View on Google Maps
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfficeSpace;
