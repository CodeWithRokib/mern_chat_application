import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Frontend/Home/Home";
import About from "./components/Frontend/About/About";
import Appointment from "./components/Frontend/Appointment/Appointment";
import Dashboard from "./components/Backend/Dashboard/Dashboard";
import AddDoctor from "./components/Backend/Doctor/AddDoctor";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/doctor_add" element={<AddDoctor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
