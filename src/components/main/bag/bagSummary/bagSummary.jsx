import React, { useContext } from "react";

import HistoryContext from "./../../../../context/historyContext";

import "./bagSummary.scss";

const BagSummary = ({ fetchedProducts }) => {
  const { history } = useContext(HistoryContext);

  const getTotalPrice = products => {
    let totalPrice = 0;

    for (let product of products) {
      totalPrice +=
        parseFloat(product.price.split("$")[1].trim()) *
        parseInt(product.amount);
    }

    return `$ ${totalPrice}.00`;
  };

  return (
    <div className="bag-summary">
      <h2>Summary</h2>

      <div className="bag-summary__subtotal">
        <span>Subtotal</span>
        <span className="price">{getTotalPrice(fetchedProducts)}</span>
      </div>
      <div className="bag-summary__shipping">
        <span>Shipping</span>
        <span className="price">$ 0.00</span>
      </div>
      <div className="bag-summary__total">
        <span>Total</span>
        <span className="price">{getTotalPrice(fetchedProducts)}</span>
      </div>

      <button onClick={() => history.push("/order")}>Payment</button>
    </div>
  );
};

export default BagSummary;
