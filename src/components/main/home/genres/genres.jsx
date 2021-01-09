import React from "react";

import GenresWrapper from "./genresWrapper/genresWrapper";

import "./genres.scss";

const Genres = () => {
  return (
    <div className="genres">
      <h2 className="genres__heading">For All Genres</h2>
      <GenresWrapper />
    </div>
  );
};

export default Genres;
