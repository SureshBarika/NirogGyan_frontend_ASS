import {useNavigate} from "react-router-dom"
import React, { useState, useEffect } from "react";

import DoctorCard from "../components/DoctorCard";



function LandingPage({ doctors }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const filtered = doctors.filter((doc) =>
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDoctors(filtered);
  }, [searchTerm]);

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-space align-items-center">
      <h1 className="mb-4">Find a Doctor</h1>
      <button onClick={() => navigate("/register/doctor")} className="btn btn-primary ms-auto">Register AS Doctor</button>
      </div>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search by name or specialization..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="row">
        {filteredDoctors.map((doctor) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={doctor.id}>
            <DoctorCard {...doctor} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
