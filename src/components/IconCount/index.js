import React, { useEffect } from "react";
import PropsTypes from "prop-types";

const IconCount = ({ icon, number, onClick, disabled }) => {
  useEffect(() => {}, [number]);
  return (
    <button
      type="submit"
      disabled={disabled}
      onClick={onClick}
      className={`flex flex-row  hover:cursor-pointer rounded ${
        disabled ? "bg-cyan-200 hover:bg-cyan-200" : "hover:bg-slate-100"
      } `}
    >
      <div className="p-1">
        <i className={`${icon}`} />
      </div>
      <div className=" p-1 text-cyan-400">{number}</div>
    </button>
  );
};

IconCount.propTypes = {
  icon: PropsTypes.string,
  number: PropsTypes.number,
  onClick: PropsTypes.func,
  disabled: PropsTypes.bool,
};

IconCount.defaultProps = {
  icon: "ri-discuss-fill",
  number: 0,
  onClick: () => console.log("up"),
  disabled: false,
};

export default IconCount;
