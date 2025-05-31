// Embedding JavaScript Expressions in JSX
// Description: Embed a JavaScript expression in JSX to display the current year.
// Use this component in App.js


import React from 'react';

function CurrentYear() {
  const year = new Date().getFullYear(); // JavaScript expression to get current year
  return (
    <div>
      <h1>The current year is {year}</h1>
    </div>
  );
}

export default CurrentYear;
