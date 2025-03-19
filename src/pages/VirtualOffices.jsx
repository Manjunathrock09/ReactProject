import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { SyncOutlined, CustomerServiceOutlined, MailOutlined, ScanOutlined, DollarCircleOutlined, LaptopOutlined, CrownOutlined, GlobalOutlined } from "@ant-design/icons";

const plans = [
  {
    name: "Essential Plan",
    description: "For businesses that need a professional address and mail handling services for Irish CRO and Revenue only.",
    price: "₹13,410",
    popular: false,
  },
  {
    name: "Plus Plan",
    description: "For businesses wanting to use the address as their trading and main business address.",
    price: "₹17,910",
    popular: false,
  },
  {
    name: "Business Plan",
    description: "For businesses ready to establish a substantial and credible Irish presence.",
    price: "₹62,910",
    popular: true,
  },
  {
    name: "Scale Plan",
    description: "The Scale Plan offers everything included in our Business Plan, plus additional premium services to support businesses that require more flexibility and a robust EU presence.",
    price: "₹71,910",
    popular: false,
  },
];

const VirtualOffices = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container mt-5 p-5 bg-white shadow-lg rounded-4 text-center">
      <h5 className="text-uppercase text-danger fw-bold mb-3">Work From Anywhere</h5>
      <h1 className="fw-bold mb-4 text-dark">Virtual Offices</h1>
      <p className="text-muted lead px-lg-5">
        Our Virtual Office solutions provide your business with a prestigious
        <strong className="text-danger"> Dublin address </strong> and professional support,
        all without the overhead of physical office space.
      </p>

      <div className="mt-5 pt-4 border-top">
        <h3 className="fw-bold text-dark mb-3">Virtual Office Plans and Prices</h3>
        <p className="text-muted px-lg-5">
          Choose from our carefully crafted plans to meet your business needs.
        </p>
      </div>

      <div className="row mt-4">
        {plans.map((plan, index) => (
          <div key={index} className="col-md-3 d-flex">
            <div className={`p-4 border rounded-4 shadow-sm position-relative w-100 d-flex flex-column justify-content-between ${plan.popular ? "bg-warning-subtle border-warning" : "border-secondary"}`} style={{ minHeight: "350px" }}>
              <div>
                <h6 className="text-danger text-uppercase fw-semibold">Virtual Offices</h6>
                <h5 className="fw-bold mt-2">{plan.name}</h5>
                <p className="text-muted">{plan.description}</p>
              </div>
              <div>
                <span className="text-muted small">FROM</span>
                <p className="fs-4 fw-bold text-danger">{plan.price} <span className="fs-6">/ year + VAT</span></p>
              </div>
              {plan.popular && (
                <span className="badge bg-danger text-white position-absolute top-0 end-0 m-2">Popular</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 pt-5 border-top text-start">
        <h3 className="fw-bold text-dark">All Plans Include</h3>
        <p className="text-muted">All plans come with essential business services.</p>
        <div className="row mt-4">
          {[
            { name: "Immediate Setup", icon: <SyncOutlined className="text-danger fs-4" /> },
            { name: "Customer Support", icon: <CustomerServiceOutlined className="text-danger fs-4" /> },
            { name: "Mail Sorted Daily", icon: <MailOutlined className="text-danger fs-4" /> },
            { name: "Free Scanning", icon: <ScanOutlined className="text-danger fs-4" /> }
          ].map((feature, index) => (
            <div key={index} className="col-md-6 d-flex align-items-center mt-4">
              <div className="me-3">
                <span className="d-inline-block bg-light border rounded-circle p-3">
                  {feature.icon}
                </span>
              </div>
              <div>
                <h5 className="fw-bold">{feature.name}</h5>
                <p className="text-muted">
                  {index === 0 ? "Instant access after onboarding." :
                   index === 1 ? "Dedicated team assistance." :
                   index === 2 ? "Mail notifications and handling options." : "Scanned post sent directly to you."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 pt-4 border-top">
        <h3 className="fw-bold text-dark mb-3">Why Choose a Virtual Business Plan?</h3>
        <p className="text-muted px-lg-5">Boost credibility and business presence effortlessly.</p>
        <div className="row mt-4">
          {[
            { name: "Cost Efficiency", icon: <DollarCircleOutlined className="text-danger fs-4" /> },
            { name: "Flexibility and Mobility", icon: <LaptopOutlined className="text-danger fs-4" /> },
            { name: "Professional Image", icon: <CrownOutlined className="text-danger fs-4" /> },
            { name: "Global Reach", icon: <GlobalOutlined className="text-danger fs-4" /> }
          ].map((benefit, index) => (
            <div key={index} className="col-md-6 d-flex">
              <div className="p-4 border rounded-4 shadow-sm w-100">
                {benefit.icon}
                <h5 className="fw-bold mt-2">{benefit.name}</h5>
                <p className="text-muted">
                  {index === 0 ? "Save on office space and maintenance." :
                   index === 1 ? "Work remotely with flexibility." :
                   index === 2 ? "Enhance business credibility with a prestigious address." : "Expand into new markets seamlessly."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal && <BookingForm onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default VirtualOffices;
