import React from "react";

import "./card.scss";

const Card = () => {
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
        <img className="card__type" src="/card-types/visa.png" alt="" />
      </div>

      <div className="card__number">1234 5678 1234 1235</div>

      <div className="card__bottom-part">
        <div className="card__name">
          <span>Card Holder</span>
          <span>Salim Ayache</span>
        </div>
        <div className="card__exp-date">
          <span>Expires</span>
          <span>MM/YY</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
