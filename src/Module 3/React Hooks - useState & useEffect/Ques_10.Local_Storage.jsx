// Local Storage with useEffect and useState
// Description: Create a component where the user's input is saved in local storage and persists after page reload.

// Steps to needed:
//     - useState(() => {...}) : Initializes the input with local storage value.
//     - useEffect([input]) : Updates local storage each time input changes.
//     - Write your code within the file, by the name of component as Local_Storage.
import React, { useState, useEffect } from 'react';

function Ques_10_Local_Storage() {
  const [input, setInput] = useState('');

  // Load saved input from localStorage when component mounts
  useEffect(() => {
    const savedInput = localStorage.getItem('userInput');
    if (savedInput) {
      setInput(savedInput);
    }
  }, []);

  // Save input to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('userInput', input);
  }, [input]);

  return (
    <div style={{ fontFamily: 'Arial', padding: 20 }}>
      <h2>Persistent Input with Local Storage</h2>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type something..."
        style={{ padding: 8, fontSize: 16, width: '100%', maxWidth: 400 }}
      />
      <p>Your input is: {input}</p>
    </div>
  );
}

export default Ques_10_Local_Storage;
