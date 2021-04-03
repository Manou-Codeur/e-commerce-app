import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import jwtGenerator from "jwt-decode";

import InputsWrapper from "./../../../../reuseable/inputsWrapper/inputsWrapper";

import { generateReviewInputs } from "./inputs-list";
import { reviewFormSchema } from "./yup-schema";
import "./review-form.scss";

const ReviewForm = ({ productId, firebase }) => {
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
    const { rating, title, description } = values;
    //check if the user is authed
    try {
      const jwt = jwtGenerator(JSON.parse(localStorage.getItem("user-authed")));
      firebase.addProductReview(
        productId,
        jwt.user_id,
        rating,
        title,
        description
      );
      //reset all the inputs
      handleReset();
    } catch (error) {
      //if not authed suggest the singIn
      document.querySelector("a#singIn").click();
    }
  };

  return (
    <div className="review-form">
      <InputsWrapper
        inputs={generateReviewInputs(values, errors, touched)}
        eventsFunctions={{
          onChange: handleChange,
          onBlur: handleBlur,
        }}
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
