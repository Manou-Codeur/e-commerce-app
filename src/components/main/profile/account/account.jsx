import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import InputsWrapper from "./../../../reuseable/inputsWrapper/inputsWrapper";

import { generateChangePasswordsInputs } from "./inputsList";
import { changePasswordFormSchema } from "./yupSchema";
import "./account.scss";

const Account = () => {
  const {
    values,
    touched,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useFormik({
    initialValues: {
      password: "",
      newPassword: "",
    },
    validationSchema: Yup.object(changePasswordFormSchema),
    onSubmit: values => {
      doSubmit(values);
    },
  });

  const doSubmit = values => {
    console.log("submit");
  };

  return (
    <div className="account">
      <h2>Account</h2>

      <InputsWrapper
        inputs={generateChangePasswordsInputs(values, errors, touched)}
        eventsFunctions={{
          onChange: handleChange,
          onBlur: handleBlur,
        }}
      />
      <button
        className="account__submit-btn"
        onClick={handleSubmit}
        type="submit"
      >
        Save Changes
      </button>
    </div>
  );
};

export default Account;
