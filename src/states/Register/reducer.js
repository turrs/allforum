import { TypeAction } from "./action";

function modalRegisterReducer(modalRegister = false, action = {}) {
  switch (action.type) {
    case TypeAction.SET_MODAL_REGISTER:
      return action.payload.modalRegister;
    case TypeAction.GET_MODAL_REGISTER:
      return action.payload.modalRegister;
    default:
      return modalRegister;
  }
}

export { modalRegisterReducer };
