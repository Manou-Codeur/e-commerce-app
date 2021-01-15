import React from "react";

import ReviewsWrapper from "./reviews-wrapper/reviews-wrapper";
import ReviewForm from "./review-form/review-form";

import "./review-comp.scss";

const ReviewComp = () => {
  return (
    <div className="review-comp">
      <ReviewsWrapper />
      <ReviewForm />
    </div>
  );
};

export default ReviewComp;
