import { ActionType } from "./action";

function usersReducer(usersData = null, action = {}) {
  switch (action.type) {
    case ActionType.SET_USER_DATA:
      return action.payload.userData;
    default:
      return usersData;
  }
}

function allUsersReducer(allUsersData = [], action = {}) {
  switch (action.type) {
    case ActionType.SET_ALL_USER_DATA:
      return action.payload.allUserData;
    default:
      return allUsersData;
  }
}
export { usersReducer, allUsersReducer };
