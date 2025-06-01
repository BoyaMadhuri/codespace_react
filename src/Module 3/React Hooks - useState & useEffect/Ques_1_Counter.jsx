// Counter
// 1. Goal: Create a simple counter that increments by one each time a button is clicked.
// 2. Steps:
//     - Initialize a state variable count with an initial value of 0 using useState .
//     - Create a button with an onClick event that increases count by 1.
//     - Display the current count value.
//     - Write your code within the file, by the name of component as Counter

import React, { useState } from 'react';

function Ques_1_Counter() {
  // Step 1: Create a state variable for the count
  const [count, setCount] = useState(0);

  // Step 2: Function to handle the increment
  const increment = () => {
    setCount(count + 1);
  };

  // Step 3: Render the counter and button
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={increment} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Increment
      </button>
    </div>
  );
}

export default Ques_1_Counter;

