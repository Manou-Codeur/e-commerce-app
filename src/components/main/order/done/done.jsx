import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { clearCard } from "../../../../store/card";
import { ReactComponent as DoneIcon } from "../../../../assets/img/done.svg";
import "./done.scss";

const Done = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //clear the store and the local storage
    setTimeout(() => dispatch(clearCard()), 2000);
    localStorage.setItem("products", JSON.stringify([]));
  }, []);

  return (
    <div className="done">
      <div className="done__icon">
        <DoneIcon />
      </div>

      <h2>Thank you Salim! Your order has been confirmed</h2>
    </div>
  );
};

export default Done;
