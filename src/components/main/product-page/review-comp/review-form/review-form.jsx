import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import InputsWrapper from "./../../../../reuseable/inputsWrapper/inputsWrapper";

import { generateReviewInputs } from "./inputs-list";
import { reviewFormSchema } from "./yup-schema";
import "./review-form.scss";

const ReviewForm = ({ productId, firebase, userAuthed }) => {
  const [formMessage, setFormMessage] = useState({
    error: false,
    message: null,
  });

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

  useEffect(() => {
    setFormMessage({
      error: false,
      message: null,
    });
  }, [productId]);

  const doSubmit = values => {
    const { rating, title, description } = values;

    firebase
      .getSpecificReview(productId, userAuthed)
      .once("value", async snapshot => {
        //test if the user has yet writen a review
        if (!snapshot.exists()) {
          await firebase.addProductReview(
            productId,
            userAuthed,
            rating,
            title,
            description
          );
          setFormMessage({
            error: false,
            message: "Thank you for adding a review!",
          });
        } else {
          setFormMessage({
            error: true,
            message: "You already added a review!",
          });
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

export default ReviewForm;
