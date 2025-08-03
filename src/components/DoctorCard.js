import React from "react";
import { Link } from "react-router-dom";

function DoctorCard({ id, name, specialization, profileImage, available }) {
  return (
    <Link to={`/doctor/${id}`} className="text-decoration-none text-dark">
      <div className="continer card h-400 shadow-sm" style={{ width: "18rem",height: "400px", backgroundImage: `url(${profileImage})`, backgroundSize: "cover" }}>
        {/* <img
          src={profileImage}
          alt={name}
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
        />  */}
        <div className="card-body d-flex flex-column justify-content-end">
          <h5 className="card-title">{name}</h5>
          <p className="card-text text-muted">{specialization}</p>
          <p
            className={`fw-medium ${
              available ? "text-success" : "text-danger"
            }`}
          >
            {available ? "Available" : "Not Available"}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default DoctorCard;
