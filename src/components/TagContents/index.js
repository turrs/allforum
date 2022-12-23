import React from "react";
import PropsTypes from "prop-types";

const TagContents = ({ data }) => {
  return (
    <div className="bg-green-100 flex p-1 m-1 rounded-md hover:bg-green-50 hover:cursor-pointer">
      <p className="font-mono font-semibold text-sm text-black-800">{data}</p>
    </div>
  );
};

TagContents.propTypes = {
  data: PropsTypes.string,
};

TagContents.defaultProps = {
  data: "General",
};

export default TagContents;
