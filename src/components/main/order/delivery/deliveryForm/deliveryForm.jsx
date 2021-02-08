import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import InputsWrapper from "./../../../../reuseable/inputsWrapper/inputsWrapper";

import {
  generateLine1,
  generateLine2,
  generateLine3,
  generateLine4,
} from "./inputsLists";
import { deliveryInputsSchema } from "./yupSchema";
import "./deliveryForm.scss";

const DeliveryForm = () => {
  const {
    values,
    touched,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      country: "",
      city: "",
      zipCode: "",
      address: "",
    },
    validationSchema: Yup.object(deliveryInputsSchema),
    onSubmit: values => {
      doSubmit(values);
    },
  });

  const doSubmit = values => {
    console.log("submit!!");
  };

  return (
    <div className="delivery-form">
      <div className="delivery-form__line">
        <InputsWrapper
          inputs={generateLine1(values, errors, touched)}
          eventsFunctions={{ onChange: handleChange, onBlur: handleBlur }}
        />
      </div>
      <div className="delivery-form__line">
        <InputsWrapper
          inputs={generateLine2(values, errors, touched)}
          eventsFunctions={{ onChange: handleChange, onBlur: handleBlur }}
        />
      </div>
      <div className="delivery-form__line">
        <InputsWrapper
          inputs={generateLine3(values, errors, touched)}
          eventsFunctions={{ onChange: handleChange, onBlur: handleBlur }}
        />
      </div>
      <div className="delivery-form__line">
        <InputsWrapper
          inputs={generateLine4(values, errors, touched)}
          eventsFunctions={{ onChange: handleChange, onBlur: handleBlur }}
        />
      </div>

      <button className="delivery-form__submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default DeliveryForm;
