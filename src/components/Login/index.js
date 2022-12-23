import React from "react";
import PropsTypes from "prop-types";
import { useDispatch } from "react-redux";
import useInput from "../../hooks/useInput";
import { asyncLoginUser, setModalLogin } from "../../states/Login/action";
import Button from "../Button";
import InputText from "../InputText";

const Login = ({ modalLogin }) => {
  const dispatch = useDispatch();
  const handleLogin = (email, password) => {

    dispatch(asyncLoginUser(email, password));
    dispatch(setModalLogin(!modalLogin));
  };
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  return (
    <div className="flex justify-center items-center w-full h-full bg-slate-100 ">
      <div className="flex flex-col justify-center items-center bg-white p-2 rounded-md bg-slate-300 ">
        <div className="flex justfy-center">
          <p className="font-mono font-bold text-xl">Login</p>
        </div>
        <div className="p-2">
          <InputText type="username" onChange={setEmail} />
        </div>
        <div className="p-2">
          <InputText type="password" onChange={setPassword} />
        </div>
        <div>
          <Button onClick={() => handleLogin(email, password)} />
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  modalLogin: PropsTypes.bool,
};

Login.defaultProps = {
  modalLogin: false,
};

export default Login;
