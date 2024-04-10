
import React from 'react'

const Report = () => {
  return (
    <div className='report'>
      <div className="report-container">
        <h1>Report Page</h1>
        <form action="">
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
