import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { Dashboard, Headers } from "../../parts";
import { setContent } from "../../states/Content/action";
import {
  getLeaderboardsData,
  setLeaderboardsData,
} from "../../states/Leaderboards/action";
import { getAccessToken, setModalLogin } from "../../states/Login/action";
import { getAllThreadsData, setThreadsData } from "../../states/Thread/action";
import {
  getAllDataUser,
  getDataUserLogin,
  setAllUserData,
  setUserData,
} from "../../states/Users/action";

export default function MainApp() {
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
  const GetDataAllThreads = async () => {
    setLoading(true);
    const dataThreads = await getAllThreadsData();
    dispatch(setThreadsData(dataThreads));
    dispatch(setContent(dataThreads));
    setLoading(false);
  };
  const GetDataLeaderboards = async () => {
    setLoading(true);
    const leaderboards = await getLeaderboardsData();
    dispatch(setLeaderboardsData(leaderboards));
    setLoading(false);
  };

  const GetAllDataUsers = async () => {
    setLoading(true);
    const allUserData = await getAllDataUser();
    dispatch(setAllUserData(allUserData));
    setLoading(false);
  };
  useEffect(() => {
    if (getAccessToken() !== null) {
      GetDataUserLogin();
    }
    GetDataLeaderboards();
    GetDataAllThreads();
    GetAllDataUsers();
  }, []);
  return (
    <div className="flex flex-col w-full h-full">
      <LoadingBar />
      <div>
        <Headers />
      </div>
      <div className="flex justify-center">{!loading && <Dashboard />}</div>
    </div>
  );
}
