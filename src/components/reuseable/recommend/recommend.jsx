import React from "react";

import ProductsSlider from "./productsSlider/productsSlider";

import { fetchRecommendations } from "../../../server/fake-db/db-functions";
import "./recommend.scss";

const Recommend = ({ headingTitle }) => {
  return (
    <div className="recommend">
      <h2 className="recommend__heading">{headingTitle}</h2>
      <ProductsSlider productsList={fetchRecommendations()} />
    </div>
  );
};

export default Recommend;
