import React, { useState } from "react";
import { motion } from "framer-motion";

import InputsWrapper from "./../../inputsWrapper/inputsWrapper";

import { handleErrors } from "../../../../server/firebase/errorHandling";
import {
  checkErrors,
  useCustomFormik,
  closeFormWithNoBubbling,
} from "../helper-functions";
import { generateSingupInputs } from "../inputs-list";
import "./singup.scss";
import { ReactComponent as Close } from "../../../../assets/img/close.svg";
import Logo from "../../../../assets/img/logo.png";

const SingUp = ({ closeSingup, firebase }) => {
  const [registering, setRegistering] = useState(false);
  const [globalErrors, setGlobalErrors] = useState(null);

  //Formik init
  const {
    handleSubmit,
    touched,
    errors,
    handleChange,
    values,
    handleBlur,
    setErrors,
  } = useCustomFormik("singup", doSubmit);

  async function doSubmit({ email, password }) {
    setGlobalErrors(null);
    try {
      setRegistering(true);
      const data = await firebase.doCreateUserWithEmailAndPassword(
        email,
        password
      );
      //store the json web token in the localstorage
      localStorage.setItem(
        "user-authed",
        JSON.stringify(
          data.user.ya.split(".")[0] + "." + data.user.ya.split(".")[1]
        )
      );
      closeSingup();
    } catch (error) {
      handleErrors("singup", error, setErrors, setGlobalErrors);
    }
    setRegistering(false);
  }

  return (
    <motion.div
      transition={{ duration: 0.6 }}
      exit={{ opacity: 0 }}
      className="singup--background"
      onClick={e => closeFormWithNoBubbling(e, closeSingup)}
      onKeyPress={e => {
        if (e.key === "Enter") handleSubmit();
      }}
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

        {globalErrors && (
          <div style={{ color: "red", transform: "translateY(170%)" }}>
            {globalErrors}
          </div>
        )}

        <InputsWrapper
          inputs={generateSingupInputs(values, errors, touched)}
          eventsFunctions={{ onChange: handleChange, onBlur: handleBlur }}
        />

        <button
          className="singup__btn singup__btn--margin"
          disabled={registering || checkErrors(errors)}
          onClick={handleSubmit}
        >
          {registering ? "REGISTERING" : "REGISTER"}
        </button>
      </motion.div>
    </motion.div>
  );
};

export default SingUp;
