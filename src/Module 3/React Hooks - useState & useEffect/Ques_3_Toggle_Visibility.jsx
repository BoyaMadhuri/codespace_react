import React, { useState } from 'react';

function Ques_3_Toggle_Visibility() {
  // State to manage the visibility of the message
  const [isVisible, setIsVisible] = useState(true);
  const [error, setError] = useState(null); // State for error handling

  // Function to toggle visibility with error handling
  const toggleVisibility = () => {
    try {
      setIsVisible(prev => !prev);
      setError(null); // Clear error if toggle succeeds
    } catch (err) {
      setError('Something went wrong while toggling visibility.');
    }
  };

  // Render UI with error message if any
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button 
        onClick={toggleVisibility} 
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        {isVisible ? 'Hide' : 'Show'} Message
      </button>

      {error && (
        <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>
      )}

      {isVisible && !error && (
        <p style={{ marginTop: '20px', fontSize: '18px' }}>
          Hello! This message is now visible.
        </p>
      )}
    </div>
  );
}

export default Ques_3_Toggle_Visibility;
