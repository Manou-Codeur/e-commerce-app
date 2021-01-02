import React, { useState } from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";

import InputsWrapper from "../../inputsWrapper/inputsWrapper";

import { handleErrors } from "../../../../server/firebase/errorHandling";
import { checkErrors } from "../helper-functions";
import { generateSinginInputs } from "../inputs-list";
import { singinSchema } from "../yup-schema";
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
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object(singinSchema),
    onSubmit: values => {
      doSubmit(values);
    },
  });

  const doSubmit = async ({ email, password }) => {
    setGlobalErrors(null);

    try {
      setLogging(true);
      await firebase.doSignInWithEmailAndPassword(email, password);
      localStorage.setItem("user-authed", JSON.stringify(true));
      closeLogin();
    } catch (error) {
      handleErrors("singin", error, setErrors, setGlobalErrors);
    }

    setLogging(false);
  };

  const closeLoginWithNoBubbling = ({ target }) => {
    if (target.nodeName === "DIV" && target.className === "login--background")
      closeLogin();
  };

  return (
    <motion.div
      className="login--background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      exit={{ opacity: 0 }}
      onClick={closeLoginWithNoBubbling}
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

        <img src={Logo} className="login__logo" />

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
          disabled={logging || checkErrors(errors)}
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
