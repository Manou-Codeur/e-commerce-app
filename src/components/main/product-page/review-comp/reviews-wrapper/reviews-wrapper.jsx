import React, { useEffect, useState, useContext } from "react";

import FirebaseContext from "./../../../../../server/firebase/firebaseContext";

import "./reviews-wrapper.scss";
import { ReactComponent as Star } from "../../../../../assets/img/star.svg";

const ReviewsWrapper = () => {
  const { firebase } = useContext(FirebaseContext);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const data = firebase.getProductReviews(10);
    data.on("value", snapshot => {
      const reviewsObj = snapshot.val();
      setReviews(Object.values(reviewsObj));
    });
  }, []);

  const starsInArray = rating => {
    const arr = [];
    for (let i = 1; i <= rating; i++) {
      arr.push(i);
    }
    return arr;
  };

  return (
    <div className="reviews-wrapper">
      {reviews.map(review => (
        <div className="reviews-wrapper__item" key={review.uid}>
          <h3>{review.title}</h3>
          <div className="reviews-wrapper__stars">
            {starsInArray(review.rating).map(star => (
              <Star key={star} />
            ))}
          </div>
          <p>{review.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewsWrapper;
