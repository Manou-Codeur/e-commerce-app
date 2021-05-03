import React from "react";

import { ReactComponent as Star } from "../../../../../../../assets/img/star.svg";

const Review = ({ data }) => {
  const starsInArray = rating => {
    const arr = [];
    for (let i = 1; i <= rating; i++) {
      arr.push(i);
    }
    return arr;
  };

  return (
    <div className="reviews-wrapper__item" key={data.uid}>
      <h3>{data.title}</h3>
      <div className="reviews-wrapper__stars">
        {starsInArray(data.rating).map(star => (
          <Star key={star} />
        ))}
      </div>
      <p>{data.description}</p>
    </div>
  );
};

export default Review;
