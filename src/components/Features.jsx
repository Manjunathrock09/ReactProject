import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <section className="bg-light py-5" id="features">
      <div className="container">
        <h2 className="text-center text-dark mb-4 fw-bold">Our Features</h2>
        <div className="row g-4">
          {featuresData.map((feature) => (
            <div key={feature.id} className="col-md-6 col-lg-3">
              <div
                className="card shadow-lg border-0 rounded-4 overflow-hidden position-relative feature-card"
                style={{
                  transition: "transform 0.3s ease-in-out",
                  cursor: "pointer",
                }}
              >
                <div className="position-relative">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="card-img-top img-fluid"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  {/* Gradient Overlay */}
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      background: "rgba(0, 0, 0, 0.4)",
                      borderRadius: "8px",
                    }}
                  ></div>
                </div>
                <div className="card-body text-center d-flex flex-column">
                  <h3 className="card-title h5 text-dark fw-bold">
                    {feature.title}
                  </h3>
                  <p className="card-text text-muted flex-grow-1">
                    {feature.description}
                  </p>
                  <Link
                    to={feature.path}
                    className="btn btn-primary mt-auto rounded-pill px-4 fw-semibold"
                    style={{ transition: "background 0.3s ease-in-out" }}
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hover effect */}
      <style>
        {`
          .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
          }
        `}
      </style>
    </section>
  );
};

export default Features;
