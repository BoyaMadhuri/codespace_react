// Text Input and Display
// Description: Create a React component that allows users to input text in a textbox and displays the input below the textbox.

// Steps:
//     - Write your code within the file, by the name of component as Text_Input
import React, { useState } from 'react';

function Ques_2_Text_Input_and_Display() {
  // Step 1: Create a state variable to store the input text
  const [text, setText] = useState('');

  // Step 2: Handle input change
  const handleChange = (event) => {
    setText(event.target.value);
  };

  // Step 3: Render input and display
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Type Something Below:</h2>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter some text"
        style={{ padding: '10px', width: '60%', fontSize: '16px' }}
      />
      <p style={{ marginTop: '20px', fontSize: '18px' }}>
        You typed: <strong>{text}</strong>
      </p>
    </div>
  );
}

export default Ques_2_Text_Input_and_Display;
