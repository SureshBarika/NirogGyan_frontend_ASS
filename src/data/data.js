const doctorData =   [
    {
      "id": "1",
      "name": "Dr. Ayesha Khan",
      "specialization": "Cardiologist",
      "profileImage": "/assets/doctor2.jpg",
      "available": true
    },
    {
      "id": "2",
      "name": "Dr. Rajiv Sharma",
      "specialization": "Dermatologist",
      "profileImage": "/assets/doctor1.jpg",
      "available": true
    },{
      "id": "3",
      "name": "Dr. Sreeleela",
      "specialization": "Cardiologist",
      "profileImage": "/assets/doctor3.jpg",
      "available": true
    }
  ]

  let doctorsData =  localStorage.getItem("doctors_data")
  if (doctorsData === null) {
    localStorage.setItem("doctors_data",JSON.stringify(doctorData))
    doctorsData = doctorData
  }else {
    doctorsData = JSON.parse(doctorsData)
  }

export default doctorsData

