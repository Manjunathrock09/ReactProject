import React from "react";
import { Link } from "react-router-dom";

const featuresData = [
  {
    id: 1,
    title: "Office Space",
    description:
      "Choose from a range of office sizes and styles across prime locations in Mumbai, Bangalore, and Delhi.",
    image: "/images/office-space.jpg",
    path: "/office-space",
  },
  {
    id: 2,
    title: "Meeting Rooms",
    description:
      "Book professional meeting rooms in Hyderabad, Pune, and Chennai, equipped with high-speed internet, whiteboards, and video conferencing facilities.",
    image: "/images/meeting-room.jpg",
    path: "/meeting-rooms",
  },
  {
    id: 3,
    title: "Co-working Spaces",
    description:
      "Flexible co-working spaces in Bangalore and Gurgaon with high-speed internet, ergonomic furniture, and a collaborative environment.",
    image: "/images/coworking-space.jpg",
    path: "/coworking-spaces",
  },
  {
    id: 4,
    title: "Virtual Offices",
    description:
      "Get a prestigious business address in major Indian cities like Delhi, Mumbai, and Kolkata, along with mail handling and call forwarding services.",
    image: "/images/virtual-office.jpg",
    path: "/virtual-offices",
  },
  {
    id: 5,
    title: "Event Spaces",
    description:
      "Host workshops, conferences, and networking events in top event spaces in cities like Chennai, Bangalore, and Pune.",
    image: "/images/event-space.jpg",
    path: "/event-spaces",
  },
  {
    id: 6,
    title: "Dedicated Desks",
    description:
      "Secure a dedicated desk in a shared workspace in major business hubs like Mumbai, Noida, and Hyderabad, with storage options and 24/7 access.",
    image: "/images/dedicated-desk.jpg",
    path: "/dedicated-desks",
  },
  {
    id: 7,
    title: "Call Service",
    description:
      "Professional call answering and forwarding services available in cities like Bangalore, Pune, and Delhi to ensure you never miss an important call.",
    image: "/images/call-service.jpg",
    path: "/call-service",
  },
  {
    id: 8,
    title: "Storage Solutions",
    description:
      "Secure, climate-controlled storage spaces in metros like Mumbai, Chennai, and Hyderabad for businesses and individuals to store important documents, equipment, or personal belongings.",
    image: "/images/storage-solutions.jpg",
    path: "/storage-solutions",
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-light py-5 text-center">
      <div className="container">
        <h2 className="mb-5 text-primary fw-bold">Our Features</h2>
        <div className="row g-4">
          {featuresData.map((feature) => (
            <div key={feature.id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
              <Link to={feature.path} className="text-decoration-none w-100">
                <div className="card shadow-lg border-0 h-100 rounded-4 overflow-hidden">
                  <img
                    src={feature.image}
                    className="card-img-top"
                    alt={feature.title}
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      borderTopLeftRadius: "12px",
                      borderTopRightRadius: "12px",
                    }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-dark fw-bold text-center">{feature.title}</h5>
                    <p className="card-text text-muted flex-grow-1 text-center">{feature.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for Hover Effect */}
      <style>
        {`
          .card {
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          }
          .card:hover {
            transform: translateY(-10px);
            box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
          }
        `}
      </style>
    </section>
  );
};

export default Features;
