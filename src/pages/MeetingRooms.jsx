import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BookingForm from "./BookingForm";
import { FaUsers, FaRulerCombined, FaBuilding, FaCalendarAlt, FaHandshake } from "react-icons/fa"; 
const meetingRooms = [
  {
    id: 1,
    location: "VADUZ",
    address: "6 Fern Road, Sandyford",
    image: "images/vaduz.jpg",
    mapsLink: "https://www.google.com/maps?q=6+Fern+Road,+Sandyford",
    capacity: "3-5",
    size: "260 sq ft",
    amenities:
      "Parking, Tea, Coffee, 60 inch TV, Poly Video Conferencing, Bathrooms, Banqueting available, Onsite Concierge, Canteen, Bike Parking, Showers, Air Filter.",
    price: "50€",
  },
  {
    id: 2,
    location: "NASSAU",
    address: "51 Bracken Road, Sandyford",
    image: "images/Nassau.jpg",
    mapsLink: "https://www.google.com/maps?q=51+Bracken+Road,+Sandyford",
    capacity: "5-8",
    size: "260 sq ft",
    amenities:
      "Parking, Tea, Coffee, 60 inch TV, Poly Video Conferencing, Bathrooms, Banqueting available, Onsite Concierge, Canteen, Bike Parking, Showers, Air Filter.",
    price: "50€",
  },
  {
    id: 3,
    location: "CASTRIES",
    address: "77 Lower Camden Street, Dublin 2",
    image: "images/castries.jpg",
    mapsLink: "https://www.google.com/maps?q=77+Lower+Camden+Street,+Dublin+2",
    capacity: "2-4",
    size: "260 sq ft",
    amenities:
      "Parking, Tea, Coffee, 60 inch TV, Poly Video Conferencing, Bathrooms, Banqueting available, Onsite Concierge, Canteen, Bike Parking, Showers, Air Filter.",
    price: "50€",
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
    <div className="container mt-5 p-5 bg-light shadow rounded-lg text-center">
      <h5 className="text-danger fw-bold">MEETING ROOMS</h5>
      <h1 className="fw-bold mb-3">Flexible & Convenient Meeting Rooms in Dublin</h1>
      <p className="text-muted mb-5">
        Choose from a selection of prime locations with fully equipped boardrooms. Available for hourly, half-day, or full-day bookings.
      </p>
    <div className="row mt-5 mb-5 align-items-center text-center text-md-start">
    <div className="col-md-6 pe-md-4 border-md-end border-danger">
    <p className="fw-bold mb-3" style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
      Choose from our centrally located <span className="text-danger">Camden Street</span> office building,
      nestled in the heart of the bustling city, or explore our business centres in{" "}
      <span className="text-danger">Bracken Road</span> and{" "}
      <span className="text-danger">Fern Road</span>, strategically situated in the vibrant Sandyford business district.
    </p>
  </div>
  <div className="col-md-6">
    <p className="mt-3" style={{ fontSize: "1rem", lineHeight: "1.6" }}>
      To make your reservation process seamless, we have provided an easy-to-navigate platform where you can browse our available meeting rooms and boardrooms.
      If you find a space that suits your needs, do not hesitate to contact us for availability and booking.
    </p>
    <p className="mt-3" style={{ fontSize: "1rem", lineHeight: "1.6" }}>
      For those looking for a temporary workspace, we offer coworking day passes that grant you access to our coworking desk space for up to 8 hours.
      For a more dedicated and long-term option, consider our dedicated desk packages.
    </p>
    <p className="mt-3" style={{ fontSize: "1rem", lineHeight: "1.6" }}>
      With a dedicated desk, you have your own personal workspace available 24/7, providing you with the flexibility to work whenever suits your schedule.
        </p>
      </div>
          </div>
      <div className="row g-4">
        {meetingRooms.map((room) => (
          <div key={room.id} className="col-md-4">
            <div className="card shadow-lg border-0 rounded-3 h-100">
              <img src={room.image} className="card-img-top rounded-top" alt={room.address} />
              <div className="card-body">
                <h6 className="text-danger">{room.location}</h6>
                <h5 className="fw-bold">{room.address}</h5>
                <div className="d-flex align-items-center justify-content-center text-muted my-2">
                  <FaUsers className="me-2" /> {room.capacity}
                  <span className="mx-3">|</span>
                  <FaRulerCombined className="me-2" /> {room.size}
                </div>
                <p className="mt-2 text-muted small">
                  <strong>Amenities:</strong> {room.amenities}
                </p>
                <p className="fw-bold fs-5 text-dark">
                  <span className="text-danger">{room.price}€</span> / hour
                </p>
                <div className="d-flex justify-content-between">
                  <a href={room.mapsLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark px-3">
                    View in Maps ↗
                  </a>
                  <button className="btn btn-dark px-4" onClick={() => handleBookNow(room)}>
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
        <div className="row g-4">
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm bg-white">
              <FaBuilding size={40} className="text-danger mb-3" />
              <h5 className="fw-bold">Choose Your Location</h5>
              <p className="text-muted small">Select a meeting room in your preferred location.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm bg-white">
              <FaCalendarAlt size={40} className="text-danger mb-3" />
              <h5 className="fw-bold">Pick Date & Time</h5>
              <p className="text-muted small">Choose the best time that suits your schedule.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm bg-white">
              <FaHandshake size={40} className="text-danger mb-3" />
              <h5 className="fw-bold">You're All Set!</h5>
              <p className="text-muted small">We'll handle the rest for a smooth experience.</p>
            </div>
          </div>
        </div>
        <button className="btn btn-dark mt-4 px-5 py-2" onClick={handleStartNow}>
          Start Now
        </button>
      </div>
      {showModal && <BookingForm room={selectedRoom} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default MeetingRooms;