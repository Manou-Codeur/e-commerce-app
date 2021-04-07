import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import InputsWrapper from "./../../../../reuseable/inputsWrapper/inputsWrapper";

import { generateReviewInputs } from "./inputs-list";
import { reviewFormSchema } from "./yup-schema";
import "./review-form.scss";

const ReviewForm = ({ productId, firebase, userAuthed }) => {
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

    firebase.getSpecificReview(productId, userAuthed).on("value", snapshot => {
      //test if the user has yet writen a review
      if (!snapshot.exists()) {
        firebase.addProductReview(
          productId,
          userAuthed,
          rating,
          title,
          description
        );
      }
    });

    //reset all the inputs
    handleReset();
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
        disabled={!userAuthed && true}
      >
        {userAuthed ? "Write a review" : "Sing in to write a review"}
      </button>
    </div>
  );
};

export default ReviewForm;
