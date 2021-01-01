import React, { useState } from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";

import InputsWrapper from "../../inputsWrapper/inputsWrapper";

import { singinSchema } from "../yup-schema";
import "./singin.scss";
import { ReactComponent as Close } from "../../../../assets/img/close.svg";
import Logo from "../../../../assets/img/logo.png";

const Singin = ({ closeLogin, openSingUp, firebase, openPasswordReset }) => {
  const [logging, setLogging] = useState(false);

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
    try {
      setLogging(true);
      await firebase.doSignInWithEmailAndPassword(email, password);
      localStorage.setItem("user-authed", JSON.stringify(true));
      closeLogin();
    } catch (error) {
      if (error.code.includes("user-not-found")) {
        setErrors({ email: " ", password: "Invalid e-mail or password." });
      } else {
        setErrors({ email: "There is an unexpected error, try again please!" });
      }
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

        <InputsWrapper
          inputs={[
            {
              type: "email",
              label: "E-mail",
              value: values.email,
              name: "email",
              error: errors.email,
              touched: touched.email,
            },
            {
              type: "password",
              label: "Password",
              value: values.password,
              name: "password",
              error: errors.password,
              touched: touched.password,
            },
          ]}
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
          disabled={logging || errors.email || errors.password}
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
