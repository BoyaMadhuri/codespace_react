import React from "react";

const Ques_4 = () => {
  return (
    <div>
      {/* JSX rules in action */}
      <h1>Hello, JSX Rules!</h1>
      
      {/* Correctly closed self-closing tag */}
      <img src="https://via.placeholder.com/150" alt="Placeholder" />
      
      {/* Use className instead of class */}
      <p className="description">
        This paragraph correctly uses <code>className</code> instead of <code>class</code>.
      </p>

      {/* All JSX tags must be properly closed */}
      <input type="text" placeholder="Enter text" />

      {/* Use camelCase for event handlers */}
      <button onClick={() => alert("Button clicked!")}>
        Click me
      </button>

      {/* Expressions inside JSX must be wrapped in curly braces */}
      <p>The result of 2 + 3 is: {2 + 3}</p>
    </div>
  );
};

export default Ques_4;
