import React from "react";
import PropsTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Button, InputText } from "../../components";
import useInput from "../../hooks/useInput";
import {
  asyncRegisterUser,
  setModalRegister,
} from "../../states/Register/action";

const Register = ({ modalRegister }) => {
  const dispatch = useDispatch();
  const handleRegister = (email, name, password) => {
    dispatch(asyncRegisterUser(email, name, password));
    dispatch(setModalRegister(!modalRegister));
  };
  const [email, onEmailChange] = useInput("");
  const [name, onNameChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  return (
    <div className="flex flex-col justify-center items-center bg-white p-2 rounded-md bg-slate-300 ">
      <div className="flex justfy-center">
        <p className="font-mono font-bold text-xl">Register</p>
      </div>
      <div className="p-2">
        <InputText type="username" onChange={onEmailChange} />
      </div>
      <div className="p-2">
        <InputText type="name" onChange={onNameChange} />
      </div>
      <div className="p-2">
        <InputText type="password" onChange={onPasswordChange} />
      </div>
      <div>
        <Button onClick={() => handleRegister(email, name, password)} />
      </div>
    </div>
  );
};
Register.propTypes = {
  modalRegister: PropsTypes.bool,
};

Register.defaultProps = {
  modalRegister: false,
};
export default Register;
