import React from "react";

import NavBar from "./../../reuseable/navBar/navBar";
import Header from "./header/header";
import Recommend from "./recommend/recommend";
import Trending from "./trending/trending";
import HistoryContext from "./../../../context/historyContext";

import "./home.scss";

const Home = ({ history }) => {
  return (
    <div className="home">
      <HistoryContext.Provider value={{ history }}>
        <NavBar />
        <Header />

        <div className="home__main">
          <Recommend />
          <Trending />
        </div>
      </HistoryContext.Provider>
    </div>
  );
};

export default Home;
