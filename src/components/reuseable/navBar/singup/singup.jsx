import React from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";

import InputsWrapper from "./../../inputsWrapper/inputsWrapper";

import { singupSchema } from "../yup-schema";
import "./singup.scss";
import { ReactComponent as Close } from "../../../../assets/img/close.svg";
import Logo from "../../../../assets/img/logo.png";

const SingUp = ({ closeSingup }) => {
  //Formik init
  const {
    handleSubmit,
    touched,
    errors,
    handleChange,
    values,
    handleBlur,
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

  const doSubmit = values => {
    alert("submited!");
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
            {
              type: "text",
              label: "Full name",
              value: values.fullName,
              name: "fullName",
              error: errors.fullName,
              touched: touched.fullName,
            },
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
            {
              type: "password",
              label: "Confrim password",
              value: values.confirmPassword,
              name: "confirmPassword",
              error: errors.confirmPassword,
              touched: touched.confirmPassword,
            },
            {
              type: "select",
              label: "Country",
              value: values.country,
              name: "country",
              error: errors.country,
              touched: touched.country,
            },
          ]}
          eventsFunctions={{ onChange: handleChange, onBlur: handleBlur }}
        />

        <button className="singup__btn">REGISTER</button>
      </motion.div>
    </motion.div>
  );
};

export default SingUp;
