import React from "react";

import Card from "./card/card";
import Form from "./form/form";

import "./cardPaiment.scss";

const CardPaiment = () => {
  return (
    <div className="card-paiment">
      <Card />
      <Form />
    </div>
  );
};

export default CardPaiment;
