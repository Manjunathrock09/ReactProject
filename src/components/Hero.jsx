import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const Hero = () => (
  <section
    id="hero"
    className="container-fluid text-center d-flex flex-column justify-content-center align-items-center vh-50"
    style={{
      background: "url('/images/background.jpg') center/cover no-repeat",
      minHeight: "50vh",
    }}
  >
    <h1 className="fw-bold">Welcome to WorkHub</h1>
    <p className="fs-5">Your best workspace solution.</p>
    <a href="#services" className="btn btn-primary btn-lg mt-3">Get Started</a>
  </section>
);

export default Hero;
