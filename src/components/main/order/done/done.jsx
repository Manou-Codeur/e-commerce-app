import React from "react";

import { ReactComponent as DoneIcon } from "../../../../assets/img/done.svg";
import "./done.scss";

const Done = () => {
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
