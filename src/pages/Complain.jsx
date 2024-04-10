import React from 'react'
import data from '../../db.json';
import './Complain.css'

const Complain = () => {

    console.log(data);


  return (
   

    <div>
       <h1>Complaints</h1>
      
       <ul>
        {data.reports.map((report) => (
          <li  className='data-container' key={report.id}>
            <p>Name: {report.name}</p>
            <p>Area to report: {report.areaToReport}</p>
            <p>Year: {report.year}</p>
            <p>Experience: {report.experience}</p>
          </li>
        ))}
      </ul>
     

    </div>
  )
}

export default Complain
