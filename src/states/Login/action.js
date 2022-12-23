import { apiLogin } from "../../utils/Api";
import { getDataUserLogin, setUserData } from "../Users/action";

const TypeAction = {
  SET_MODAL_LOGIN: "SET_MODAL_LOGIN",
  GET_MODAL_LOGIN: "GET_MODAL_LOGIN",
};

function saveAccessToken(token) {
  localStorage.setItem("accessToken", token);
}

function getAccessToken() {
  return localStorage.getItem("accessToken");
}
async function _fetchWithAuth(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
}
function setModalLogin(modalLogin) {
  return {
    type: TypeAction.SET_MODAL_LOGIN,
    payload: { modalLogin },
  };
}
function getModalLogin(modalLogin) {
  return {
    type: TypeAction.GET_MODAL_LOGIN,
    payload: { modalLogin },
  };
}

function asyncLoginUser(email, password) {
  return async (dispatch) => {
    try {
      const token = await apiLogin.post(email, password);
      saveAccessToken(token);
      const userData = await getDataUserLogin(getAccessToken());
      dispatch(setUserData(userData));
    } catch (error) {
      alert(error);
    }
  };
}

export {
  asyncLoginUser,
  saveAccessToken,
  getAccessToken,
  TypeAction,
  setModalLogin,
  getModalLogin,
  _fetchWithAuth,
};
