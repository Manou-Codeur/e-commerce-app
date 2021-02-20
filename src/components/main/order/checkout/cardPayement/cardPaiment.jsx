import React, { useState } from "react";

import Card from "./card/card";
import Form from "./form/form";

import "./cardPaiment.scss";

const CardPaiment = () => {
  const [cardNumber, setCardNumber] = useState("XXXX XXXX XXXX XXXX");
  const [cardType, setCardType] = useState("visa");
  const [cardHolder, setCardHolder] = useState("UserName");
  const [cardExp, setCardExp] = useState("MM/YY");

  return (
    <div className="card-paiment">
      <Card data={{ cardNumber, cardHolder, cardExp, cardType }} />
      <Form
        onChange={{ setCardHolder, setCardNumber, setCardExp, setCardType }}
      />
    </div>
  );
};

export default CardPaiment;
