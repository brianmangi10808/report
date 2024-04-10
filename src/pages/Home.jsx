import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div  className='homepage'>
       <h1>Welcome to the Report page!</h1>
      <div className="btn-container">
     

      <NavLink to="/Report" className="btn" >Report</NavLink>
      <NavLink to="/Complain" className="btn" >View Complains</NavLink>
      </div>
   
    </div>
  )
}

export default Home               