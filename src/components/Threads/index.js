import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AvatarUser from "../AvatarUser";
import IconCount from "../IconCount";
import TagContents from "../TagContents";
import { ConvertTime } from "../../utils";
import {
  asyncSetDownThread,
  asyncSetUpThread,
} from "../../states/Thread/action";

const Threads = ({ data }) => {
  const allUsersData = useSelector((state) => state.allUsers);
  const ownUserId = useSelector((state) => state?.userData?.id);
  const dispatch = useDispatch();
  const avatarData = allUsersData.find(
    (element) => element.id === data.ownerId
  );
  const handleUpThread = (id, userId) => {
    dispatch(asyncSetUpThread(id, userId));
  };
  const handleDownThread = (id, userId) => {
    dispatch(asyncSetDownThread(id, userId));
  };
  useEffect(() => {}, []);
  return (
    <div className="flex p-2 justify-center p-1 w-full h-full ">
      <div className="flex flex-col  bg-slate-50  w-full h-full md:max-w-xl rounded-md  p-2">
        <div className="flex flex-row justify-between">
          <div className="md:max-w-[400px] md:min-w-[580px] max-w-[700px]">
            <Link to={`/thread/${data.id}`}>
              <p className="font-mono font-bold md:text-left sm:text-jsutify text-md text-green-700">
                {data.title}
              </p>
            </Link>
            <p className="text-xs text-slate-300">
              {ConvertTime(data.createdAt)}
            </p>
          </div>
        </div>
        <div className="flex flex-col  max-w-xl p-2">
          <div
            dangerouslySetInnerHTML={{
              __html: `${data.body.substring(0, 200)}...`,
            }}
          />
        </div>
        <div className="flex w-full h-full">
          <TagContents data={data.category} />
        </div>
        <div className="flex justify-start">
          <AvatarUser data={avatarData} />
        </div>
        <div className="flex flex-row justify-around">
          <Link to={`/thread/${data.id}`}>
            <IconCount icon="ri-discuss-fill" number={data.totalComments} />
          </Link>
          <IconCount
            onClick={() => handleUpThread(data.id, ownUserId)}
            icon="ri-arrow-up-circle-fill"
            number={data.upVotesBy?.length}
          />
          <IconCount
            onClick={() => handleDownThread(data.id, ownUserId)}
            icon="ri-arrow-down-circle-fill"
            number={data.downVotesBy?.length}
          />
        </div>
      </div>
    </div>
  );
};
Threads.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      body: PropTypes.string,
      category: PropTypes.string,
      createdAt: PropTypes.string,
      ownerId: PropTypes.string,
      upVotesBy: PropTypes.arrayOf,
      downVotesBy: PropTypes.arrayOf,
      totalComments: PropTypes.number,
    })
  ),
};

Threads.defaultProps = {
  data: {
    id: "thread-1",
    title: "Thread Pertama",
    body: "Ini adalah thread pertama",
    category: "General",
    createdAt: "2021-06-21T07:00:00.000Z",
    ownerId: "users-1",
    upVotesBy: [],
    downVotesBy: [],
    totalComments: 0,
  },
};

export default Threads;
