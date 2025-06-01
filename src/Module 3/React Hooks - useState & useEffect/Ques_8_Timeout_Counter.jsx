import React, { useState, useEffect } from 'react';

const MAX_COUNT = 1000000;
const DEFAULT_INTERVAL_MS = 2000; // 2 seconds
const INCREMENT_STEP = 2;

function Ques_8_Timeout_Counter() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      try {
        setCount(prevCount => {
          if (prevCount < MAX_COUNT) {
            return prevCount + INCREMENT_STEP;
          } else {
            clearInterval(timer);
            return prevCount;
          }
        });
      } catch (err) {
        setError(err.message || 'Unknown error');
        clearInterval(timer);
      }
    }, DEFAULT_INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  if (error) {
    return <div style={{ color: 'red' }}>Error: {error}</div>;
  }

  return (
    <div style={{ fontFamily: 'Arial', textAlign: 'center', marginTop: 40 }}>
      <h2>Timeout Counter</h2>
      <p>Count: {count}</p>
    </div>
  );
}

export default Ques_8_Timeout_Counter;
