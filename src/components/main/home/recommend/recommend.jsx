import React from "react";

import ProductsSlider from "./../../../reuseable/productsSlider/productsSlider";

import { fetchRecommendations } from "../../../../server/fake-db/db-functions";
import "./recommend.scss";

const Recommend = () => {
  return (
    <div className="recommend">
      <h2 className="recommend__heading">Equip Yourself</h2>
      <ProductsSlider productsList={fetchRecommendations()} />
    </div>
  );
};

export default Recommend;
