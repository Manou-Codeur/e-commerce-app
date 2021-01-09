import React, { useContext } from "react";

import HistoryContext from "./../../../../../../context/historyContext";

import "./genre.scss";

const Genre = ({ data: { genre, imgUrl } }) => {
  const { history } = useContext(HistoryContext);

  return (
    <div
      className="genre"
      onClick={() => history.push(`/${genre.toLowerCase()}`)}
    >
      <img className="genre__img" src={imgUrl} alt="People" />
      <div className="genre__name">{genre}</div>
    </div>
  );
};

export default Genre;
