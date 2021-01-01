import React from "react";
import { motion } from "framer-motion";

import InputsWrapper from "../../../inputsWrapper/inputsWrapper";

import { isValidEmail } from "./regex";
import "./passwordReset.scss";
import { ReactComponent as Close } from "../../../../../assets/img/close.svg";
import Logo from "../../../../../assets/img/logo.png";

const PasswordReset = ({ closePasswordReset }) => {
  const [email, setEmail] = React.useState({
    value: "",
    errors: null,
  });

  const onBlur = () => {
    if (email.value === "")
      setEmail({ ...email, errors: "E-mail is required!" });
    else if (!isValidEmail(email.value)) {
      setEmail({ ...email, errors: "E-mail is not valid!" });
    } else {
      setEmail({ ...email, errors: null });
    }
  };

  const onChange = ({ target }) => {
    setEmail({ ...email, value: target.value });
    if (email.value !== "" || isValidEmail(email.value)) {
      setEmail({ ...email, errors: null });
    }
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

        <InputsWrapper
          inputs={[
            {
              type: "email",
              label: "E-mail",
              value: email.value,
              name: "email",
              error: email.errors,
            },
          ]}
          eventsFunctions={{
            onChange,
            onBlur,
          }}
        />

        <button
          className="password-reset__btn password-reset__btn--margin"
          type="submit"
        >
          RESET
        </button>
      </motion.div>
    </motion.div>
  );
};

export default PasswordReset;
