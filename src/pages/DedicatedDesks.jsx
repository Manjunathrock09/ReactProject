import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { 
  DesktopOutlined, LockOutlined, TeamOutlined, WifiOutlined, ThunderboltOutlined, 
  CoffeeOutlined, MailOutlined, CustomerServiceOutlined, PhoneOutlined 
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

const deskBenefits = [
  { img: "/images/private-space.avif", title: "Private & Comfortable", desc: "Your dedicated desk is yours alone, ensuring privacy while still being in a dynamic coworking space.", price: "₹14,999/month" },
  { img: "/images/productivity-boost.avif", title: "Boost Productivity", desc: "A structured workspace with all essential amenities keeps you focused and efficient.", price: "₹10,999/month" },
  { img: "/images/coworking-community.jpg", title: "Join a Vibrant Community", desc: "Be a part of an inspiring coworking environment with networking opportunities.", price: "₹8,999/month" },
  { img: "/images/ergonomic-chair.jpg", title: "Ergonomic Chairs", desc: "Work comfortably with high-quality ergonomic chairs designed for long hours.", price: "₹5,999/month" },
  { img: "/images/meeting-room.jpg", title: "Access to Meeting Rooms", desc: "Book fully-equipped meeting rooms for team discussions and client meetings.", price: "₹7,999/month" },
  { img: "/images/24-7-access.jpg", title: "24/7 Access", desc: "Enjoy round-the-clock access to your dedicated workspace for maximum flexibility.", price: "₹17,999/month" },
];

const testimonials = [
  { name: "Amit Sharma", review: "The best coworking space! The dedicated desk has helped me stay productive.", rating: 5 },
  { name: "Priya Verma", review: "Love the environment and amenities. High-speed internet is a big plus!", rating: 4.5 },
  { name: "Rahul Mehta", review: "The networking opportunities here are fantastic. Worth every penny!", rating: 5 },
];

const faqs = [
  { question: "Can I customize my dedicated desk?", answer: "Yes! You can personalize your space with small plants, photos, and essentials." },
  { question: "Is there a minimum contract period?", answer: "No, we offer flexible monthly plans to suit your needs." },
  { question: "Can I access my desk after office hours?", answer: "Yes, you have 24/7 access to your dedicated desk." },
  { question: "Do I get access to meeting rooms?", answer: "Yes, you can book fully-equipped meeting rooms for team discussions and client meetings." },
  { question: "Is there parking available?", answer: "Yes, we provide secure parking for members on a first-come, first-served basis." },
];

const DedicatedDesks = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container my-5 p-5 bg-white shadow-lg rounded-4">
      {/* Introduction Section */}
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
            className="img-fluid rounded-4 shadow-lg"
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
              <div className="p-4 border rounded-4 shadow-sm w-100 d-flex align-items-start">
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

      {/* Image Cards Section */}
      <div className="mt-5">
        <h3 className="fw-bold text-dark text-center mb-4">What You Get</h3>
        <div className="row">
          {deskBenefits.map((benefit, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
                <img src={benefit.img} alt={benefit.title} className="card-img-top" style={{ height: "220px", objectFit: "cover" }} />
                <div className="card-body text-center">
                  <h5 className="fw-bold">{benefit.title}</h5>
                  <p className="text-muted">{benefit.desc}</p>
                  <p className="fw-bold text-success fs-5">{benefit.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
{/* FAQ Section */}
<div className="mt-5">
  <h3 className="fw-bold text-dark text-center mb-4">Frequently Asked Questions</h3>
  <div className="accordion">
    {faqs.map((faq, index) => {
      const [isOpen, setIsOpen] = useState(false);

      return (
        <div key={index} className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${isOpen ? "" : "collapsed"}`}
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              {faq.question}
            </button>
          </h2>
          {isOpen && (
            <div className="accordion-collapse">
              <div className="accordion-body">{faq.answer}</div>
            </div>
          )}
        </div>
      );
    })}
  </div>
</div>

      {/* Call to Action Section */}
      <div className="mt-5 text-center">
        <h3 className="fw-bold text-dark mb-3">Ready to Get Your Dedicated Desk?</h3>
        <p className="text-muted">Join our coworking space today and boost your productivity!</p>
        <button className="btn btn-danger px-4 py-2" onClick={() => setShowModal(true)}>
          <PhoneOutlined className="me-2" /> Contact Us Now
        </button>
      </div>

      
      {/* Contact Modal */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Get in Touch</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
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
                    <textarea className="form-control" rows="3" placeholder="Your message"></textarea>
                  </div>
                  <button type="submit" className="btn btn-danger w-100">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DedicatedDesks;
