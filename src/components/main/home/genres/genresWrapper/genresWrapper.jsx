import React from "react";

import Genre from "./genre/genre";

import Men from "../../../../../assets/img/genres/men.png";
import Women from "../../../../../assets/img/genres/women.png";
import Kids from "../../../../../assets/img/genres/kids.png";

import "./genresWrapper.scss";

const GenresWrapper = () => {
  return (
    <div className="genres-wrapper">
      <Genre data={{ genre: "MEN", imgUrl: Men }} />
      <Genre data={{ genre: "WOMEN", imgUrl: Women }} />
      <Genre data={{ genre: "KIDS", imgUrl: Kids }} />
    </div>
  );
};

export default GenresWrapper;
