import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const featuresData = [
  { id: 1, title: "24/7 Customer Support", description: "Our team is available round the clock to assist businesses across India.", icon: "bi-headset" },
  { id: 2, title: "Flexible Workspaces", description: "Choose from virtual offices, coworking spaces, and private cabins.", icon: "bi-arrows-move" },
  { id: 3, title: "Affordable Pricing", description: "Premium business addresses and services at competitive Indian rates.", icon: "bi-cash" },
  { id: 4, title: "Instant Business Setup", description: "Get your workspace or virtual office activated within minutes.", icon: "bi-clock-history" },
  { id: 5, title: "Prime Indian Locations", description: "We offer addresses in Mumbai, Delhi, Bangalore, Chennai, and more.", icon: "bi-building" },
  { id: 6, title: "Professional Business Services", description: "From GST registration to mail handling, we cover it all.", icon: "bi-trophy" },
];

const WhyWorkhub = () => {
  return (
    <section id="whyWorkhub" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-md-4 text-center text-md-start">
            <h6 className="text-danger text-uppercase fw-bold">Why Workhub India</h6>
            <h2 className="fw-bold">Empowering Indian Businesses & Startups</h2>
            <p className="text-muted">
              We provide flexible office solutions tailored to India's dynamic business environment, enabling startups, freelancers, and enterprises to work efficiently.
            </p>
            <Link to="/our-company" className="fw-bold text-danger text-decoration-none">
              Learn More <span>&#8594;</span>
            </Link>
          </div>

          {/* Right Section - Features */}
          <div className="col-md-8">
            <div className="row g-4">
              {featuresData.map((feature) => (
                <div key={feature.id} className="col-12 col-sm-6 col-md-6 col-lg-4 d-flex justify-content-center">
                  <div className="card text-center shadow-sm p-4 border-0 feature-card">
                    <div className="icon-container bg-danger text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3">
                      <i className={`bi ${feature.icon} fs-3`}></i>
                    </div>
                    <h5 className="fw-semibold">{feature.title}</h5>
                    <p className="text-muted small">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        .icon-container {
          width: 55px;
          height: 55px;
          transition: background 0.3s ease-in-out;
        }
        .icon-container:hover {
          background-color: #A94442;
        }
        .feature-card {
          width: 100%;
          max-width: 340px; /* Adjusted max width for better layout */
          padding: 25px; /* Increased padding for better spacing */
          min-height: 250px; /* Ensures equal height */
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.15);
        }
      `}</style>
    </section>
  );
};

export default WhyWorkhub;
