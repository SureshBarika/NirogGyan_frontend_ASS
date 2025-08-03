import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function DoctorProfile({ doctors, updateDoctor }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const doctor = doctors.find((doc) => doc.id === id);
  const cancelAppointment = () => {
    updateDoctor(id);
  }

  if (!doctor) return <div className="container mt-5">Doctor not found.</div>;

  return (
    <div className="container mt-5">
      <div className="card mb-4">
        <img
          src={doctor.profileImage}
          alt={doctor.name}
          className="card-img-top"
          style={{ height: "500px" }}
        />
        <div className="card-body">
          <h2 className="card-title">{doctor.name}</h2>
          <p className="card-text text-muted">{doctor.specialization}</p>
          <p
            className={`fw-bold ${
              doctor.available ? "text-success" : "text-danger"
            }`}
          >
            {doctor.available
              ? "Available for appointments"
              : "Currently unavailable"}
          </p>
          <button
            onClick={() => navigate(`/book/${doctor.id}`)}
            className="btn btn-primary mt-3"
            disabled={doctor.available === false}
          >
            Book Appointment
          </button>
          {doctor.available === false && <button  onClick={cancelAppointment} className="btn btn-danger mt-3">Cancel Appointment</button>}
        </div>
      </div>
    </div>
  );
}

export default DoctorProfile;
