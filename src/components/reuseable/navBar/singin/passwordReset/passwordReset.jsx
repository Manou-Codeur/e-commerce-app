import React, { useState } from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";

import InputsWrapper from "../../../inputsWrapper/inputsWrapper";

import { handleErrors } from "./../../../../../server/firebase/errorHandling";
import { generateResetPasswordInputs } from "../../inputs-list";
import { resetPasswordSchema } from "../../yup-schema";
import "./passwordReset.scss";
import { ReactComponent as Close } from "../../../../../assets/img/close.svg";
import Logo from "../../../../../assets/img/logo.png";

const PasswordReset = ({ closePasswordReset, firebase }) => {
  const [resetting, setResetting] = useState(false);
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
    },
    validationSchema: Yup.object(resetPasswordSchema),
    onSubmit: values => {
      doResetPassword(values.email);
    },
  });

  const doResetPassword = async email => {
    setGlobalErrors(null);

    try {
      setResetting(true);
      await firebase.doResetPassword(email);
      closePasswordReset();
    } catch (error) {
      handleErrors("resetPassword", error, setErrors, setGlobalErrors);
    }

    setResetting(false);
  };

  return (
    <motion.div
      className="password-reset--background"
      transition={{ duration: 0.6 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="password-reset"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ y: 5 }}
      >
        <Close
          className="password-reset__close-icon"
          onClick={closePasswordReset}
        />

        <img src={Logo} className="password-reset__logo" />

        <h1>Reset your password</h1>

        {globalErrors && (
          <div style={{ color: "red", transform: "translateY(170%)" }}>
            {globalErrors}
          </div>
        )}

        <InputsWrapper
          inputs={generateResetPasswordInputs(values, errors, touched)}
          eventsFunctions={{
            onChange: handleChange,
            onBlur: handleBlur,
          }}
        />

        <button
          className="password-reset__btn password-reset__btn--margin"
          type="submit"
          onClick={handleSubmit}
          disabled={resetting || errors.email}
        >
          {resetting ? "RESETTING..." : "RESET"}
        </button>
      </motion.div>
    </motion.div>
  );
};

export default PasswordReset;
