import React from "react";

import HistoryContext from "./../../../context/historyContext";
import NavBar from "./../../reuseable/navBar/navBar";
import Header from "./header/header";
import Recommend from "./recommend/recommend";
import Trending from "./trending/trending";
import Genres from "./genres/genres";

import "./home.scss";

const Home = ({ history }) => {
  return (
    <HistoryContext.Provider value={{ history }}>
      <div className="home">
        <NavBar />
        <Header />

        <div className="home__main">
          <Recommend />
          <Trending />
          <Genres />
        </div>
      </div>
    </HistoryContext.Provider>
  );
};

export default Home;
