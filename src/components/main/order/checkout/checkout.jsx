import React from "react";

import CardPaiment from "./cardPayement/cardPaiment";
import PaypalPaiment from "./PaypalPaiment/paypalPaiment";

import "./checkout.scss";

const Checkout = () => {
  return (
    <div className="checkout">
      <CardPaiment />
      <PaypalPaiment />
    </div>
  );
};

export default Checkout;
