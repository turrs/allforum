import React from "react";
import { useSelector } from "react-redux";
import ListItems from "../../components/ListItems";

export default function Leaderboards() {
  const leaderboards = useSelector((state) => state.leaderboards);
  return (
    <div className="flex flex-col w-64">
      <div className="flex justify-center">
        <h1 className="font-mono text-xl font-semibold">Leaderboards</h1>
      </div>
      {leaderboards?.map((res) => {
        return <ListItems key={res.user.id} data={res} />;
      })}
    </div>
  );
}
