import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";

import HistoryContext from "./../../../../context/historyContext";

import "./header.scss";
import airJordan from "../../../../assets/img/featured-products/air-jordan.png";
import nikeLegend from "../../../../assets/img/featured-products/nike-legende.png";
import adidasNMD from "../../../../assets/img/featured-products/adidas-uqt.png";

const featuredProduct = [
  {
    type: "shoes",
    genre: "Men",
    name: "airJordan",
    completeName: "New Air Jordan React Elevation",
    id: 1,
    hexColor: "#3867d6",
    namedColor: "blue",
    node: airJordan,
  },
  {
    type: "shoes",
    genre: "Men",
    name: "nikeLegend",
    completeName: "New Nike Legend React 3",
    id: 4,
    hexColor: "#64a9b0",
    namedColor: "blue",
    node: nikeLegend,
  },
  {
    type: "shoes",
    genre: "Men",
    name: "adidasNMD",
    completeName: "New Adidas NMD_R1 V1",
    id: 5,
    hexColor: "#FF443C",
    namedColor: "black",
    node: adidasNMD,
  },
];

const Header = () => {
  let [index, setIndex] = useState(0);
  let currProduct = featuredProduct[index];

  const { history } = useContext(HistoryContext);

  useEffect(() => {
    const myIntrvl = setInterval(() => {
      if (index === 2) setIndex(0);
      else setIndex(prev => prev + 1);
    }, 5000);

    return () => {
      clearInterval(myIntrvl);
    };
  }, [index]);

  const setProgressStyle = shoeName => {
    if (currProduct["name"].includes(shoeName))
      return { backgroundColor: currProduct["hexColor"] };
    else return null;
  };

  const controlSlider = ({ target: { nextSibling, previousSibling } }) => {
    if (!previousSibling) setIndex(0);
    else if (previousSibling && nextSibling) setIndex(1);
    else setIndex(2);
  };

  const goToProductPage = () => {
    let { completeName, id } = currProduct;
    //i'm removing 'New' from the completeName variable coz this is uncompatible with my fake db
    completeName = completeName.replace("New", "").trim();
    history.push(`/product/${completeName}@${id}`);
  };

  return (
    <div className={`header header--${currProduct["name"]}`}>
      <div className="header__left-part">
        <div className="center">
          <span className="header__shoe-genre">Men's shoe</span>
          <h1 className="header__shoe-name">{currProduct["completeName"]}</h1>
          <button onClick={goToProductPage}>Check it out</button>
          <div className="header__progress" onClick={controlSlider}>
            <div
              className="progress-item"
              style={setProgressStyle("Jordan")}
            ></div>
            <div
              className="progress-item"
              style={setProgressStyle("Legend")}
            ></div>
            <div
              className="progress-item"
              style={setProgressStyle("NMD")}
            ></div>
          </div>
        </div>
      </div>

      <div className="header__right-part">
        <div className="header__shoe-img-wrapper">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="header__shoe-img"
            key={currProduct.name}
            src={currProduct.node}
            alt={currProduct.name}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
