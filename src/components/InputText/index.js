import React from "react";
import PropTypes from "prop-types";

const InputText = ({ type, onChange }) => {
  return (
    <div className="w-full">
      <div>
        <p className="block font-bold mb-2 text-gray-700">{type}</p>
      </div>
      <div className="w-full">
        <input
          type={type}
          onChange={onChange}
          className="p-2 w-full"
          placeholder={`input your ${type} `}
        />
      </div>
    </div>
  );
};
InputText.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
};

InputText.defaultProps = {
  type: "default",
  onChange: null,
};
export default InputText;
