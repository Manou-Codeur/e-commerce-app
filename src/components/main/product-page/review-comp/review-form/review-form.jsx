import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import jwtGenerator from "jwt-decode";

import InputsWrapper from "./../../../../reuseable/inputsWrapper/inputsWrapper";
import FirebaseContext from "../../../../../server/firebase/firebaseContext";

import { generateReviewInputs } from "./inputs-list";
import { reviewFormSchema } from "./yup-schema";
import "./review-form.scss";

const ReviewForm = () => {
  const { firebase } = useContext(FirebaseContext);

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

  const doSubmit = async values => {
    //test if the user is authed
    // try {
    //   const jwt = jwtGenerator(JSON.parse(localStorage.getItem("user-authed")));
    //   console.log("add the comment to database");

    // } catch (error) {
    //   console.log("Open the singIn box");
    // }
    const data = await firebase.addProductReview(
      2,
      12345468,
      values.rating,
      values.title,
      values.description
    );
    console.log(data);
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
