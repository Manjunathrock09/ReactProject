import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap Styles
import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap Icons

const featuresData = [
  { id: 1, title: "Customer support", description: "Our dedicated team provides support to clients every step of the way.", icon: "bi-headset" },
  { id: 2, title: "Flexible", description: "Hassle-free cancellations and no long-term contracts.", icon: "bi-arrow-left-right" },
  { id: 3, title: "Cost - saving", description: "Adds professionalism to your business without the big expense.", icon: "bi-cash-coin" },
  { id: 4, title: "Immediate set up", description: "After submitting your details, you'll have instant use.", icon: "bi-clock-history" },
  { id: 5, title: "Prestigious Locations", description: "Our virtual addresses and serviced offices are located at 5 prime Dublin locations, carefully selected for their prestigious postcodes.", icon: "bi-buildings" },
  { id: 6, title: "High level of service", description: "Workhub offers a high level of service to all its clients. We are always on hand to help, whilst staying behind the scenes, allowing clients to dedicate their full attention to their business.", icon: "bi-award" }
];

const WhyWorkhub = () => {
  return (
    <section className="pt-3 pb-5 bg-light"> {/* Reduced top padding */}
      <div className="container">
        <div className="row align-items-start"> {/* Changed align-items-center to start */}
          
          {/* Left Side - Text Content (Moved Higher) */}
          <div className="col-lg-5 mb-3"> {/* Added margin-bottom for spacing */}
            <h6 className="text-danger fw-semibold">WHY WORKHUB</h6>
            <h2 className="fw-bold">We empower our clients' businesses.</h2>
            <p className="text-secondary">
              Our range of plans and services have been carefully developed to help clients run their businesses efficiently and cost-effectively.
            </p>
            <a href="#" className="text-dark fw-bold d-inline-flex align-items-center">
              Our Company <span className="ms-1">&#8594;</span>
            </a>
          </div>

          {/* Right Side - Features Grid */}
          <div className="col-lg-7">
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {featuresData.map((feature) => (
                <div key={feature.id} className="col d-flex flex-column align-items-center text-center">
                  <div 
                    className="border border-danger rounded-3 p-3 d-flex align-items-center justify-content-center"
                    style={{ width: "90px", height: "90px", borderRadius: "12px", borderWidth: "2px" }}
                  >
                    <i className={`bi ${feature.icon} text-danger fs-2`}></i>
                  </div>
                  <h5 className="fw-bold mt-3">{feature.title}</h5>
                  <p className="text-secondary">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyWorkhub;
