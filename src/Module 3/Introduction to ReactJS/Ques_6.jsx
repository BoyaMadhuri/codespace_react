import React from "react";
import PropTypes from "prop-types";

const Greeting = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome back, user!</h2>
      ) : (
        <h2>Please log in to continue.</h2>
      )}
    </div>
  );
};

Greeting.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

const Ques_6 = () => {
  return (
    <div>
      <Greeting isLoggedIn={true} />
      <Greeting isLoggedIn={false} />
    </div>
  );
};

export default Ques_6;
