import React from "react";

import Input from "../input/input";

import "./inputsWrapper.scss";

const InputsWrapper = ({ inputs, eventsFunctions }) => {
  return (
    <div className="input-wrapper">
      {inputs.map(inputInfo => (
        <Input key={inputInfo.label} {...inputInfo} {...eventsFunctions} />
      ))}

      {inputs.length === 2 && (
        <span className="input-wrapper__forgetPass">Forget password ?</span>
      )}
    </div>
  );
};

export default InputsWrapper;
