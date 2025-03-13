import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BookingForm from "./BookingForm";
import { useNavigate } from "react-router-dom";

const VirtualOffices = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleBookNow = () => {
    setShowModal(true);
  };

  return (
    <div className="container mt-5 p-5 bg-white shadow-lg rounded-4 text-center">
      <h5 className="text-uppercase text-danger fw-bold mb-3">Work From Anywhere</h5>
      <h1 className="fw-bold mb-4 text-dark">Virtual Offices</h1>
      <p className="text-muted lead px-lg-5">
        Our Virtual Office solutions provide your business with a prestigious 
        <strong className="text-danger"> Dublin address </strong> and professional support, 
        all without the overhead of physical office space.
      </p>
      <p className="text-muted px-lg-5">
        Whether you’re starting out, scaling up, or need a reliable business presence, 
        we have the right plan for you. Our <strong>Business Plan</strong> includes a 
        licence agreement, helping you meet legal and regulatory requirements 
        while providing a credible Irish base for your operations.
      </p>

      {/* Booking Button */}
      <button className="btn btn-danger mt-4 px-5 py-3 fw-bold rounded-pill shadow-sm" onClick={handleBookNow}>
        Get In Touch
      </button>

      {/* Virtual Office Plans Section */}
      <div className="mt-5 pt-4 border-top">
        <h3 className="fw-bold text-dark mb-3">Virtual Office Plans and Prices</h3>
        <p className="text-muted px-lg-5">
          Our 4 virtual office plans have been carefully created to meet a range of business requirements. 
          If you need advice about which plan to choose, please <strong>contact us</strong>.
        </p>
      </div>

      {/* Booking Modal */}
      {showModal && <BookingForm onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default VirtualOffices;
