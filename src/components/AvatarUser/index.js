import React from "react";
import PropTypes from "prop-types";

const AvatarUser = ({ data }) => {
  return (
    <div className="flex flex-col items-start  max-w-[120px] ">
      <div className="flex justify-center ">
        <div>
          <img
            className="bg-slate-200 rounded-full"
            width={30}
            height={30}
            alt="avatar"
            src={data.avatar}
          />
        </div>
        <div className="flex items-center">
          <p className="text-green-900 font-bold">
            120 <i className="ri-file-list-3-line" />
          </p>
        </div>
      </div>
      <div className="flex justify-center  ">
        <p className="font-bold font-mono text-sm text-slate-400">
          {data.name}
        </p>
      </div>
    </div>
  );
};
AvatarUser.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    avatar: PropTypes.string,
  }),
};

AvatarUser.defaultProps = {
  data: {
    id: "example",
    name: "example",
    avatar: "https://generated-image-url.jpg",
  },
};
export default AvatarUser;
