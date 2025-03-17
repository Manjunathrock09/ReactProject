import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const StorageSolutions = () => {
  const [showSection, setShowSection] = useState(false);

  return (
    <div style={{ backgroundColor: "#f8f9fa" }}>
      {/* First Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left Side - Text Content */}
          <div className="col-md-6">
            <h5 className="text-uppercase text-warning fw-bold">Storage Solutions</h5>
            <h1 className="fw-bold mt-2 text-dark">
              Providing top-of-the-line storage solutions for both personal and business use.
            </h1>
            <p className="text-secondary mt-3">
              Our state-of-the-art storage units come in a variety of sizes, ensuring that we have
              the perfect unit to meet your needs. With easy access from the M50, secure entry, and
              competitive prices, you won't find a better storage option than <strong>Storagehub</strong>.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="col-md-6 text-center">
            <img
              src="/images/storage-image.webp"
              alt="Storage Facility"
              className="img-fluid rounded shadow-lg"
              style={{ borderRadius: "15px" }}
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
              src="/images/Frame-974.svg"
              alt="Storage Lockers"
              className="img-fluid rounded shadow-lg"
              style={{ borderRadius: "15px" }}
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="col-md-6">
            <h5 className="text-uppercase text-danger fw-bold">Storagehub</h5>
            <h1 className="fw-bold mt-2 text-dark">
              Welcome to Storagehub, the premier self-storage company in Dublin!
            </h1>
            <p className="text-secondary mt-3">
              We pride ourselves on providing top-of-the-line storage solutions for both personal
              and business use. Our storage units come in various sizes, ensuring we have the perfect unit for your needs.
            </p>

            {/* Storage Steps */}
            <div className="row mt-4">
              {[
                { icon: "📏", title: "Choose your storage unit size", text: "Change size anytime (if available)" },
                { icon: "📅", title: "Decide your move-in date", text: "Pick a date that suits you" },
                { icon: "💳", title: "Set up payment to confirm", text: "Cancel for free 24hrs before move-in" },
                { icon: "🆔", title: "Confirm your identity", text: "Have a passport or driver’s license ready" },
              ].map((step, index) => (
                <div key={index} className="col-md-6">
                  <p className="d-flex align-items-start">
                    <span style={{ fontSize: "1.5rem", marginRight: "10px" }}>{step.icon}</span>
                    <span>
                      <b>{step.title}</b>
                      <br />
                      <small className="text-muted">{step.text}</small>
                    </span>
                  </p>
                </div>
              ))}
            </div>

            {/* Call-to-Action Buttons */}
            <button
              className="btn btn-danger rounded-pill px-4 py-2"
              onClick={() => setShowSection(true)}
            >
              Visit Storagehub →
            </button>
          </div>

          {showSection && (
            <div className="mt-5 p-4 border rounded shadow-sm bg-light">
              <div className="row align-items-center">
                {/* Left Side - Text Content */}
                <div className="col-md-6">
                  <h1 className="fw-bold">Dublin’s Best Self Storage Facility</h1>
                  <p className="text-secondary">
                    Moving house or need extra space? Running out of room for everything in your office?
                    Looking for somewhere to store your books and dorm contents over the summer? Whether for home,
                    student, or business needs, self-storage is the perfect solution.
                  </p>
                  <button className="btn btn-warning fw-bold px-4 py-2">
                    Get a Quote
                  </button>
                </div>

                {/* Right Side - Video */}
                <div className="col-md-6">
                  <iframe
                    className="w-100 rounded shadow"
                    height="300"
                    src="https://www.youtube.com/embed/PSpSaiMCttE?si=U7ADMNtu6N9fMoZy"
                    title="Storagehub Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Self Storage for Every Occasion Section */}
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-4 text-dark">Self Storage for Every Occasion</h2>
        <div className="row">
          {[
            { img: "Moving house or business.jpg", title: "Moving house or business", text: "No stress, no contracts, no cancellation fees." },
            { img: "create-space.jpg", title: "Create space in your life", text: "Perfect for decluttering your home or office." },
            { img: "students-storage.jpg", title: "Students or going abroad", text: "Affordable units for dorm contents, luggage & boxes." },
          ].map((card, index) => (
            <div key={index} className="col-md-4">
              <div className="card border-0 shadow-sm hover-shadow">
                <img src={`/images/${card.img}`} className="card-img-top rounded" alt={card.title} />
                <div className="card-body text-center">
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
        <h2 className="text-center fw-bold mb-4 text-dark">What Our Customers Are Saying</h2>
        <div className="row">
          {[
            { name: "Jack Hogan", text: "Ideal location, 24/7 access via app. Brilliant service!", rating: "★★★★★" },
            { name: "Niall O'Kelly", text: "Great facilities & competitive pricing. Highly recommended!", rating: "★★★★★" },
            { name: "Maja Ignaczewska", text: "Best storage ever! Martina was fantastic. Highly recommended!", rating: "★★★★★" },
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
        <div className="d-flex justify-content-center mt-4">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Storagehub,Dublin"
            className="btn btn-outline-danger fw-bold px-4 py-2 shadow-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More Reviews →
          </a>
        </div>
      </div>
    </div>
  );
};

export default StorageSolutions;
