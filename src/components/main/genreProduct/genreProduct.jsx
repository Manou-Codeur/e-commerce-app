import React from "react";

import HistoryContext from "../../../context/historyContext";
import Recommend from "./../../reuseable/recommend/recommend";

import { fetchGenres } from "./../../../server/fake-db/db-functions";
import "./genreProduct.scss";

const GenreProduct = ({ history, location: { pathname } }) => {
  const genre = pathname.slice(1);
  const shoesList = fetchGenres(genre).shoes;
  const clothesList = fetchGenres(genre).clothes;

  return (
    <HistoryContext.Provider value={{ history }}>
      <div className="genre-product">
        <div className="genre-product__main">
          <Recommend headingTitle="Shoes" productList={shoesList} />
          <Recommend headingTitle="Clothing" productList={clothesList} />
        </div>
      </div>
    </HistoryContext.Provider>
  );
};

export default GenreProduct;
