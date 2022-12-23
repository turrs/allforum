import React from "react";
import PropsTypes from "prop-types";
import { useDispatch } from "react-redux";
import useInput from "../../hooks/useInput";
import Button from "../Button";

import { asyncCreateComment } from "../../states/Thread/action";

const CreateComments = ({ threadId }) => {
  const [commentText, setCommentText] = useInput("");
  const dispatch = useDispatch();
  const handleComment = (idThread, content) => {
    dispatch(asyncCreateComment(idThread, content));
  };
  return (
    <div className="flex flex-col md:max-w-[400px]  justify-center md:min-w-[580px] max-w-[700px] pt-5">
      <div>
        <textarea
          value={commentText}
          onChange={setCommentText}
          className="border-2 border-cyan-200 hover:border-cyan-800 w-full p-2 hover:border-cyan-300"
          placeholder="create comments"
        />
      </div>
      <div className="flex justify-end pt-2 ">
        <Button
          name="Comment"
          onClick={() => handleComment(commentText, threadId)}
        />
      </div>
    </div>
  );
};

CreateComments.propTypes = {
  threadId: PropsTypes.string,
};
CreateComments.defaultProps = {
  threadId: "",
};
export default CreateComments;
