import React from "react";

import ReviewsWrapper from "./reviews-wrapper/reviews-wrapper";
import { useFetch } from "./hooks";

import "./reviews-area.scss";

const ReviewsArea = ({ productId, firebase }) => {
  const { reviews, errors } = useFetch(firebase, productId);

  return (
    <div className="reviews-area">
      <h1>Reviews</h1>

      <ReviewsWrapper reviews={reviews} errors={errors} />
    </div>
  );
};

export default ReviewsArea;
