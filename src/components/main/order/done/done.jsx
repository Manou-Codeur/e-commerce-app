import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { clearCard } from "../../../../store/card";
import { ReactComponent as DoneIcon } from "../../../../assets/img/done.svg";
import "./done.scss";

const Done = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //clear the store and the local storage
    dispatch(clearCard());
    localStorage.setItem("products", JSON.stringify([]));
  }, []);

  return (
    <div className="done">
      <div className="done__icon">
        <DoneIcon />
      </div>

      <h2>Thank you, Your order has been confirmed!</h2>
    </div>
  );
};

export default Done;
