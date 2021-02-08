import React from "react";

import "./delivery.scss";
import DeliveryForm from "./deliveryForm/deliveryForm";

const Delivery = () => {
  return (
    <div className="delivery">
      <div className="delivery__heading">
        <div className="hr"></div>
        <h2>Personal Address</h2>
        <div className="hr"></div>
      </div>

      <DeliveryForm />
    </div>
  );
};

export default Delivery;
