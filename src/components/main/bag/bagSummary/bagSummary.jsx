import React, { useContext } from "react";

import HistoryContext from "./../../../../context/historyContext";

import "./bagSummary.scss";

const BagSummary = ({ totalPrice }) => {
  const { history } = useContext(HistoryContext);

  return (
    <div className="bag-summary">
      <h2>Summary</h2>

      <div className="bag-summary__subtotal">
        <span>Subtotal</span>
        <span className="price">{totalPrice}</span>
      </div>
      <div className="bag-summary__shipping">
        <span>Shipping</span>
        <span className="price">$ 0.00</span>
      </div>
      <div className="bag-summary__total">
        <span>Total</span>
        <span className="price">{totalPrice}</span>
      </div>

      <button
        disabled={totalPrice === "$ 0.00"}
        onClick={() => history.push("/order")}
      >
        Payment
      </button>
    </div>
  );
};

export default BagSummary;
