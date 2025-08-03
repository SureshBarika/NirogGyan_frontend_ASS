import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../../healthcare_app/src/pages/LandingPage";
import DoctorProfile from "../../healthcare_app/src/pages/DoctorProfile";
import BookAppointment from "../../healthcare_app/src/pages/BookAppointment";
import DoctorRegistration from "./pages/RigisterDoctor";  
import doctorsData from "./data/data";

function App() {
  
  const [doctors, setDoctors] = useState(doctorsData);

  const updateLocalStorage = () => {
      localStorage.setItem("doctors_data",JSON.stringify(doctors))
      console.log(doctors)
  }
   
  const updateDoctor = (doctor_id) => {
    const updatedDoctors = doctors.map((doctor) => {
      if(doctor.id === doctor_id) {
        doctor.available = !doctor.available;
      }
      return doctor;
    });
    setDoctors(updatedDoctors,updateLocalStorage());
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage doctors={doctors}/>} />
        <Route path="/doctor/:id" element={<DoctorProfile doctors={doctors} updateDoctor={updateDoctor} />} />
        <Route path="/book/:id" element={<BookAppointment doctors={doctors} updateDoctor={updateDoctor} />} />
        <Route path="/register/doctor" element={<DoctorRegistration doctors={doctors} />} />
      </Routes>
    </Router>
  );
}

export default App;
