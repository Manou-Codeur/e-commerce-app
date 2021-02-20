import React from "react";

import "./card.scss";

const Card = ({ data: { cardNumber, cardHolder, cardExp, cardType } }) => {
  return (
    <div
      className="card"
      style={{
        background: "url('/card-background.jpeg') center",
        backgroundSize: "cover",
      }}
    >
      <div className="card__top-part">
        <img className="card__chip" src="/chip.png" alt="chip" />
        <img
          className="card__type"
          src={`/card-types/${cardType}.png`}
          alt=""
        />
      </div>

      <div className="card__number">{cardNumber}</div>

      <div className="card__bottom-part">
        <div className="card__name">
          <span>Card Holder</span>
          <span>{cardHolder}</span>
        </div>
        <div className="card__exp-date">
          <span>Expires</span>
          <span>{cardExp}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
