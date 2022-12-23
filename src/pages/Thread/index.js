import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { useParams } from "react-router-dom";
import { ThreadDetail } from "../../components";
import { Headers } from "../../parts";
import { getAccessToken, setModalLogin } from "../../states/Login/action";
import { getThreadsDetail, setThreadDetail } from "../../states/Thread/action";
import { getDataUserLogin, setUserData } from "../../states/Users/action";

export default function Thread() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const GetDataUserLogin = async () => {
    setLoading(true);
    const dataUser = await getDataUserLogin(getAccessToken());

    if (dataUser === "invalid") {
      dispatch(setModalLogin(true));
    }
    dispatch(setUserData(dataUser));
    setLoading(false);
  };
  const getThread = async (params) => {
    setLoading(true);
    const threadDetail = await getThreadsDetail(params);
    dispatch(setThreadDetail(threadDetail));
    setLoading(false);
  };

  useEffect(() => {
    if (id !== undefined) {
      getThread(id);
    }
    if (getAccessToken() !== null) {
      GetDataUserLogin();
    }
  }, [id]);
  return (
    <div className="flex flex-col justify-center w-full">
      <LoadingBar />
      <div>
        <Headers />
      </div>
      <div>{!loading && <ThreadDetail />}</div>
    </div>
  );
}
