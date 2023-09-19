import { useState, useEffect, useCallback } from "react";

export const useFetch = (firebase, productId) => {
  const [reviews, setReviews] = useState(null);
  const [errors, setErrors] = useState(false);

  const fetchReviews = useCallback(() => {
    const data = firebase.getProductReviews(productId);
    data.on("value", snapshot => {
      const reviewsObj = snapshot.val();
      if (reviewsObj) setReviews(Object.values(reviewsObj));
      else setReviews([]);
    });
  }, [productId, firebase]);

  useEffect(() => {
    fetchReviews();

    //cleanup firebase subscription once the component get unmounted
    return () => {
      firebase.getProductReviews(productId).off();
    };
  }, [productId, firebase, fetchReviews]);

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

  return { reviews, errors };
};
