import React from "react";
import { motion } from "framer-motion";

import InputsWrapper from "./../../inputsWrapper/inputsWrapper";

import "./singup.scss";
import { ReactComponent as Close } from "../../../../assets/img/close.svg";
import Logo from "../../../../assets/img/logo.png";

const SingUp = ({ closeSingup }) => {
  const closeSinginWithNoBubbling = e => {
    if (e.target.className && e.target.className.includes("background"))
      closeSingup();
  };

  return (
    <motion.div
      transition={{ duration: 0.6 }}
      exit={{ opacity: 0 }}
      className="singup--background"
      onClick={closeSinginWithNoBubbling}
    >
      <motion.div
        className="singup"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ y: 5 }}
        transition={{ duration: 0.5 }}
      >
        <Close className="singup__close-icon" onClick={closeSingup} />

        <img src={Logo} className="singup__logo" />

        <h1>Become a member</h1>

        <InputsWrapper
          inputs={[
            { type: "email", label: "E-mail" },
            { type: "password", label: "Password" },
            { type: "password", label: "Confrim password" },
            { type: "text", label: "Full name" },
            { type: "select", label: "Country" },
          ]}
        />

        <button className="singup__btn">REGISTER</button>
      </motion.div>
    </motion.div>
  );
};

export default SingUp;
