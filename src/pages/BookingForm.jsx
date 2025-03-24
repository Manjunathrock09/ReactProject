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
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleCountryChange = (selectedOption) => setFormData({ ...formData, countryCode: selectedOption.value });

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) newErrors[key] = "This field is required";
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
      {/* BACKDROP */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.6)",
          zIndex: 1040,
          backdropFilter: "blur(5px)",
        }}
        onClick={onClose}
      ></div>

      {/* MODAL */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: "500px",
          background: "white",
          borderRadius: "12px",
          boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.3)",
          zIndex: 1050,
          overflow: "hidden",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            padding: "18px",
            background: "linear-gradient(135deg, #6a11cb, #2575fc)",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "12px 12px 0 0",
          }}
        >
          <h4 style={{ margin: 0 }}>📅 Enter your choice</h4>
          <button
            style={{
              background: "rgba(255, 255, 255, 0.8)",
              borderRadius: "50%",
              border: "none",
              width: "30px",
              height: "30px",
              fontSize: "16px",
              cursor: "pointer",
              transition: "all 0.2s ease-in-out",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            onClick={onClose}
          >
            ❌
          </button>
        </div>

        {/* FORM BODY */}
        <div style={{ padding: "25px" }}>
          <form onSubmit={handleSubmit}>
            {/* FULL NAME & EMAIL */}
            {[
              { name: "fullName", type: "text", placeholder: "Full Name" },
              { name: "email", type: "email", placeholder: "Email" },
            ].map(({ name, type, placeholder }) => (
              <div className="mb-3 position-relative" key={name}>
                <input
                  type={type}
                  name={name}
                  className={`form-control floating-input ${formData[name] ? "active" : ""}`}
                  placeholder={placeholder}
                  value={formData[name]}
                  onChange={handleChange}
                  style={{ borderRadius: "8px", padding: "10px 15px" }}
                />
                <label className={`floating-label ${formData[name] ? "visible" : ""}`}>{placeholder}</label>
                {errors[name] && <small className="text-danger">{errors[name]}</small>}
              </div>
            ))}

            {/* PHONE NUMBER */}
            <div className="mb-3">
              <div className="d-flex">
                <Select
                  options={countryOptions}
                  defaultValue={countryOptions.find((opt) => opt.value === formData.countryCode)}
                  onChange={handleCountryChange}
                  className="me-2 flex-grow-1"
                />
                <input
                  type="tel"
                  name="phone"
                  className={`form-control floating-input ${formData.phone ? "active" : ""}`}
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{ borderRadius: "8px", padding: "10px 15px" }}
                />
              </div>
              {errors.phone && <small className="text-danger">{errors.phone}</small>}
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                fontSize: "16px",
                fontWeight: "bold",
                background: "linear-gradient(135deg, #6a11cb, #2575fc)",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              ✉️ Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingForm;
