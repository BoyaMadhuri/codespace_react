// Simple Form Submission
// Description: Create a simple form with a name input field and a submit button. Display an alert with the name when the form is submitted.

// Steps:
//     - onSubmit: Calls handleSubmit , which prevents the default form submission action and shows an alert.
//     - Write your code within the file, by the name of component as Simple_Form
import React, { useState } from 'react';

function Ques_4_Simple_Form() {
  // State to store the name input
  const [name, setName] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (name.trim()) {
      alert(`Hello, ${name}!`);
    } else {
      alert('Please enter your name.');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          style={{ padding: '10px', fontSize: '16px', width: '60%' }}
        />
        <br /><br />
        <button 
          type="submit" 
          style={{ padding: '10px 20px', fontSize: '16px' }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Ques_4_Simple_Form;
