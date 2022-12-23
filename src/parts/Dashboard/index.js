import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { CreateThread, Profile } from "../../components";
import Threads from "../../components/Threads";

import HastagsTrending from "../HastagsTrending";
import Leaderboards from "../Leaderboards";

const Dashboard = () => {
  const allthreads = useSelector((state) => state.threadsData);

  const profile = useSelector((state) => state?.userData);

  useEffect(() => {}, [allthreads]);
  return (
    <div className="flex w-full h-full justify-between ">
      <div className="flex justify-center flex-col hidden md:block w-4/12 items-center ">
        {profile?.name !== undefined && (
          <Profile name={profile?.name} email={profile?.email} />
        )}
        <div className="pt-10 flex justify-center">
          <HastagsTrending />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex justify-end p-1  items-end w-full ">
          <CreateThread />
        </div>

        <div className="flex w-full flex-col h-full">
          {allthreads?.map((data) => {
            return (
              <div key={data.id}>
                <Threads data={data} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="md:flex  hidden md:block md:w-4/12 justify-center">
        <Leaderboards />
      </div>
    </div>
  );
};

export default Dashboard;
