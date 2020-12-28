import React from "react";

import NavBar from "./../../reuseable/navBar/navBar";

import HistoryContext from "./../../../context/historyContext";
import "./home.scss";

const Home = ({ history }) => {
  return (
    <div className="home">
      <HistoryContext.Provider value={{ history }}>
        <NavBar />
      </HistoryContext.Provider>
    </div>
  );
};

export default Home;
