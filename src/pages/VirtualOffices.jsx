import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  SyncOutlined,
  CustomerServiceOutlined,
  MailOutlined,
  IdcardOutlined,
  BankOutlined,
  PhoneOutlined,
  FileTextOutlined,
  GlobalOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
import BookingForm from "./BookingForm";

const plans = [
  {
    name: "Essential Plan",
    description: "For businesses needing a professional address and mail handling for GST and ROC registration.",
    price: "₹13,410",
    popular: false,
  },
  {
    name: "Plus Plan",
    description: "For businesses wanting to use the address as their official and operational business address.",
    price: "₹17,910",
    popular: false,
  },
  {
    name: "Business Plan",
    description: "For companies looking for an established presence with call handling and mail services.",
    price: "₹62,910",
    popular: true,
  },
  {
    name: "Scale Plan",
    description: "Includes all Business Plan features, plus legal support, compliance, and a dedicated phone number.",
    price: "₹71,910",
    popular: false,
  },
];

const VirtualOffices = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container mt-5 p-5 bg-white shadow-lg rounded-4 text-center">
      {/* Heading Section */}
      <h5 className="text-uppercase text-danger fw-bold mb-3">Work From Anywhere</h5>
      <h1 className="fw-bold mb-4 text-dark">Virtual Offices in India</h1>
      <p className="text-muted lead px-lg-5">
        Our Virtual Office solutions provide your business with a prestigious{" "}
        <strong className="text-danger"> business address </strong> and essential support
        for **GST registration, call handling, and government compliance.**
      </p>

      {/* Plans Section */}
      <div className="mt-5 pt-4 border-top">
        <h3 className="fw-bold text-dark mb-3">Virtual Office Plans and Prices</h3>
        <p className="text-muted px-lg-5">Choose from our carefully crafted plans to meet your business needs.</p>
      </div>

      <div className="row mt-4">
        {plans.map((plan, index) => (
          <div key={index} className="col-lg-3 col-md-6 d-flex">
            <div
              className={`p-4 border rounded-4 shadow-sm position-relative w-100 d-flex flex-column justify-content-between ${
                plan.popular ? "bg-warning-subtle border-warning" : "border-secondary"
              }`}
              style={{ minHeight: "350px", transition: "all 0.3s ease-in-out", cursor: "pointer" }}
            >
              <div>
                <h6 className="text-danger text-uppercase fw-semibold">Virtual Offices</h6>
                <h5 className="fw-bold mt-2">{plan.name}</h5>
                <p className="text-muted">{plan.description}</p>
              </div>
              <div>
                <span className="text-muted small">FROM</span>
                <p className="fs-4 fw-bold text-danger">
                  {plan.price} <span className="fs-6">/ year + GST</span>
                </p>
              </div>
              {plan.popular && <span className="badge bg-danger text-white position-absolute top-0 end-0 m-2">Popular</span>}
            </div>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="mt-5 pt-5 border-top text-start">
        <h3 className="fw-bold text-dark">All Plans Include</h3>
        <p className="text-muted">Our Virtual Office packages include essential services tailored for Indian businesses.</p>
        <div className="row mt-4">
          {[
            { name: "GST & ROC Registration", icon: <IdcardOutlined className="text-danger fs-4" />, description: "Use your virtual office for company registration and tax purposes." },
            { name: "Mail Handling & Forwarding", icon: <MailOutlined className="text-danger fs-4" />, description: "Receive and forward business mail across India." },
            { name: "Dedicated Local Landline", icon: <PhoneOutlined className="text-danger fs-4" />, description: "Get a professional business phone number with call handling services." },
            { name: "Bank Account Assistance", icon: <BankOutlined className="text-danger fs-4" />, description: "Use your virtual office address to open a corporate bank account." },
          ].map((feature, index) => (
            <div key={index} className="col-md-6 d-flex align-items-center mt-4">
              <div className="me-3">
                <span className="d-inline-block bg-light border rounded-circle p-3">{feature.icon}</span>
              </div>
              <div>
                <h5 className="fw-bold">{feature.name}</h5>
                <p className="text-muted">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-5 pt-4 border-top">
        <h3 className="fw-bold text-dark mb-3">Why Choose a Virtual Business Plan in India?</h3>
        <p className="text-muted px-lg-5">Improve credibility and expand your business without the overhead costs.</p>
        <div className="row mt-4">
          {[
            { name: "Cost Savings", icon: <DollarCircleOutlined className="text-danger fs-4" />, description: "Avoid high office rent and maintenance costs." },
            { name: "PAN-India Presence", icon: <GlobalOutlined className="text-danger fs-4" />, description: "Use a prestigious address in key Indian business hubs." },
            { name: "Government Compliance Support", icon: <FileTextOutlined className="text-danger fs-4" />, description: "Ensure smooth ROC and GST compliance." },
            { name: "Professional Image", icon: <CustomerServiceOutlined className="text-danger fs-4" />, description: "Enhance business credibility with a corporate address." },
          ].map((benefit, index) => (
            <div key={index} className="col-md-6 d-flex">
              <div className="p-4 border rounded-4 shadow-sm w-100">
                {benefit.icon}
                <h5 className="fw-bold mt-2">{benefit.name}</h5>
                <p className="text-muted">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-5 pt-4 border-top text-center">
        <h3 className="fw-bold text-dark mb-3">Ready to Get Started?</h3>
        <p className="text-muted px-lg-5">Sign up today and get your virtual office in just a few steps.</p>
        <button
          className="btn btn-danger px-4 py-2 fw-bold"
          onClick={() => setShowModal(true)}
        >
          Get Started Now
        </button>
      </div>

      {/* Booking Form Modal */}
      {showModal && <BookingForm onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default VirtualOffices;
