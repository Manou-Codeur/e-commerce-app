import React, { useEffect, useState, useContext } from "react";

import "./reviews-wrapper.scss";
import { ReactComponent as Star } from "../../../../../assets/img/star.svg";

const ReviewsWrapper = ({ productId, firebase }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const data = firebase.getProductReviews(productId);
    data.on("value", snapshot => {
      const reviewsObj = snapshot.val();
      if (reviewsObj) setReviews(Object.values(reviewsObj));
      else setReviews("There is no reviews!");
    });

    //cleanup firebase subscription once the component get unmounted
    return () => {
      firebase.getProductReviews(productId).off();
    };
  }, [productId]);

  const starsInArray = rating => {
    const arr = [];
    for (let i = 1; i <= rating; i++) {
      arr.push(i);
    }
    return arr;
  };

  if (reviews === "There is no reviews!")
    return <h1 className="reviews-wrapper">No Reviews</h1>;
  return (
    <div className="reviews-wrapper">
      <h1>Reviwes</h1>
      {Array.isArray(reviews) && reviews.length > 0 ? (
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
        <h2>Loading reviews...</h2>
      )}
    </div>
  );
};

export default ReviewsWrapper;
