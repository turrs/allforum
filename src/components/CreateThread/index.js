import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useInput from "../../hooks/useInput";
import { getAccessToken } from "../../states/Login/action";
import { asyncCreateData } from "../../states/Thread/action";
import Button from "../Button";
import InputText from "../InputText";

const CreateThread = () => {
  const [showModalCreateThread, setShowModalCreateThread] = useState();
  const [title, setTitle] = useInput("");
  const [category, setCategory] = useInput("");
  const [content, setContent] = useState("");
  const tokenUser = getAccessToken();
  const dispatch = useDispatch();
  const handleCreateThread = (
    titleSubmit,
    categorySubmit,
    contentSubmit,
    token
  ) => {
    const threadData = {
      title: titleSubmit,
      body: contentSubmit,
      category: categorySubmit,
    };
    dispatch(asyncCreateData(threadData, token));
    setShowModalCreateThread(false);
  };
  return (
    <div>
      <div>
        <Button
          name="Create Thread"
          onClick={() => setShowModalCreateThread(!showModalCreateThread)}
        />
      </div>
      {showModalCreateThread && (
        <div className="fixed inset-0 z-10 overflow-y-auto shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ">
          <div
            className="fixed inset-0 w-full h-full bg-black opacity-40"
            role="button"
            tabIndex="0"
          >
            <p>we</p>
          </div>
          <div className="flex   -px-2  justify-center py-8">
            <div className="relative w-full max-w-lg p-6 mx-auto bg-white rounded-md shadow-lg">
              <div className="mt-3 sm:flex w-full">
                <div className="mt-2 text-center sm:ml-1 sm:text-left w-full">
                  <div className="flex flex-col w-full">
                    <div className="flex flex-row justify-end w-full py-2">
                      <div
                        className="bg-slate-100 rounded-sm w-[40px] h-[40px] flex justify-center items-center hover:bg-slate-200 cursor-pointer"
                        onClick={() =>
                          setShowModalCreateThread(!showModalCreateThread)
                        }
                        onKeyPress={() =>
                          setShowModalCreateThread(!showModalCreateThread)
                        }
                        role="button"
                        tabIndex="0"
                      >
                        <i className="ri-close-circle-line" />
                      </div>
                    </div>
                    <div className="flex w-full h-full  flex-col">
                      <div className="w-full ">
                        <InputText type="Title" onChange={setTitle} />
                      </div>
                      <div>
                        <InputText type="category" onChange={setCategory} />
                      </div>
                      <div className="flex flex-col w-full h-full">
                        <div>
                          <p className="font-mono font-semibold text-md">
                            Content
                          </p>
                        </div>
                        <div>
                          <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full h-[620px] p-2"
                          />
                        </div>
                      </div>
                      <div className="flex justify-end w-32">
                        <Button
                          name="Create Thread"
                          onClick={() =>
                            handleCreateThread(
                              title,
                              category,
                              content,
                              tokenUser
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateThread;
