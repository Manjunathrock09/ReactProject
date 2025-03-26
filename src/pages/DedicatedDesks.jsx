import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {
  DesktopOutlined,
  LockOutlined,
  TeamOutlined,
  WifiOutlined,
  ThunderboltOutlined,
  CoffeeOutlined,
  MailOutlined,
  CustomerServiceOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const features = [
  { icon: <DesktopOutlined className="text-danger fs-1" />, title: "Fixed Workspace", desc: "Enjoy a permanent desk setup that is always reserved for you." },
  { icon: <LockOutlined className="text-danger fs-1" />, title: "Secure & Personal", desc: "Keep your essentials safe with personal storage and security." },
  { icon: <TeamOutlined className="text-danger fs-1" />, title: "Networking & Collaboration", desc: "Work alongside like-minded professionals and expand your network." },
  { icon: <WifiOutlined className="text-danger fs-1" />, title: "High-Speed Internet", desc: "Stay connected with ultra-fast, secure, and reliable internet." },
  { icon: <ThunderboltOutlined className="text-danger fs-1" />, title: "24/7 Power Backup", desc: "Work uninterrupted with a dedicated power backup system." },
  { icon: <CustomerServiceOutlined className="text-danger fs-1" />, title: "On-Site Support", desc: "Get technical and administrative support whenever needed." },
  { icon: <CoffeeOutlined className="text-danger fs-1" />, title: "Complimentary Tea & Coffee", desc: "Enjoy unlimited coffee and tea to keep you energized throughout the day." },
  { icon: <MailOutlined className="text-danger fs-1" />, title: "Mail & Package Handling", desc: "Receive your important packages and letters securely at your workspace." },
];

const DedicatedDesks = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container my-5 p-5 bg-white shadow-lg rounded-4 animate-fade-in">
      {/* Hero Section */}
      <div className="row align-items-center">
        <div className="col-md-6 text-start">
          <h5 className="text-uppercase text-danger fw-bold mb-3">Your Own Space in a Shared Office</h5>
          <h1 className="fw-bold mb-4 text-dark">Dedicated Desks</h1>
          <p className="text-muted lead">
            Experience the best of coworking with a <strong>reserved desk</strong> that provides security, flexibility, and productivity.
            Enjoy a personal workspace with all the benefits of a shared office.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="/images/dedicated-desk.jpg"
            alt="Dedicated Desk Workspace"
            className="img-fluid rounded-4 shadow-lg img-hover-effect"
            style={{ maxHeight: "350px", objectFit: "cover" }}
          />
        </div>
      </div>
      
      {/* Features Section */}
      <div className="mt-5">
        <h3 className="fw-bold text-dark text-center mb-4">Why Choose a Dedicated Desk?</h3>
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 mb-4 d-flex">
              <div className="p-4 border rounded-4 shadow-sm w-100 d-flex align-items-start feature-card">
                <div className="me-3">{feature.icon}</div>
                <div>
                  <h5 className="fw-bold">{feature.title}</h5>
                  <p className="text-muted">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Call to Action Section */}
      <div className="mt-5 text-center">
        <h3 className="fw-bold text-dark mb-3">Ready to Get Your Dedicated Desk?</h3>
        <p className="text-muted">Join our coworking space today and boost your productivity!</p>
        <button className="btn btn-danger px-4 py-2 btn-hover-effect" data-bs-toggle="modal" data-bs-target="#contactModal">
          <PhoneOutlined className="me-2" /> Contact Us Now
        </button>
      </div>

      {/* Contact Modal */}
      <div className="modal fade" id="contactModal" tabIndex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="contactModalLabel">Get in Touch</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="3" placeholder="Enter your message"></textarea>
                </div>
                <button type="submit" className="btn btn-danger w-100">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DedicatedDesks;
