import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const StorageSolutions = () => {
  return (
    <div style={{ backgroundColor: "#f8f9fa" }}>
      {/* First Section - Hero */}
      <div
        className="container py-5 rounded"
        style={{
          background: "linear-gradient(135deg, #ff6b6b, #f8f9fa)",
          color: "white",
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="row align-items-center">
          {/* Left Side - Text Content */}
          <div className="col-md-6">
            <h5 className="text-uppercase fw-bold text-warning">Storage Solutions</h5>
            <h1 className="fw-bold mt-2">
              India's Most Secure & Affordable Storage Solutions
            </h1>
            <p className="mt-3">
              Our state-of-the-art storage units come in various sizes, ensuring the perfect space for your needs. With 
              locations in <strong>Mumbai, Delhi, Bengaluru, and Chennai</strong>, secure access, and competitive pricing, 
              <strong> Storagehub India</strong> is your best choice.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="col-md-6 text-center">
            <img
              src="/images/storage-image.webp"
              alt="Storage Facility"
              className="img-fluid rounded shadow-lg"
              style={{
                borderRadius: "15px",
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="container py-5 bg-white rounded shadow-sm">
        <div className="row align-items-center">
          {/* Left Side - Image */}
          <div className="col-md-6 text-center">
            <img
              src="/images/students-storage.jpg"
              alt="Storage Lockers"
              className="img-fluid rounded shadow-lg"
              style={{
                borderRadius: "15px",
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="col-md-6">
            <h5 className="text-uppercase text-danger fw-bold">Storagehub India</h5>
            <h1 className="fw-bold mt-2">Welcome to India’s Best Self-Storage Company!</h1>
            <p className="text-secondary mt-3">
              We provide world-class storage solutions for homes, businesses, students, and travelers. 
              Our units come in various sizes, ensuring the perfect space for your needs.
            </p>

            {/* Storage Steps with Icons */}
            <div className="row mt-4">
              {[
                { icon: "📏", title: "Choose Your Unit", text: "Sizes from 50 to 500 sq.ft." },
                { icon: "📅", title: "Pick Move-In Date", text: "Flexible plans for all durations." },
                { icon: "💳", title: "Easy Online Payment", text: "Affordable plans from ₹2,000/month." },
                { icon: "🆔", title: "24/7 Secure Access", text: "CCTV, biometric entry, and guards." },
              ].map((step, index) => (
                <div key={index} className="col-md-6">
                  <p className="d-flex align-items-start">
                    <span
                      style={{
                        fontSize: "1.5rem",
                        marginRight: "10px",
                        background: "#ff6b6b",
                        color: "white",
                        padding: "10px",
                        borderRadius: "50%",
                        boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      {step.icon}
                    </span>
                    <span>
                      <b>{step.title}</b>
                      <br />
                      <small className="text-muted">{step.text}</small>
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Self Storage for Every Occasion Section */}
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-4 text-dark">Storage Solutions for Every Need</h2>
        <div className="row">
          {[
            { img: "moving-house-india.jpg", title: "Moving Home or Office", text: "Flexible plans, no hidden fees." },
            { img: "declutter-india.jpg", title: "Declutter Your Space", text: "Store furniture, electronics & more." },
            { img: "student-storage-india.jpg", title: "Student & Travel Storage", text: "Affordable storage for books & luggage." },
          ].map((card, index) => (
            <div key={index} className="col-md-4">
              <div
                className="card border-0 shadow-sm hover-shadow text-center"
                style={{ transition: "transform 0.3s ease-in-out" }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <img src={`/images/${card.img}`} className="card-img-top rounded" alt={card.title} />
                <div className="card-body">
                  <h5 className="fw-bold">{card.title}</h5>
                  <p className="text-secondary">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-4 text-dark">What Our Customers Say</h2>
        <div className="row">
          {[
            { name: "Rahul Sharma", text: "Great service! The Mumbai facility is very secure.", rating: "★★★★★" },
            { name: "Priya Menon", text: "Affordable storage in Bengaluru. Super convenient!", rating: "★★★★★" },
            { name: "Vikram Patel", text: "Storagehub made my house shifting stress-free.", rating: "★★★★★" },
          ].map((review, index) => (
            <div key={index} className="col-md-4">
              <div className="card border-0 shadow-sm p-3 bg-light">
                <div className="d-flex align-items-center mb-2 text-warning" style={{ fontSize: "1.2rem" }}>
                  {review.rating}
                </div>
                <p className="text-secondary">{review.text}</p>
                <h6 className="fw-bold">{review.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StorageSolutions;
