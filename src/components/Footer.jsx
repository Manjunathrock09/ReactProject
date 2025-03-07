import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap-icons/font/bootstrap-icons.css"; 

const Footer = () => {
  return (
    <footer className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4 className="fw-bold text-dark">
              <i className="bi bi-house-door-fill text-primary"></i> Workhub
            </h4>
            <p className="text-muted">
              Specialises in finding the right solution for you and your business.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-dark fs-4"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-dark fs-4"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-dark fs-4"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="text-success fs-4"><i className="bi bi-whatsapp"></i></a> {/* WhatsApp Icon */}
            </div>
          </div>

          <div className="col-md-8">
            <div className="row">
              <div className="col-6 col-md-3">
                <h6 className="text-muted">Office Space</h6>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-dark">Serviced Offices</a></li>
                  <li><a href="#" className="text-dark">Locations</a></li>
                </ul>
              </div>
              <div className="col-6 col-md-3">
                <h6 className="text-muted">Virtual Office</h6>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-dark">Essential Plan</a></li>
                  <li><a href="#" className="text-dark">Plus Plan</a></li>
                  <li><a href="#" className="text-dark">Business Plan</a></li>
                  <li><a href="#" className="text-dark">Scale Plan</a></li>
                </ul>
              </div>
              <div className="col-6 col-md-3">
                <h6 className="text-muted">Co-Working</h6>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-dark">Dedicated Desk</a></li>
                  <li><a href="#" className="text-dark">Day Pass</a></li>
                </ul>
              </div>
              <div className="col-6 col-md-3">
                <h6 className="text-muted">Contact & Support</h6>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-dark">Contact Us</a></li>
                  <li><a href="#" className="text-dark">FAQ’s</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-4 text-muted">
          <p className="mb-0">© 2025 - Workhub. All Rights Reserved <a href="#" className="text-danger">Web Development</a></p>
          <div className="d-flex justify-content-center gap-3 mt-2">
            <a href="#" className="text-muted">Privacy</a>
            <a href="#" className="text-muted">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
