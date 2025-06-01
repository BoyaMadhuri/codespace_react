// Timeout Counter using useEffect
// Description: Create a counter that increments by one every second using the useEffect hook.

// Steps to needed:
//     - setInterval : Repeatedly increments the count every 1 second.
//     - clearInterval(timer) : Clears the timer when component unmounts to prevent memory leaks.
//     - Write your code within the file, by the name of component as Timeout_Counter
import React, { useState, useEffect } from 'react';

function Ques_8_Timeout_Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Set up the interval to increment count every 1000ms (1 second)
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(timer);
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div style={{ fontFamily: 'Arial', textAlign: 'center', marginTop: 40 }}>
      <h2>Timeout Counter</h2>
      <p>Count: {count}</p>
    </div>
  );
}

export default Ques_8_Timeout_Counter;
