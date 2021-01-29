import React from "react";

import "./bagSummary.scss";

const BagSummary = () => {
  return (
    <div className="bag-summary">
      <h2>Summary</h2>

      <div className="bag-summary__subtotal">
        <span>Subtotal</span>
        <span className="price">$ 300.00</span>
      </div>
      <div className="bag-summary__shipping">
        <span>Shipping</span>
        <span className="price">$ 0.00</span>
      </div>
      <div className="bag-summary__total">
        <span>Total</span>
        <span className="price">$ 300.00</span>
      </div>

      <button>Payment</button>
    </div>
  );
};

export default BagSummary;
