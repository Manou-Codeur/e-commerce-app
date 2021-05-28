import React from "react";

import Review from "./review/review";

import "./reviews-wrapper.scss";

const ReviewsWrapper = ({ reviews, errors }) => {
  if (errors)
    return <span>There's an unexpected error, please relaod the page!</span>;
  if (!reviews) return <span>Loading reviews...</span>;

  return (
    <div className="reviews-wrapper">
      {reviews.length > 0 ? (
        reviews.map(review => (
          <Review data={review} key={new Date().getMilliseconds()} />
        ))
      ) : (
        <span>There's no reviews.</span>
      )}
    </div>
  );
};

export default ReviewsWrapper;
