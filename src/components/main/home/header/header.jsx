import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";

import HistoryContext from "./../../../../context/historyContext";

import "./header.scss";
import airJordan from "../../../../assets/img/featured-products/air-jordan.png";
import nikeLegend from "../../../../assets/img/featured-products/nike-legende.png";
import adidasNMD from "../../../../assets/img/featured-products/adidas-uqt.png";

const Header = () => {
  const featuredProduct = [
    {
      name: "airJordan",
      completeName: "New Jordan React Elevation",
      color: "#3867d6",
      node: airJordan,
    },
    {
      name: "nikeLegend",
      completeName: "New Nike Legend React 3",
      color: "#64a9b0",
      node: nikeLegend,
    },
    {
      name: "adidasNMD",
      completeName: "New Adidas NMD_R1 V1",
      color: "#FF443C",
      node: adidasNMD,
    },
  ];

  let [index, setIndex] = useState(0);
  let currProduct = featuredProduct[index];

  useEffect(() => {
    const myIntrv = setInterval(() => {
      if (index === 2) setIndex(0);
      else setIndex(prev => prev + 1);
    }, 3000);

    return () => {
      clearInterval(myIntrv);
    };
  }, [index]);

  const { history } = useContext(HistoryContext);

  const setProgressStyle = shoeName => {
    if (currProduct["name"].includes(shoeName))
      return { backgroundColor: currProduct["color"] };
    else return null;
  };

  const controlSlide = ({ target: { nextSibling, previousSibling } }) => {
    if (!previousSibling) setIndex(0);
    else if (previousSibling && nextSibling) setIndex(1);
    else setIndex(2);
  };

  return (
    <div className={`header header--${currProduct["name"]}`}>
      <div className="header__left-part">
        <div className="center">
          <span className="header__shoe-genre">Men's shoe</span>
          <h1 className="header__shoe-name">{currProduct["completeName"]}</h1>
          <button onClick={() => history.push(`/product/${currProduct["name"]}`)}>
            Check it out
          </button>
          <div className="header__progress" onClick={controlSlide}>
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
          <img className="header__shoe-img" src={currProduct.node} />
        </div>
      </div>
    </div>
  );
};

export default Header;
