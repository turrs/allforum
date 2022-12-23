import React from "react";
import PropTypes from "prop-types";

const Button = ({ name, onClick }) => {
  return (
    <div className="bg-green-300 p-2 rounded hover:bg-green-400">
      <button type="button" onClick={onClick}>
        <p className="font-mono text-sm font-semibold ">{name}</p>
      </button>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  name: "Submit",
  onClick: undefined,
};

export default Button;
