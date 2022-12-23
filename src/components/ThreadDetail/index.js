import React from "react";
import { useSelector } from "react-redux";
import { ConvertTime } from "../../utils";
import AvatarUser from "../AvatarUser";
import Comments from "../Comments";
import CreateComments from "../CreateComments";
import TagContents from "../TagContents";

const ThreadDetail = () => {
  const dataDetail = useSelector((state) => state.threadDetail);

  return (
    <div>
      <div className="flex justify-center ">
        <div className="flex flex-col w-[800px] max-w-xl">
          <div>
            <AvatarUser data={dataDetail.owner} />
          </div>
          <div className="flex  ">
            <p className="text-xs text-slate-300 ">
              {ConvertTime(dataDetail.createdAt)}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col  justify-center ">
        <div className="flex justify-center ">
          <p className="font-mono font-bold max-w-xl text-xl text-black">
            {dataDetail.title}
          </p>
        </div>

        <div className="flex flex-row justify-center">
          <TagContents data={dataDetail.category} />
        </div>
        <div className="flex justify-center">
          <div className="max-w-xl">
            <p
              dangerouslySetInnerHTML={{
                __html: dataDetail.body,
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center ">
        {dataDetail?.comments?.map((data) => {
          return (
            <div key={data.id}>
              <Comments data={data} threads={dataDetail} />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center w-full">
        <CreateComments threadId={dataDetail.id} />
      </div>
    </div>
  );
};

export default ThreadDetail;
