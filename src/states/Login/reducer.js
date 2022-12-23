import { TypeAction } from "./action";

function loginReducer() {}
function modalLoginReducer(modalLogin = false, action = {}) {
  switch (action.type) {
    case TypeAction.SET_MODAL_LOGIN:
      return action.payload.modalLogin;
    case TypeAction.GET_MODAL_LOGIN:
      return action.payload.modalLogin;
    default:
      return modalLogin;
  }
}

export { modalLoginReducer, loginReducer };
