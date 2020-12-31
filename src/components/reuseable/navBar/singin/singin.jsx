import React from "react";
import { motion } from "framer-motion";

import InputsWrapper from "../../inputsWrapper/inputsWrapper";

import "./singin.scss";
import { ReactComponent as Close } from "../../../../assets/img/close.svg";
import Logo from "../../../../assets/img/logo.png";

const singin = ({ closeLogin, openSingUp }) => {
  return (
    <motion.div
      className="login--background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      exit={{ opacity: 0 }}
      onClick={closeLogin}
    >
      <motion.div
        className="login"
        initial={{ y: 15 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ y: 15 }}
      >
        <Close className="login__close-icon" onClick={closeLogin} />

        <img src={Logo} className="login__logo" />

        <h1>Log in you account</h1>

        <InputsWrapper
          inputs={[
            { type: "email", label: "E-mail" },
            { type: "password", label: "Password" },
          ]}
        />

        <button className="login__btn">LOGIN</button>

        <p className="login__goToRegister">
          You are not member yet?
          <span
            onClick={() => {
              closeLogin();
              openSingUp();
            }}
          >
            Register now.
          </span>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default singin;
