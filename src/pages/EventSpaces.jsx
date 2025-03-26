import React, { useState } from "react";  
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import BookingForm from "./BookingForm";
import { useNavigate } from "react-router-dom";

const EventSpaces = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleBookNow = () => {
    setShowModal(true);
  };
  const Getintouch = () => {
    setShowModal(true);
  };
  const eventSpaces = [
    { id: 1, name: "Startup Incubation Hub", capacity: "20-50", price: "₹17,288/hr", img: "/images/Startup Hub.jpg" },
    { id: 2, name: "Innovation Zone", capacity: "30-70", price: "₹21,610/hr", img: "/images/Innovation Zone.avif" },
    { id: 3, name: "The Maharaja Conference Hall", capacity: "100-300", price: "₹25,932/hr", img: "/images/Maharaja Hall.jpg" },
    { id: 4, name: "Executive Boardroom", capacity: "20-40", price: "₹30,254/hr", img: "/images/Executive Boardroom.jpg" },
    { id: 5, name: "Sky Lounge", capacity: "50-150", price: "₹34,576/hr", img: "/images/Sky Lounge.avif" },
    { id: 6, name: "Urban Loft", capacity: "30-80", price: "₹43,220/hr", img: "/images/Urban Loft.jpg" },
  ];

  const moreEventSpaces = [
    { id: 7, name: "Glass Pavilion", capacity: "50-200", price: "₹51,864/hr", img: "/images/Glass Pavilion.jpg" },
    { id: 8, name: "Maharaja Lounge", capacity: "20-50", price: "₹38,898/hr", img: "/images/Maharaja Lounge.jpg" },
    { id: 9, name: "Royal Courtyard", capacity: "100-400", price: "₹60,508/hr", img: "/images/Royal Courtyard.jpg" },
  ];

  return (
    <div className="container mt-5">
      {/* Header Section with Gradient */}
      <div className="text-center text-white p-5 rounded shadow" style={{ background: "linear-gradient(to right, #ff7f50, #ff4500)" }}>
        <h1 className="fw-bold">Premium Event Spaces in India 🇮🇳</h1>
        <p className="lead">Perfect for corporate events, business summits, and startup networking</p>
      </div>

      <div className="row mt-5">
        {eventSpaces.map((space) => (
          <motion.div key={space.id} className="col-md-4 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card shadow-sm border-0" style={{ overflow: "hidden", borderRadius: "15px" }}>
              <img 
                src={space.img} 
                className="card-img-top" 
                alt={space.name} 
                style={{ transition: "transform 0.3s ease-in-out" }} 
                onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
              />
              <div className="card-body text-center">
                <h5 className="fw-bold">{space.name}</h5>
                <p className="text-secondary">
                  <strong>Capacity:</strong> {space.capacity}<br />
                  <strong>Price:</strong> {space.price}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* More Event Spaces Section */}
      <div className="mt-5">
        <h2 className="text-center fw-bold">More Stunning Event Spaces</h2>
        <p className="text-center text-secondary">Explore our luxurious Indian venues for your next business event</p>
        <div className="row">
          {moreEventSpaces.map((space) => (
            <motion.div key={space.id} className="col-md-4 mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="card border-0 shadow-lg text-white" style={{ borderRadius: "15px", position: "relative", overflow: "hidden" }}>
                <img src={space.img} className="card-img" alt={space.name} style={{ filter: "brightness(60%)", height: "300px", objectFit: "cover" }} />
                <div className="card-img-overlay d-flex flex-column justify-content-end text-center">
                  <h4 className="fw-bold">{space.name}</h4>
                  <p><strong>Capacity:</strong> {space.capacity} | <strong>Price:</strong> {space.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-5 text-center p-4 text-white rounded shadow" style={{ background: "linear-gradient(to right, #f12711, #f5af19)" }}>
        <h3 className="fw-bold">Ready to Host Your Next Event?</h3>
        <p className="lead">Book a premium venue today and make your corporate event memorable!</p>
        <button className="btn btn-danger mt-4 px-5 py-3 fw-bold rounded-pill shadow-sm" onClick={Getintouch}>
          Get In Touch
        </button>
      </div>

      {/* Booking Form Modal */}
      {showModal && (
        <div className="modal d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Book Your Event</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <BookingForm onClose={() => setShowModal(false)} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventSpaces;
