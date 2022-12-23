import React from "react";
import PropTypes from "prop-types";

const ListItems = ({ data }) => {
  return (
    <div className="flex items-center w-full rounded-md justify-between hover:cursor-pointer hover:bg-cyan-100 bg-slate-100  p-2 m-1">
      <div className="p-1">
        <img
          width={30}
          height={30}
          className="rounded-full"
          alt="avatar-user"
          src="https://ui-avatars.com/api/?name=Dimas%20Saputra&background=random"
        />
      </div>
      <div>
        <p className="font-mono font-semibold">
          {data.user.name.substring(0, 15)}
        </p>
      </div>
      <div className="flex flex-row items-center">
        <div className="flex px-1 items-center">
          <p className="font-mono font-semibold">{data.score}</p>
        </div>
        <div className="flex items-center">
          <i className="ri-trophy-fill" />
        </div>
      </div>
    </div>
  );
};

ListItems.propTypes = {
  data: PropTypes.shape({
    user: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      email: PropTypes.string,
      avatar: PropTypes.string,
    }),
    score: PropTypes.number,
  }),
};

ListItems.defaultProps = {
  data: {},
};

export default ListItems;
