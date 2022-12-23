import { TypeAction } from "./action";

function leaderboardsReducer(leaderboardsData = [], action = {}) {
  switch (action.type) {
    case TypeAction.SET_LEADERBOARDS:
      return action.payload.leaderboardsData;
    default:
      return leaderboardsData;
  }
}

export default leaderboardsReducer;
