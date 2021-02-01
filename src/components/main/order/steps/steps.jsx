import React from "react";

import "./steps.scss";

const Steps = ({ currentStep }) => {
  const genrateClassName = step => {
    if (step === "checkout") {
      return currentStep === "checkout" ? "current" : "done";
    } else if (step === "delivery") {
      if (currentStep === "delivery") return "current";
      else if (currentStep !== "checkout") {
        return "done";
      }
      return null;
    } else if (step === "final") {
      return currentStep !== "delivery" && currentStep === "done"
        ? "current"
        : null;
    }
  };

  return (
    <div className="steps">
      <span className={genrateClassName("checkout")}>Checkout</span>
      <div className="hr"></div>
      <span className={genrateClassName("delivery")}>Delivery</span>
      <div className="hr"></div>
      <span className={genrateClassName("final")}>Done</span>
    </div>
  );
};

export default Steps;
