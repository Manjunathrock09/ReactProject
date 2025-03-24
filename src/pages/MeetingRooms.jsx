import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BookingForm from "./BookingForm";
import { FaUsers, FaRulerCombined, FaBuilding, FaCalendarAlt, FaHandshake } from "react-icons/fa";

const meetingRooms = [
  {
    id: 1,
    location: "MUMBAI",
    address: "Bandra Kurla Complex, Mumbai",
    image: "images/mumbai.jpg",
    mapsLink: "https://www.google.com/maps?q=Bandra+Kurla+Complex,+Mumbai",
    capacity: "3-5",
    size: "260 sq ft",
    amenities:
      "Parking, Tea, Coffee, 60 inch TV, Video Conferencing, Bathrooms, Banqueting, Onsite Concierge, Canteen, Bike Parking, Showers, Air Filter.",
    price: "₹3,999.00",
  },
  {
    id: 2,
    location: "DELHI",
    address: "Connaught Place, New Delhi",
    image: "images/delhi.jpg",
    mapsLink: "https://www.google.com/maps?q=Connaught+Place,+New+Delhi",
    capacity: "2-6",
    size: "250 sq ft",
    amenities:
      "Parking, Tea, Coffee, 60 inch TV, Video Conferencing, Bathrooms, Banqueting, Onsite Concierge, Canteen, Bike Parking, Showers, Air Filter.",
    price: "₹4,499.00",
  },
  {
    id: 3,
    location: "BENGALURU",
    address: "MG Road, Bengaluru",
    image: "images/bengaluru.jpg",
    mapsLink: "https://www.google.com/maps?q=MG+Road,+Bengaluru",
    capacity: "5-8",
    size: "300 sq ft",
    amenities:
      "Parking, Tea, Coffee, 60 inch TV, Video Conferencing, Bathrooms, Banqueting, Onsite Concierge, Canteen, Bike Parking, Showers, Air Filter.",
    price: "₹5,299.00",
  },
];

const MeetingRooms = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleBookNow = (room) => {
    setSelectedRoom(room);
    setShowModal(true);
  };

  const handleStartNow = () => {
    setShowModal(true);
  };

  return (
    <div className="container mt-5 p-3 p-md-5 bg-light shadow rounded text-center">
      <h5 className="text-danger fw-bold">MEETING ROOMS</h5>
      <h1 className="fw-bold mb-3">Flexible & Convenient Meeting Rooms in India</h1>
      <p className="text-muted mb-5">
        Choose from a selection of prime locations with fully equipped boardrooms. Available for hourly, half-day, or full-day bookings.
      </p>

      <div className="row g-4">
        {meetingRooms.map((room) => (
          <div key={room.id} className="col-12 col-md-4">
            <div className="card shadow-lg border-0 rounded-4 h-100 overflow-hidden">
              <img src={room.image} className="card-img-top img-fluid rounded-top" alt={room.address} style={{ height: "200px", objectFit: "cover" }} />
              <div className="card-body">
                <h6 className="text-danger">{room.location}</h6>
                <h5 className="fw-bold">{room.address}</h5>
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-center text-muted my-2">
                  <FaUsers className="me-2 text-danger" /> {room.capacity}
                  <span className="mx-3 d-none d-md-inline">|</span>
                  <FaRulerCombined className="me-2 text-danger" /> {room.size}
                </div>
                <p className="mt-2 text-muted small">
                  <strong>Amenities:</strong> {room.amenities}
                </p>
                <p className="fw-bold fs-5 text-dark">
                  <span className="text-danger">{room.price}</span> / hour
                </p>
                <div className="d-flex flex-column flex-md-row justify-content-between">
                  <a href={room.mapsLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-danger w-100 mb-2 mb-md-0">
                    View in Maps ↗
                  </a>
                  <button className="btn btn-danger w-100" onClick={() => handleBookNow(room)}>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="container mt-5">
        <h6 className="text-danger fw-bold">STEP BY STEP</h6>
        <h2 className="fw-bold mb-4">How to Get Started</h2>
        <div className="row g-4 text-center">
          {[FaBuilding, FaCalendarAlt, FaHandshake].map((Icon, index) => (
            <div key={index} className="col-12 col-md-4">
              <div className="p-3 p-md-4 border rounded shadow-sm bg-white">
                <Icon size={40} className="text-danger mb-3" />
                <h5 className="fw-bold">{["Choose Your Location", "Pick Date & Time", "You're All Set!"][index]}</h5>
                <p className="text-muted small">
                  {["Select a meeting room in your preferred location.", "Choose the best time that suits your schedule.", "We'll handle the rest for a smooth experience."][index]}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className="btn btn-danger mt-4 px-5 py-3 shadow-lg rounded-pill text-white fw-bold" style={{ transition: "all 0.3s", background: "linear-gradient(135deg, #ff4e50, #fc913a)" }} onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")} onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} onClick={handleStartNow}>
          Start Now
        </button>
      </div>

      {showModal && <BookingForm room={selectedRoom} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default MeetingRooms;
