import { apiLeaderboards } from "../../utils/Api";

const TypeAction = {
  SET_LEADERBOARDS: "SET_LEADERBOARDS",
};

function setLeaderboardsData(leaderboardsData) {
  return {
    type: TypeAction.SET_LEADERBOARDS,
    payload: {
      leaderboardsData,
    },
  };
}
async function getLeaderboardsData() {
  try {
    const leaderboardsData = await apiLeaderboards.getLeaderboardsData();

    return leaderboardsData;
  } catch (err) {
    alert(err);
    return err;
  }
}

export { TypeAction, setLeaderboardsData, getLeaderboardsData };
