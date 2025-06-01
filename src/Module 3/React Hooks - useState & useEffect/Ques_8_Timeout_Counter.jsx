\import React, { useState, useEffect } from 'react';

const MAX_COUNT = 1000000; // Example safety threshold

function Ques_8_Timeout_Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => {
        if (prevCount < MAX_COUNT) {
          return prevCount + 1;
        } else {
          clearInterval(timer); // Stop counting once max is reached
          return prevCount;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ fontFamily: 'Arial', textAlign: 'center', marginTop: 40 }}>
      <h2>Timeout Counter</h2>
      <p>Count: {count}</p>
    </div>
  );
}

export default Ques_8_Timeout_Counter;
