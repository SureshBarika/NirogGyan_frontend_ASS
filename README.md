# Niroggyan Health Care App – Frontend

A React-based frontend for the Niroggyan Health Care App.

**Note:**  
This app uses the browser’s localStorage to store and manage doctor data, instead of relying on a backend server or database.

## Project Structure

```
healthcare_app/
  public/
    assets/           # Images for doctors, etc.
    index.html
    ...
  src/
    components/
      DoctorCard.js   # Card component for doctor display
    data/
      doctors.json    # Doctor data
      data.js         # Data utilities
    pages/
      LandingPage.js      # Home/landing page
      BookAppointment.js  # Appointment booking page
      DoctorProfile.js    # Doctor profile details
      RigisterDoctor.js   # Doctor registration page
    App.js
    index.js
    ...
  package.json
```

## Prerequisites

- Node.js (v14 or above recommended)
- npm

## Setup & Running

1. **Install dependencies:**

   ```bash
   cd healthcare_app
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm start
   ```

   - The app will run at [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `npm start` – Runs the app in development mode.
- `npm test` – Launches the test runner.
- `npm run build` – Builds the app for production.
- `npm run eject` – Ejects the app (not recommended unless necessary).

## Features

- View a list of doctors with images and details
- Book appointments with doctors
- View individual doctor profiles
- Register new doctors
- **Doctor data is persisted in the browser’s localStorage (no backend required)**

## Customization

- **Doctor Data:**  
  To add or edit doctors, modify `src/data/doctors.json`.  
  _Note: Changes made through the app (like registering a new doctor) are saved in localStorage and will persist across browser sessions._
- **Assets:**  
  Add doctor images to `public/assets/` and reference them in the JSON.

## Learn More

- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Documentation](https://reactjs.org/)
