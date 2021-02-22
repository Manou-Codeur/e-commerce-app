import React, { useState, useEffect } from "react";

import ImagesWrapper from "./imagesWrapper/images-wrapper";
import OtherColors from "./otherColors/otherColors";
import SizeSelect from "./sizeSelect/sizeSelect";

import { fetchProduct } from "./../../../../server/fake-db/db-functions";
import "./product-presentation.scss";

const ProductPresentation = ({
  productDetails: { type, genre, name, color },
}) => {
  const [product, setProduct] = useState(null);
  const [currColor, setCurrColor] = useState(null);

  useEffect(() => {
    const fetchedProduct = fetchProduct(type, genre, name, color);

    setProduct(fetchedProduct);
    setCurrColor(fetchedProduct.mainColor);
  }, [type, genre, name, color]);

  function getOtherColors() {
    const colors = product.colors;
    const otherColors = [];

    for (let els in colors) {
      if (els !== currColor)
        otherColors.push({ color: els, images: [...colors[els]] });
    }

    return otherColors;
  }

  if (product)
    return (
      <div className="product-presentation">
        <ImagesWrapper images={product.colors[currColor]} />

        <div className="product-presentation__info">
          <span className="product-presentation__genre">
            {`${product.genre}'s ${product.type}`}
          </span>
          <h3 className="product-presentation__name">{product.name}</h3>
          <OtherColors data={getOtherColors()} selectColor={setCurrColor} />
          <SizeSelect productType={product.type} />
          <div className="product-presentation__payment">
            <button>Add to cart</button>
            <span className="price">{product.price}</span>
          </div>
        </div>
      </div>
    );
  else {
    return <h1>wait...</h1>;
  }
};

export default ProductPresentation;
