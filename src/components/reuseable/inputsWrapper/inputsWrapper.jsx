import React from "react";

import Input from "./input/input";

import "./inputsWrapper.scss";

const InputsWrapper = ({ inputs, eventsFunctions }) => {
  return (
    <form className="input-wrapper">
      {inputs.map(inputInfo => (
        <Input key={inputInfo.label} {...inputInfo} {...eventsFunctions} />
      ))}
    </form>
  );
};

export default InputsWrapper;
