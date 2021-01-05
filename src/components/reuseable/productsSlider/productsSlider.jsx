import React, { useState } from "react";

import Product from "./product/product";

import { getRecommendations } from "../../../server/fake-db/db-functions";
import { ReactComponent as LeftArrow } from "../../../assets/img/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../../assets/img/right-arrow.svg";
import "./productsSlider.scss";

const ProductsSlider = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="products-slider">
      <div className="products-slider__controls">
        <div
          className="products-slider__left-control"
          onClick={() => setPage(1)}
        >
          <LeftArrow />
        </div>
        <div
          className="products-slider__right-control"
          onClick={() => setPage(2)}
        >
          <RightArrow />
        </div>
      </div>

      <div className="products-slider__containner">
        {page === 1
          ? getRecommendations()
              .slice(0, 3)
              .map(el => <Product data={el} key={el.name} />)
          : getRecommendations()
              .slice(3)
              .map(el => <Product data={el} key={el.name} />)}
      </div>
    </div>
  );
};

export default ProductsSlider;
