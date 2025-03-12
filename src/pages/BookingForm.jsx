import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";

const countryOptions = [
  { value: "+1", label: "🇺🇸 USA (+1)" },
  { value: "+44", label: "🇬🇧 UK (+44)" },
  { value: "+91", label: "🇮🇳 India (+91)" },
  { value: "+61", label: "🇦🇺 Australia (+61)" },
  { value: "+81", label: "🇯🇵 Japan (+81)" },
];

const BookingForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    countryCode: "+91",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleCountryChange = (selectedOption) => setFormData({ ...formData, countryCode: selectedOption.value });

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== "company") newErrors[key] = "This field is required";
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 3000);
    }
  };

  return (
    <>
      <div className="modal fade show d-block" tabIndex="-1">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content shadow-lg border-0">
            <div className="modal-header bg-dark text-white">
              <h5 className="modal-title">Book a Meeting Room</h5>
              <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                {[
                  { label: "Full Name", name: "fullName", type: "text", placeholder: "Enter your full name" },
                  { label: "Email", name: "email", type: "email", placeholder: "Enter email address" },
                  { label: "Company (Optional)", name: "company", type: "text", placeholder: "Company name" },
                  { label: "Subject", name: "subject", type: "text", placeholder: "Enter subject" },
                ].map(({ label, name, type, placeholder }) => (
                  <div className="mb-3" key={name}>
                    <label className="form-label fw-bold">{label}</label>
                    <input type={type} name={name} className="form-control" placeholder={placeholder} value={formData[name]} onChange={handleChange} />
                    {errors[name] && <small className="text-danger">{errors[name]}</small>}
                  </div>
                ))}

                <div className="mb-3">
                  <label className="form-label fw-bold">Phone Number</label>
                  <div className="d-flex">
                    <Select options={countryOptions} defaultValue={countryOptions.find((opt) => opt.value === formData.countryCode)} onChange={handleCountryChange} className="me-2" />
                    <input type="tel" name="phone" className="form-control" placeholder="Enter phone number" value={formData.phone} onChange={handleChange} />
                  </div>
                  {errors.phone && <small className="text-danger">{errors.phone}</small>}
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">What are you interested in?</label>
                  <textarea name="message" className="form-control" rows="3" placeholder="Write your message..." value={formData.message} onChange={handleChange}></textarea>
                  {errors.message && <small className="text-danger">{errors.message}</small>}
                </div>

                <p className="text-muted small">
                  By clicking the button below, you agree to our <a href="#">Terms of Service</a> and read our <a href="#">Privacy Policy</a>.
                </p>

                <div className="d-grid">
                  <button type="submit" className="btn btn-dark btn-lg">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 1050 }}>
          <div className="toast show text-white bg-success">
            <div className="d-flex">
              <div className="toast-body">✅ Message Sent Successfully!</div>
              <button type="button" className="btn-close btn-close-white me-2" onClick={() => setShowSuccess(false)}></button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingForm;
