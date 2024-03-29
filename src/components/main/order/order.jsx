import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Steps from "./steps/steps";
import Checkout from "./checkout/checkout";
import Delivery from "./delivery/delivery";
import Done from "./done/done";
import OrderContext from "./../../../context/orderContext";

import "./order.scss";

const Order = ({ history }) => {
  const [orderStep, setOrderStep] = useState("delivery");

  //get products length from redux store, then test if the user is allowed to get to this page
  const productsLength = useSelector(
    ({ cardReducer }) => cardReducer.products.length
  );

  useEffect(() => {
    if (productsLength === 0) history.push("/");
  }, []);

  return (
    <div className="order-page">
      <div className="order-page__main">
        <Steps currentStep={orderStep} />

        <OrderContext.Provider value={{ goToStep: step => setOrderStep(step) }}>
          {/* condition rendering of <Checkout /> , <Delivery /> and <Done /> */}
          {orderStep === "delivery" && <Delivery />}
          {orderStep === "checkout" && <Checkout />}
          {orderStep === "done" && <Done />}
        </OrderContext.Provider>
      </div>
    </div>
  );
};

export default Order;
