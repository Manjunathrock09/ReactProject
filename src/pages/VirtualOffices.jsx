import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BookingForm from "./BookingForm";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Essential Plan",
    description:
      "For businesses that need a professional address and mail handling services for Irish CRO and Revenue only.",
    price: "₹13,410",
    popular: false,
  },
  {
    name: "Plus Plan",
    description:
      "For businesses wanting to use the address as their trading and main business address.",
    price: "₹17,910",
    popular: false,
  },
  {
    name: "Business Plan",
    description:
      "For businesses ready to establish a substantial and credible Irish presence.",
    price: "₹62,910",
    popular: true,
  },
  {
    name: "Scale Plan",
    description:
      "The Scale Plan offers everything included in our Business Plan, plus additional premium services to support businesses that require more flexibility and a robust EU presence.",
    price: " ₹71,910 ",
    popular: false,
  },
];

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

      {/* Pricing Cards Section */}
      <div className="row mt-4">
        {plans.map((plan, index) => (
          <div key={index} className="col-md-3 d-flex">
            <div className={`p-4 border rounded-4 shadow-sm position-relative w-100 d-flex flex-column justify-content-between ${plan.popular ? "bg-warning-subtle border-warning" : "border-secondary"}`} style={{ minHeight: "320px" }}>
              <div>
                <h6 className="text-danger text-uppercase fw-semibold">Virtual Offices</h6>
                <h5 className="fw-bold mt-2">{plan.name}</h5>
                <p className="text-muted">{plan.description}</p>
              </div>
              <div>
                <span className="text-muted small">FROM</span>
                <p className="fs-4 fw-bold text-danger">{plan.price} <span className="fs-6">/ year + vat</span></p>
                <div className="mt-3 d-flex justify-content-between">
                  <button className="btn btn-outline-dark">Know more</button>
                  <button className="btn btn-dark text-white">Buy now</button>
                </div>
              </div>
              {plan.popular && (
                <span className="badge bg-danger text-white position-absolute top-0 end-0 m-2">Popular</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* All Plans Include Section */}
      <div className="mt-5 pt-5 border-top text-start">
        <h3 className="fw-bold text-dark">All Plans Include</h3>
        <p className="text-muted">In addition to a virtual business address, all plans include a range of value-adding services.</p>
        
        <div className="row mt-4">
          {/* Immediate Setup */}
          <div className="col-md-6 d-flex align-items-center">
            <div className="me-3">
              <span className="d-inline-block bg-light border rounded-circle p-3">
                <i className="bi bi-arrow-repeat text-danger fs-4"></i>
              </span>
            </div>
            <div>
              <h5 className="fw-bold">Immediate set up</h5>
              <p className="text-muted">
                After completing your onboarding process, you will have instant access to your chosen plan.
              </p>
            </div>
          </div>

          {/* Customer Support */}
          <div className="col-md-6 d-flex align-items-center">
            <div className="me-3">
              <span className="d-inline-block bg-light border rounded-circle p-3">
                <i className="bi bi-headset text-danger fs-4"></i>
              </span>
            </div>
            <div>
              <h5 className="fw-bold">Customer support</h5>
              <p className="text-muted">
                Our dedicated team provides support to clients every step of the way. From selecting the right plan or service to ensuring you get the most from your selection.
              </p>
            </div>
          </div>

          {/* Mail Sorted Daily */}
          <div className="col-md-6 d-flex align-items-center mt-4">
            <div className="me-3">
              <span className="d-inline-block bg-light border rounded-circle p-3">
                <i className="bi bi-mailbox text-danger fs-4"></i>
              </span>
            </div>
            <div>
              <h5 className="fw-bold">Mail Sorted Daily</h5>
              <p className="text-muted">
                You will be notified of new post as soon as it arrives and can select the mail handling of your choice.
              </p>
            </div>
          </div>

          {/* Free Scanning */}
          <div className="col-md-6 d-flex align-items-center mt-4">
            <div className="me-3">
              <span className="d-inline-block bg-light border rounded-circle p-3">
                <i className="bi bi-file-earmark-text text-danger fs-4"></i>
              </span>
            </div>
            <div>
              <h5 className="fw-bold">Free Scanning</h5>
              <p className="text-muted">
                All received post is scanned and sent to you, so you’ll never miss an important communication.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose a Virtual Business Plan? */}
      <div className="mt-5 pt-4 border-top">
        <h3 className="fw-bold text-dark mb-3">Why Choose a Virtual Business Plan?</h3>
        <p className="text-muted px-lg-5">
          Using a virtual office address boosts your professional image and will help grow trust and increase credibility with your customers.
        </p>
        <div className="row mt-4">
          <div className="col-md-6 d-flex">
            <div className="p-4 border rounded-4 shadow-sm w-100">
              <i className="bi bi-cash-coin text-danger fs-4"></i>
              <h5 className="fw-bold mt-2">Cost Efficiency</h5>
              <p className="text-muted">
                Virtual office plans offer substantial cost savings compared to traditional office spaces, as they eliminate the need for physical space, utility bills, and maintenance expenses, allowing businesses to allocate resources more strategically.
              </p>
            </div>
          </div>
          <div className="col-md-6 d-flex">
            <div className="p-4 border rounded-4 shadow-sm w-100">
              <i className="bi bi-laptop text-danger fs-4"></i>
              <h5 className="fw-bold mt-2">Flexibility and Mobility</h5>
              <p className="text-muted">
                With a virtual office plan, employees can work from anywhere, promoting a flexible work environment that accommodates remote work and supports a better work-life balance, ultimately boosting productivity and morale.
              </p>
            </div>
          </div>
        </div>

        {/* Added Professional Image & Global Reach Section */}
        <div className="row mt-4">
          <div className="col-md-6 d-flex">
            <div className="p-4 border rounded-4 shadow-sm w-100">
              <div className="text-danger fs-4 mb-2">
                <i className="bi bi-gem"></i>
              </div>
              <h5 className="fw-bold">Professional Image</h5>
              <p className="text-muted">
                Virtual offices provide a prestigious business address and access to professional reception services, giving smaller companies and startups a polished image that instills confidence in clients and partners.
              </p>
            </div>
          </div>
          <div className="col-md-6 d-flex">
            <div className="p-4 border rounded-4 shadow-sm w-100">
              <div className="text-danger fs-4 mb-2">
                <i className="bi bi-globe"></i>
              </div>
              <h5 className="fw-bold">Global Reach</h5>
              <p className="text-muted">
                A virtual office plan enables businesses to establish a presence in multiple locations without the limitations of physical proximity. This global reach enhances market reach and facilitates expansion into new regions or markets.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Booking Modal */}
      {showModal && <BookingForm onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default VirtualOffices;
