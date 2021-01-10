import React from "react";

import HistoryContext from "./../../../context/historyContext";
import NavBar from "./../../reuseable/navBar/navBar";
import Header from "./header/header";
import Recommend from "./recommend/recommend";
import Trending from "./trending/trending";
import Genres from "./genres/genres";
import Footer from "./../../reuseable/footer/footer";

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
          <Genres />
        </div>
      </HistoryContext.Provider>

      <Footer />
    </div>
  );
};

export default Home;
