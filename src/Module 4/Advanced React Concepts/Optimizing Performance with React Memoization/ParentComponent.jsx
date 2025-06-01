import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

// Child component wrapped with React.memo to avoid unnecessary re-renders
const ChildComponent = React.memo(({ onClick, count }) => {
  console.log('ChildComponent rendered');
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={onClick}>Increment</button>
    </div>
  );
});

ChildComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  // useCallback to memoize increment function and avoid changing reference on each render
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <h2>Parent Component</h2>
      <button onClick={() => setOtherState(!otherState)}>
        Toggle Other State
      </button>
      {/* ChildComponent only re-renders if count or increment changes */}
      <ChildComponent onClick={increment} count={count} />
    </div>
  );
};

export default ParentComponent;
