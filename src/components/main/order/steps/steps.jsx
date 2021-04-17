import React from "react";

import "./steps.scss";

const Steps = ({ currentStep }) => {
  const generateClassName = step => {
    if (step === "delivery") {
      return "done";
    } else if (step === "checkout") {
      if (currentStep === "delivery") return null;
      return "done";
    } else if (step === "final") {
      if (currentStep === "checkout" || currentStep === "delivery") return null;
      return "done";
    }
  };

  return (
    <div className="steps">
      <span className={generateClassName("delivery")}>Delivery</span>
      <div className="hr"></div>
      <span className={generateClassName("checkout")}>Checkout</span>
      <div className="hr"></div>
      <span className={generateClassName("final")}>Done</span>
    </div>
  );
};

export default Steps;
