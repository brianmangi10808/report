import React from 'react';
import './App.css';
import Navbar from './navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Report from './pages/Report';
import Complain from './pages/Complain';

function App() {
 

  return (
    <>
    <Router>
     <div className="main-container">
       <Navbar/>

       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Report" element={<Report/>} />
          <Route path="/Complain" element={<Complain/>} />
          {/* Define other routes using element prop */}
        </Routes>
     </div>
    </Router>
    </>
  )
}

export default App
