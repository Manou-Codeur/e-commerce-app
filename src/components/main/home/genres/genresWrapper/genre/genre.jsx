import React, { useContext } from "react";

import HistoryContext from "./../../../../../../context/historyContext";

import "./genre.scss";

const Genre = ({ data: { genre, imgUrl } }) => {
  const { history } = useContext(HistoryContext);

  const goToGenrePage = () => history.push(`/${genre.toLowerCase()}`);

  return (
    <div className="genre" onClick={goToGenrePage}>
      <img className="genre__img" src={imgUrl} alt="People" />
      <div className="genre__name">{genre}</div>
    </div>
  );
};

export default Genre;
