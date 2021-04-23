import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import InputsWrapper from "./../../../reuseable/inputsWrapper/inputsWrapper";

import FirebaseContext from "./../../../../server/firebase/firebaseContext";
import { generateChangePasswordsInputs } from "./inputsList";
import { changePasswordFormSchema } from "./yupSchema";
import "./account.scss";

const Account = () => {
  const [formMessage, setFormMessage] = useState({
    error: false,
    message: null,
  });
  const [logging, setLogging] = useState(false);
  const { firebase } = useContext(FirebaseContext);

  const {
    values,
    touched,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
    handleReset,
  } = useFormik({
    initialValues: {
      newPassword: "",
    },
    validationSchema: Yup.object(changePasswordFormSchema),
    onSubmit: values => {
      doSubmit(values);
    },
  });

  const doSubmit = async ({ newPassword }) => {
    try {
      setLogging(true);
      await firebase.doUpdatePassword(newPassword);
      setFormMessage({
        error: false,
        message: "Password has been reseted successfully!",
      });
      //reset the input
      handleReset();
    } catch (error) {
      setFormMessage({
        error: true,
        message: "There is an unexpected error, please try again!",
      });
    }
    setLogging(false);
  };

  const handleOnEnter = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="account" onKeyPress={handleOnEnter}>
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
        disabled={Object.keys(errors).length > 0}
      >
        {logging ? "Saving Changes..." : "Save Changes"}
      </button>

      {formMessage.message && (
        <h3
          style={{
            color: formMessage.error ? "red" : "green",
            marginTop: ".5em",
          }}
        >
          {formMessage.message}
        </h3>
      )}
    </div>
  );
};

export default Account;
