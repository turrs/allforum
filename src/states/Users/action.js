import { apiUsers } from "../../utils/Api";
import { apiAllUser } from "../../utils/Api/Users";

const ActionType = {
  SET_USER_DATA: "SET_USER_DATA",
  SET_ALL_USER_DATA: "SET_ALL_USER_DATA",
  SET_USER_THREAD: "SET_USER_THREAD",
};

function setUserData(userData) {
  return {
    type: ActionType.SET_USER_DATA,
    payload: {
      userData,
    },
  };
}

function setAllUserData(allUserData) {
  return {
    type: ActionType.SET_ALL_USER_DATA,
    payload: {
      allUserData,
    },
  };
}

async function getDataUserLogin(token) {
  try {
    const user = await apiUsers.getOwnUsers(token);
    return user;
  } catch (error) {
    return "invalid";
  }
}

async function getAllDataUser() {
  try {
    const allUser = await apiAllUser.getAllUsers();
    return allUser;
  } catch (error) {
    alert(error.message);
    return error;
  }
}

export {
  getDataUserLogin,
  setUserData,
  ActionType,
  setAllUserData,
  getAllDataUser,
};
