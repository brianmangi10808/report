import React, { useState } from 'react';

import './Report.css';

const Report = () => {
  const [formData, setFormData] = useState({
    areaToReport: '',
    name: '',
    year: '',
    experience: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === 'year' ? parseInt(value, 10) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/reports', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error(
          `Failed to submit form data: ${response.status} - ${response.statusText}`
        );
      }
      alert('Form submitted successfully');
      setFormData({
        areaToReport: '',
        name: '',
        year: '',
        experience: '',
      }); // Reset form fields after successful submission
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='report-form'>
      <div className='report-container'>
        <h1>Report Page</h1>
        <form onSubmit={handleSubmit} className='form-container'>
          <input
            type='text'
            placeholder='Area to Report'
            value={formData.areaToReport}
            onChange={handleChange}
            name='areaToReport'
          />

          <input
            type='text'
            name='name'
            placeholder='Your name'
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type='number'
            name='year'
            placeholder='Year'
            value={formData.year}
            onChange={handleChange}
          />
          <textarea
            cols='30'
            rows='10'
            placeholder='Write your experience here ...'
            value={formData.experience}
            onChange={handleChange}
          ></textarea>

          <button type='submit' className='btn-submit'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Report;
