import React, { useContext } from "react";

import HistoryContext from "./../../../../../../context/historyContext";

import "./trend.scss";

const Trend = ({ data: { imgUrl, name, color, type, genre, id }, big }) => {
  const { history } = useContext(HistoryContext);

  return (
    <div
      className={big ? "trend--big" : "trend"}
      onClick={() =>
        history.push(`/product/${type}@${genre}@${name}@${color}@${id}`)
      }
    >
      <div className={big ? "trend--big__img-wrapper" : "trend__img-wrapper"}>
        <img src={imgUrl} alt={name} />
      </div>

      <div className={big ? "trend--big__name" : "trend__name"}>{name}</div>
    </div>
  );
};

export default Trend;
