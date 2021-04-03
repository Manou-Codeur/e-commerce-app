import React, { useContext } from "react";

import ReviewsWrapper from "./reviews-wrapper/reviews-wrapper";
import ReviewForm from "./review-form/review-form";
import HistoryContext from "./../../../../context/historyContext";
import FirebaseContext from "./../../../../server/firebase/firebaseContext";

import "./review-comp.scss";

const ReviewComp = () => {
  const { productId } = useContext(HistoryContext);
  const { firebase } = useContext(FirebaseContext);

  return (
    <div className="review-comp">
      <ReviewsWrapper productId={productId} firebase={firebase} />
      <ReviewForm productId={productId} firebase={firebase} />
    </div>
  );
};

export default ReviewComp;
