import React from "react";

import HistoryContext from "../../../context/historyContext";
import NavBar from "./../../reuseable/navBar/navBar";

import "./bag.scss";

const Bag = ({ history }) => {
  return (
    <HistoryContext.Provider value={{ history }}>
      <div className="bag">
        <NavBar />

        <h1>My Bag</h1>
      </div>
    </HistoryContext.Provider>
  );
};

export default Bag;
