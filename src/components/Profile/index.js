import React from "react";
import PropTypes from "prop-types";

const Profile = ({ name, email }) => {
  return (
    <div className="flex flex-col w-full justify-center items-center ">
      <div className=" flex justify-center p-4">
        <img
          alt="avatar-profile"
          width={120}
          height={120}
          className="rounded-full"
          src="https://ui-avatars.com/api/?name=Dimas%20Saputra&background=random"
        />
      </div>
      <div className="flex-start">
        <p className="font-mono text-xl font-semibold">{name}</p>
      </div>
      <div className="flex-start">
        <p className="font-mono text-sm text-slate-400">{email}</p>
      </div>
    </div>
  );
};
Profile.defaultProps = {
  name: "root",
  email: "root@gmail.com",
};
Profile.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
};

export default Profile;
