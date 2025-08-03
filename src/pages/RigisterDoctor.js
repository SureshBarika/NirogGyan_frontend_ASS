import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function DoctorRegistration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    profileImage: "",
    available: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        profileImage: reader.result, // base64 image
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDoctor = {
      id: Date.now().toString(),
      ...formData,
    };

    const existingDoctors = JSON.parse(localStorage.getItem("doctors_data")) || [];
    const updatedDoctors = [...existingDoctors, newDoctor];
    localStorage.setItem("doctors_data", JSON.stringify(updatedDoctors));

    alert("Doctor registered successfully!");
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Register New Doctor</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="name"
            required
            className="form-control"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Specialization</label>
          <input
            type="text"
            name="specialization"
            required
            className="form-control"
            value={formData.specialization}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Profile Image (Upload)</label>
          <input
            type="file"
            accept="image/*"
            className="form-control"
            onChange={handleImageUpload}
          />
        </div>

        {formData.profileImage && (
          <div className="mb-3">
            <img
              src={formData.profileImage}
              alt="Preview"
              className="img-thumbnail"
              style={{ maxWidth: "200px" }}
            />
          </div>
        )}

        <div className="form-check mb-3">
          <input
            type="checkbox"
            name="available"
            className="form-check-input"
            checked={formData.available}
            onChange={handleChange}
          />
          <label className="form-check-label">Available for appointments</label>
        </div>

        <button type="submit" className="btn btn-primary">
          Register Doctor
        </button>
      </form>
    </div>
  );
}

export default DoctorRegistration;
