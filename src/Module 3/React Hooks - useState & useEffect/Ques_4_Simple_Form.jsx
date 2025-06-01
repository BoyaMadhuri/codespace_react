import React, { useState, useCallback } from 'react';

function Ques_4_Simple_Form() {
  const [name, setName] = useState('');

  // useCallback to avoid re-creating this function on every render
  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    const trimmedName = name.trim();

    // Validate: only alphabets and min length 2
    const isValid = /^[a-zA-Z\s]{2,}$/.test(trimmedName);

    if (!trimmedName) {
      alert('Please enter your name.');
    } else if (!isValid) {
      alert('Name should contain only letters and be at least 2 characters long.');
    } else {
      // Encode input to prevent XSS (for advanced protection)
      const safeName = trimmedName.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      alert(`Hello, ${safeName}!`);
    }
  }, [name]);

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