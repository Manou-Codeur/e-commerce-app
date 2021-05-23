import React, { useState, useEffect, createRef } from "react";
import { useDispatch } from "react-redux";

import ImagesWrapper from "./imagesWrapper/images-wrapper";
import OtherColors from "./otherColors/otherColors";
import SizeSelect from "./sizeSelect/sizeSelect";

import { addToCard } from "./../../../../store/card";
import { fetchProduct } from "./../../../../server/fake-db/db-functions";
import "./product-presentation.scss";

const ProductPresentation = ({ productId, userAuthed }) => {
  const sizeRef = createRef();
  const [product, setProduct] = useState(null);
  const [currColor, setCurrColor] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchedProduct = fetchProduct(productId);

    setProduct(fetchedProduct);
    setCurrColor(fetchedProduct.mainColor);
  }, [productId]);

  function getOtherColors() {
    const colors = product.colors;
    const otherColors = [];

    for (let els in colors) {
      if (els !== currColor)
        otherColors.push({ color: els, images: [...colors[els]] });
    }

    return otherColors;
  }

  const handleAddToCard = () => {
    let products = [];

    if (localStorage.getItem("products")) {
      products = JSON.parse(localStorage.getItem("products"));
    }

    const product = {
      uid: userAuthed,
      pid: productId,
      color: currColor,
      size: sizeRef.current.textContent,
      amount: 1,
    };
    products.push(product);

    //update both localstorage and redux store
    localStorage.setItem("products", JSON.stringify(products));
    dispatch(addToCard(product));
  };

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
          <SizeSelect
            productType={product.type}
            productGenre={product.genre}
            ref={sizeRef}
          />
          <div className="product-presentation__payment">
            <button onClick={handleAddToCard}>
              {userAuthed ? "Add to card" : "Sing in to buy"}
            </button>
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
