import React, { useState } from "react";

import ImagesWrapper from "./imagesWrapper/images-wrapper";
import OtherColors from "./otherColors/otherColors";
import SizeSelect from "./sizeSelect/sizeSelect";

import { fetchProduct } from "./../../../../server/fake-db/db-functions";
import "./product-presentation.scss";

const ProductPresentation = ({ productDetails }) => {
  const product = fetchProduct(
    productDetails.type,
    productDetails.genre,
    productDetails.name,
    productDetails.color
  );

  const [currColor, setCurrColor] = useState(product.color);

  function getOtherColors() {
    const colors = product.colors;
    const otherColors = [];

    for (let els in colors) {
      if (els !== currColor) otherColors.push(colors[els]["1"]);
    }

    return otherColors;
  }

  function getCurrImages() {
    const currImages = [];

    for (let els in product.colors[currColor]) {
      currImages.push(product.colors[currColor][els]);
    }

    return currImages;
  }

  return (
    <div className="product-presentation">
      <ImagesWrapper images={getCurrImages()} />

      <div className="product-presentation__info">
        <span className="product-presentation__genre">
          {`${product.genre}'s ${product.type}`}
        </span>
        <h3 className="product-presentation__name">{product.name}</h3>
        <OtherColors images={getOtherColors()} />
        <SizeSelect productType={product.type} />
        <div className="product-presentation__payment">
          <button>Add to cart</button>
          <span className="price">$139.95</span>
        </div>
      </div>
    </div>
  );
};

export default ProductPresentation;
