import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import InputsWrapper from "./../../../../reuseable/inputsWrapper/inputsWrapper";

import { generateReviewInputs } from "./inputs-list";
import { reviewFormSchema } from "./yup-schema";
import "./review-form.scss";

const ReviewForm = () => {
  const {
    values,
    touched,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useFormik({
    initialValues: {
      rating: "",
      title: "",
      description: "",
    },
    validationSchema: Yup.object(reviewFormSchema),
    onSubmit: values => {
      doSubmit(values);
    },
  });

  const doSubmit = values => {
    console.log(values);
  };

  return (
    <div className="review-form">
      <InputsWrapper
        inputs={generateReviewInputs(values, errors, touched)}
        eventsFunctions={{ onChange: handleChange, onBlur: handleBlur }}
      />

      <button
        className="review-form__submit-btn"
        onClick={handleSubmit}
        type="submit"
      >
        Write a review
      </button>
    </div>
  );
};

export default ReviewForm;
