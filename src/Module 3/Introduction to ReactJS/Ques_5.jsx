// Passing Props to Components
// Description: Create a Profile component that receives name and age as props and displays them.

// Step 1: Write your code within the file, by the name of component as Profile
// Step 2: Update App.js to pass props to the Profile componentimport React from "react";

// Profile component receives props: name and age
const Profile = ({ name, age }) => {
  return (
    <div>
      <h2>Profile Information</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

// Example usage of Profile component
const Ques_5 = () => {
  return (
    <div>
      <Profile name="Alice" age={30} />
      <Profile name="Bob" age={25} />
    </div>
  );
};

export default Ques_5;
