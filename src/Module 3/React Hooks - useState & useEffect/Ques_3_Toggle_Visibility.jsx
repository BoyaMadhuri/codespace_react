// Toggle Visibility

// 1. Goal: Toggle the visibility of a text message.
// 2. Steps:
//     - Use useState to create a isVisible state with an initial value of false .
//     - Display a button that toggles the boolean isVisible state.
//     - Conditionally render a message when isVisible is true.
//     - Write your code within the file, by the name of component as Toggle_Visibility
import React, { useState } from 'react';

function Ques_3_Toggle_Visibility() {
  // Step 1: State to manage visibility
  const [isVisible, setIsVisible] = useState(true);

  // Step 2: Toggle function
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  // Step 3: Render button and conditional text
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button 
        onClick={toggleVisibility} 
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        {isVisible ? 'Hide' : 'Show'} Message
      </button>

      {isVisible && (
        <p style={{ marginTop: '20px', fontSize: '18px' }}>
          Hello! This message is now visible.
        </p>
      )}
    </div>
  );
}

export default Ques_3_Toggle_Visibility;
