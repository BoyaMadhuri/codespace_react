// Favorite Color

// 1. Goal: Allow users to input and display their favorite color.
// 2. Steps:
//     - Create a state variable favoriteColor with an initial value of an empty string.
//     - Implement an input field to update favoriteColor using onChange .
//     - Display the value of favoriteColor below the input field.
//     - Write your code within the file, by the name of component as Timeout_Counter
import React, { useState } from 'react';

const Ques_11_Favorite_Color = () => {
  const [color, setColor] = useState('');

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: 20 }}>
      <h3>What's your favorite color?</h3>
      <input
        type="text"
        value={color}
        onChange={handleChange}
        placeholder="Enter your favorite color"
        style={{ padding: 8, fontSize: 16, width: '100%', maxWidth: 300 }}
      />
      {color && (
        <p style={{ marginTop: 20 }}>
          Your favorite color is: <strong>{color}</strong>
        </p>
      )}
    </div>
  );
};

export default Ques_11_Favorite_Color;
