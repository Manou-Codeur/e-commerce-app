import React from "react";

import ProductsSlider from "./productsSlider/productsSlider";

import { fetchRecommendations } from "../../../server/fake-db/db-functions";
import "./recommend.scss";

const Recommend = ({ headingTitle, currProduct }) => {
  return (
    <div className="recommend">
      <h2 className="recommend__heading">{headingTitle}</h2>
      <ProductsSlider productsList={fetchRecommendations(currProduct)} />
    </div>
  );
};

export default Recommend;
