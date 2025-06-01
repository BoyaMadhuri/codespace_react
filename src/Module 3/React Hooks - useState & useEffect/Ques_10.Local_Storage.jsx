import React, { useState, useEffect } from 'react';

const Ques_10_Local_Storage = () => {
  const [inputValue, setInputValue] = useState(() => {
    // Initialize state from localStorage, or fallback to empty string
    return localStorage.getItem('inputValue') || '';
  });

  useEffect(() => {
    // Sync localStorage whenever inputValue changes
    localStorage.setItem('inputValue', inputValue);
  }, [inputValue]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
      <h3>Persistent Text Input</h3>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter text here"
        style={{ padding: '0.5rem', fontSize: '1rem', width: '100%', maxWidth: 400 }}
      />
      <p>Current Input: {inputValue}</p>
    </div>
  );
};

export default Ques_10_Local_Storage;
