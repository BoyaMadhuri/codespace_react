import React from "react";
import PropTypes from "prop-types";

const Profile = ({ name, age }) => {
  return (
    <div>
      <h2>Profile Information</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

// PropTypes validation
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

const Ques_5 = () => {
  return (
    <div>
      <Profile name="Alice" age={30} />
      <Profile name="Bob" age={25} />
    </div>
  );
};

export default Ques_5;
