import React, { useState } from "react";

import Steps from "./steps/steps";
import Checkout from "./checkout/checkout";
import Delivery from "./delivery/delivery";
import Done from "./done/done";

import "./order.scss";

const Order = ({ history }) => {
  const [orderStep, setOrderStep] = useState("checkout");

  return (
    <div className="order-page">
      <div className="order-page__main">
        <Steps currentStep={orderStep} />

        {/* condition rendering of <Checkout /> , <Delivery /> and <Done /> */}
        {orderStep === "checkout" && <Checkout />}
        {orderStep === "delivery" && <Delivery />}
        {orderStep === "done" && <Done />}
      </div>
    </div>
  );
};

export default Order;
