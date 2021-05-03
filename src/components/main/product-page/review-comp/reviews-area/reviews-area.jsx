import React, { useEffect, useState } from "react";

import ReviewsWrapper from "./reviews-wrapper/reviews-wrapper";

import "./reviews-area.scss";

const ReviewsArea = ({ productId, firebase }) => {
  const [reviews, setReviews] = useState(null);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    fetchReviews();

    //cleanup firebase subscription once the component get unmounted
    return () => {
      firebase.getProductReviews(productId).off();
    };
  }, [productId]);

  useEffect(() => {
    //handle unexpected errors; if the user is still seeying the "loading" msg for 10 sec
    const timer = setTimeout(() => {
      if (!reviews) {
        setErrors(true);
      }
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  });

  const fetchReviews = () => {
    const data = firebase.getProductReviews(productId);
    data.on("value", snapshot => {
      const reviewsObj = snapshot.val();
      if (reviewsObj) setReviews(Object.values(reviewsObj));
      else setReviews([]);
    });
  };

  return (
    <div className="reviews-area">
      <h1>Reviews</h1>

      <ReviewsWrapper reviews={reviews} errors={errors} />
    </div>
  );
};

export default ReviewsArea;
