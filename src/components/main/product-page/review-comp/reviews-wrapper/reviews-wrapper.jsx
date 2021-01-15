import React from "react";

import "./reviews-wrapper.scss";
import { ReactComponent as Star } from "../../../../../assets/img/star.svg";

const ReviewsWrapper = () => {
  return (
    <div className="reviews-wrapper">
      {[0, 1].map(el => (
        <div className="reviews-wrapper__item" key={el}>
          <h3>Best shoes ever</h3>
          <div className="reviews-wrapper__stars">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <p>
            Great service, great delivery definitely recommend ordering from
            here. Love this app too much lol.
          </p>
        </div>
      ))}
    </div>
  );
};

export default ReviewsWrapper;
