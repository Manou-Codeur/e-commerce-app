import React, { useState } from "react";
import { motion } from "framer-motion";

import InputsWrapper from "../../inputsWrapper/inputsWrapper";

import { handleErrors } from "../../../../server/firebase/errorHandling";
import { useCustomFormik, closeFormWithNoBubbling } from "../helper-functions";
import { generateSinginInputs } from "../inputs-list";
import "./singin.scss";
import { ReactComponent as Close } from "../../../../assets/img/close.svg";
import Logo from "../../../../assets/img/logo.png";

const Singin = ({ closeLogin, openSingUp, firebase, openPasswordReset }) => {
  const [logging, setLogging] = useState(false);
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
  } = useCustomFormik("singin", doSubmit);

  async function doSubmit({ email, password }) {
    setGlobalErrors(null);
    try {
      setLogging(true);
      const data = await firebase.doSignInWithEmailAndPassword(email, password);
      //store the json web token in the localstorage
      localStorage.setItem(
        "user-authed",
        JSON.stringify(
          data.user.ya.split(".")[0] + "." + data.user.ya.split(".")[1]
        )
      );
      closeLogin();
      window.location.reload();
    } catch (error) {
      handleErrors("singin", error, setErrors, setGlobalErrors);
    }
    setLogging(false);
  }

  return (
    <motion.div
      className="login--background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      exit={{ opacity: 0 }}
      onClick={e => closeFormWithNoBubbling(e, closeLogin)}
      onKeyPress={e => {
        if (e.key === "Enter") handleSubmit();
      }}
    >
      <motion.div
        className="login"
        initial={{ y: 15 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ y: 15 }}
      >
        <Close className="login__close-icon" onClick={closeLogin} />

        <img src={Logo} className="login__logo" alt="logo" />

        <h1>Log in your account</h1>

        {globalErrors && (
          <div style={{ color: "red", transform: "translateY(170%)" }}>
            {globalErrors}
          </div>
        )}

        <InputsWrapper
          inputs={generateSinginInputs(values, errors, touched)}
          eventsFunctions={{ onChange: handleChange, onBlur: handleBlur }}
        />

        <span
          className="login__forgetPassword"
          onClick={() => {
            closeLogin();
            openPasswordReset();
          }}
        >
          Forget password ?
        </span>

        <button
          className="login__btn"
          type="submit"
          onClick={handleSubmit}
          disabled={logging || Object.keys(errors).length > 0}
        >
          {logging ? "LOGGING..." : "LOGIN"}
        </button>

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

export default Singin;
