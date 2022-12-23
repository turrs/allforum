import { apiRegister } from "../../utils/Api";

const TypeAction = {
  SET_MODAL_REGISTER: "SET_MODAL_REGISTER",
  GET_MODAL_REGISTER: "GET_MODAL_REGISTER",
};
function setModalRegister(modalRegister) {
  return {
    type: TypeAction.SET_MODAL_REGISTER,
    payload: { modalRegister },
  };
}
function getModalRegister(modalRegister) {
  return {
    type: TypeAction.SET_MODAL_REGISTER,
    payload: { modalRegister },
  };
}
function asyncRegisterUser(email, name, password) {
  return async () => {
    try {
      await apiRegister.post(email, name, password);
    } catch (error) {
      alert(error.message);
    }
  };
}
export { asyncRegisterUser, setModalRegister, getModalRegister, TypeAction };
