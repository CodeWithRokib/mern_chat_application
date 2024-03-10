import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Frontend/Home/Home';
import About from './components/Frontend/About/About';
import Appointment from './components/Frontend/Appointment/Appointment';

function App() {


  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/appointment' element={<Appointment/>} />
      </Routes>
    </BrowserRouter>

     
    </>
  )
}

export default App
