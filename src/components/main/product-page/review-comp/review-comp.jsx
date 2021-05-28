import React, { useContext } from "react";

import ReviewsArea from "./reviews-area/reviews-area";
import ReviewForm from "./review-form/review-form";
import FirebaseContext from "./../../../../server/firebase/firebaseContext";

import "./review-comp.scss";

const ReviewComp = ({ userAuthed, productId }) => {
  const { firebase } = useContext(FirebaseContext);

  return (
    <div className="review-comp">
      <ReviewsArea productId={productId} firebase={firebase} />
      <ReviewForm
        productId={productId}
        firebase={firebase}
        userAuthed={userAuthed}
      />
    </div>
  );
};

export default ReviewComp;
