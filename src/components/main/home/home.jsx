import React from "react";

import NavBar from "./../../reuseable/navBar/navBar";
import Header from "./header/header";
import Recommend from "./recommend/recommend";
import HistoryContext from "./../../../context/historyContext";

import "./home.scss";

const Home = ({ history }) => {
  return (
    <div className="home">
      <HistoryContext.Provider value={{ history }}>
        <NavBar />
        <Header />
      </HistoryContext.Provider>

      <div className="home__main">
        <Recommend />
      </div>
    </div>
  );
};

export default Home;
