import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import InputsWrapper from "./../../../../../reuseable/inputsWrapper/inputsWrapper";

import { generateLine1And2, generateLine3 } from "./inputsList";
import { checkoutInputsSchema } from "./yupShema";
import "./form.scss";

const Form = () => {
  const {
    values,
    touched,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useFormik({
    initialValues: {
      cardNumber: "",
      holderName: "",
      expirationDate: "",
      year: "",
      cvv: "",
    },
    validationSchema: Yup.object(checkoutInputsSchema),
    onSubmit: values => {
      doSubmit(values);
    },
  });

  const doSubmit = values => {
    console.log("submit!!");
  };

  return (
    <div className="form">
      <div className="form__line">
        <InputsWrapper
          inputs={generateLine1And2(values, errors, touched)}
          eventsFunctions={{ onChange: handleChange, onBlur: handleBlur }}
        />
      </div>

      <div className="form__line">
        <InputsWrapper
          inputs={generateLine3(values, errors, touched)}
          eventsFunctions={{ onChange: handleChange, onBlur: handleBlur }}
        />
      </div>

      <button className="form__submit">Submit</button>
    </div>
  );
};

export default Form;
