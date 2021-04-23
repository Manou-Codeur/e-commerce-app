import React, { useEffect, useState } from "react";

import "./reviews-wrapper.scss";
import { ReactComponent as Star } from "../../../../../assets/img/star.svg";

const ReviewsWrapper = ({ productId, firebase }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();

    //cleanup firebase subscription once the component get unmounted
    return () => {
      firebase.getProductReviews(productId).off();
    };
  }, [productId]);

  useEffect(() => {
    //This is usefull to handle unexpected errors
    const timeOut = setTimeout(() => {
      if (Array.isArray(reviews) && reviews.length === 0) {
        console.log(reviews);
        setReviews("There's an unexpected error, reload the page please!");
      }
    }, 10000);

    return () => {
      clearTimeout(timeOut);
    };
  });

  const fetchReviews = () => {
    const data = firebase.getProductReviews(productId);
    data.on("value", snapshot => {
      const reviewsObj = snapshot.val();
      if (reviewsObj) setReviews(Object.values(reviewsObj));
      else setReviews("There is no reviews!");
    });
  };

  const starsInArray = rating => {
    const arr = [];
    for (let i = 1; i <= rating; i++) {
      arr.push(i);
    }
    return arr;
  };

  if (!Array.isArray(reviews))
    return <h2 className="reviews-wrapper">{reviews}</h2>;
  return (
    <div className="reviews-wrapper">
      <h1>Reviwes</h1>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <div className="reviews-wrapper__item" key={review.uid}>
            <h3>{review.title}</h3>
            <div className="reviews-wrapper__stars">
              {starsInArray(review.rating).map(star => (
                <Star key={star} />
              ))}
            </div>
            <p>{review.description}</p>
          </div>
        ))
      ) : (
        <span>Loading reviews...</span>
      )}
    </div>
  );
};

export default ReviewsWrapper;
