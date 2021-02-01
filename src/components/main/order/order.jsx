import React, { useState } from "react";

import HistoryContext from "./../../../context/historyContext";
import NavBar from "./../../reuseable/navBar/navBar";

import "./order.scss";
import Steps from "./steps/steps";

const Order = ({ history }) => {
  const [orderStep, setOrderStep] = useState("done");

  return (
    <div className="order-page">
      <HistoryContext.Provider value={{ history }}>
        <NavBar />
      </HistoryContext.Provider>

      <div className="order-page__main">
        <Steps currentStep={orderStep} />
      </div>
    </div>
  );
};

export default Order;
