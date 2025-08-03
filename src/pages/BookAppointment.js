import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function BookAppointment({ doctors, updateDoctor }) {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === id);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    datetime: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (!form.checkValidity()) {
      e.stopPropagation();
      form.classList.add("was-validated");
      return;
    }
    updateDoctor(id);
  };

  if (!doctor) {
    return (
      <div className="container py-5">
        <h2 className="text-danger">Doctor not found.</h2>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="container py-5 text-center">
        <h2 className="text-success">Appointment Confirmed!</h2>
        <p className="mt-3">You have booked an appointment with <strong>{doctor.name}</strong>.</p>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="mb-4">Book Appointment with <strong>{doctor.name}</strong></h2>
      <form className="needs-validation" noValidate onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please enter your name.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Your Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please enter a valid email address.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="datetime" className="form-label">Appointment Date & Time</label>
          <input
            type="datetime-local"
            name="datetime"
            className="form-control"
            id="datetime"
            value={formData.datetime}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please select date and time.</div>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Confirm Appointment
        </button>
      </form>
    </div>
  );
}

export default BookAppointment;
