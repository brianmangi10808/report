
import React from 'react'
import './Report.css'

const Report = () => {
  return (
    <div className='report'>
      <div className="report-container">
        <h1>Report Page</h1>
        <form className='form-container'>
            <input type="text"  placeholder="Area to Report"/>

            <input type="text" name="name" placeholder="Your name" />
            <input type="number"  name='year' placeholder='year'/>
            <textarea name="" id="" cols="30" rows="10" placeholder="Write your experience here ..."></textarea>

            <button>Submit</button>

        </form>
      </div>
    </div>
  )
}

export default Report
