import React, { useState, useCallback } from 'react';

// Child component wrapped with React.memo
const ChildComponent = React.memo(({ onClick, count }) => {
  console.log('ChildComponent rendered');
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={onClick}>Increment</button>
    </div>
  );
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  // useCallback ensures function reference is stable across renders
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <h2>Parent Component</h2>
      <button onClick={() => setOtherState(!otherState)}>
        Toggle Other State
      </button>
      <ChildComponent onClick={increment} count={count} />
    </div>
  );
};

export default ParentComponent;
