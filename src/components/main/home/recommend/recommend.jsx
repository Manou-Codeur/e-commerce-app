import React from "react";

import ProductsSlider from "./../../../reuseable/productsSlider/productsSlider";

import { getRecommendations } from "../../../../server/fake-db/db-functions";
import "./recommend.scss";

const Recommend = () => {
  return (
    <div className="recommend">
      <h2 className="recommend__heading">Equip yourself</h2>
      <ProductsSlider productsList={getRecommendations()} />
    </div>
  );
};

export default Recommend;
