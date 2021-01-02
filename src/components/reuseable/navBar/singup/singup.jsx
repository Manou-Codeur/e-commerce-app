import React, { useState } from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";

import InputsWrapper from "./../../inputsWrapper/inputsWrapper";

import { checkErrors } from "../helper-functions";
import { generateSingupInputs } from "../inputs-list";
import { singupSchema } from "../yup-schema";
import "./singup.scss";
import { ReactComponent as Close } from "../../../../assets/img/close.svg";
import Logo from "../../../../assets/img/logo.png";

const SingUp = ({ closeSingup, firebase }) => {
  const [registering, setRegistering] = useState(false);
  const [generalErrors, setGeneralErrors] = useState(null);

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
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      country: "",
    },
    validationSchema: Yup.object(singupSchema),
    onSubmit: values => {
      doSubmit(values);
    },
  });

  const doSubmit = async ({ email, password }) => {
    setGeneralErrors(null);

    try {
      setRegistering(true);
      await firebase.doCreateUserWithEmailAndPassword(email, password);
      localStorage.setItem("user-authed", JSON.stringify(true));
      closeSingup();
    } catch (error) {
      if (error.code.includes("email-already-in-use")) {
        setErrors({ email: "Email is already taken!" });
      } else {
        setGeneralErrors("There is an unexpected error, try again please!");
      }
    }

    setRegistering(false);
  };

  const closeSinginWithNoBubbling = ({ target }) => {
    if (target.nodeName === "DIV" && target.className === "singup--background")
      closeSingup();
  };

  return (
    <motion.div
      transition={{ duration: 0.6 }}
      exit={{ opacity: 0 }}
      className="singup--background"
      onClick={closeSinginWithNoBubbling}
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

        <InputsWrapper
          inputs={generateSingupInputs(values, errors, touched)}
          eventsFunctions={{ onChange: handleChange, onBlur: handleBlur }}
        />

        {generalErrors && <div style={{ color: "red" }}>{generalErrors}</div>}

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
