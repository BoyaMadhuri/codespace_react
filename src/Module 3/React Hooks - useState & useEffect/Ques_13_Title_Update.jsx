// Document Title Update

// 1. Goal: Change the document title to reflect the number of button clicks.
// 2. Steps:
//     - Initialize a count state using useState .
//     - Use useEffect to update the document title whenever the count changes.
//     - Create a button to increase the count and see the document title change.
//     - Write your code within the file, by the name of component as Title_Update
import React, { useState, useEffect } from 'react';

const Ques_13_Title_Update = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} ${count === 1 ? 'time' : 'times'}`;
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(prev => prev + 1)}>Click me</button>
      <p>You have clicked the button {count} {count === 1 ? 'time' : 'times'}.</p>
    </div>
  );
};

export default Ques_13_Title_Update;
