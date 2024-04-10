import React from 'react';
import './App.css';
import Navbar from './navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
 

  return (
    <>
    <Router>
     <div className="main-container">
       <Navbar/>

       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact/>} />
          {/* Define other routes using element prop */}
        </Routes>
     </div>
    </Router>
    </>
  )
}

export default App
