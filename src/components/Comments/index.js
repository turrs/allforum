import React from "react";
import PropsTypes from "prop-types";
import { useDispatch } from "react-redux";
import AvatarUser from "../AvatarUser";
import IconCount from "../IconCount";
import { ConvertTime } from "../../utils";
import { getAccessToken } from "../../states/Login/action";
import { asyncDownComments, asyncUpComments } from "../../states/Thread/action";

const Comments = ({ data, threads }) => {
  const ownBareer = getAccessToken();
  const dispatch = useDispatch();
  const handleUp = (idThread, idComments, userId) => {
    dispatch(asyncUpComments(idThread, idComments, userId));
  };
  const handleDown = (idThread, idComments, userId) => {
    dispatch(asyncDownComments(idThread, idComments, userId));
  };
  return (
    <div className="flex flex-col justify-center md:max-w-[400px] md:min-w-[580px] max-w-[700px]">
      <div>
        <AvatarUser data={data.owner} />
      </div>
      <div className="flex flex-col justify-center">
        <div>
          <p
            dangerouslySetInnerHTML={{
              __html: data.content,
            }}
          />
        </div>
        <div className="">
          <p className="text-xs text-slate-300">
            {ConvertTime(data.createdAt)}
          </p>
        </div>
        <div className="flex flex-row justify-around">
          <IconCount
            onClick={() => handleUp(threads?.id, data?.id, ownBareer)}
            icon="ri-arrow-up-circle-fill"
            number={data.upVotesBy.length}
          />
          <IconCount
            onClick={() => handleDown(threads?.id, data?.id, ownBareer)}
            icon="ri-arrow-down-circle-fill"
            number={data.downVotesBy.length}
          />
        </div>
      </div>
    </div>
  );
};

Comments.propTypes = {
  data: PropsTypes.objectOf(
    PropsTypes.shape([
      {
        id: PropsTypes.string,
        content: PropsTypes.string,
        createAt: PropsTypes.string,
        owner: PropsTypes.shape({
          id: PropsTypes.string,
          name: PropsTypes.string,
          avatar: PropsTypes.string,
        }),
        upVotesBy: PropsTypes.arrayOf,
        downVotesBy: PropsTypes.string,
      },
    ])
  ),
  threads: PropsTypes.objectOf(
    PropsTypes.shape({
      id: PropsTypes.string,
      title: PropsTypes.string,
      body: PropsTypes.string,
      category: PropsTypes.string,
      createAt: PropsTypes.string,
      ownerId: PropsTypes.string,
      upVotesBy: PropsTypes.arrayOf,
      downVotesBy: PropsTypes.arrayOf,
      totalComments: PropsTypes.number,
    })
  ),
};

Comments.defaultProps = {
  data: [
    {
      id: "comment-1",
      content: "Ini adalah komentar pertama",
      createdAt: "2021-06-21T07:00:00.000Z",
      owner: {
        id: "users-1",
        name: "John Doe",
        avatar: "https://generated-image-url.jpg",
      },
      upVotesBy: [],
      downVotesBy: [],
    },
  ],
  threads: {
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

export default Comments;
