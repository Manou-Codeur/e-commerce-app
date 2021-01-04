import React from "react";

import Header from "./header/header";
import NavBar from "./../../reuseable/navBar/navBar";
import HistoryContext from "./../../../context/historyContext";

import "./home.scss";

const Home = ({ history }) => {
  return (
    <div className="home">
      <HistoryContext.Provider value={{ history }}>
        <NavBar />
        <Header />
      </HistoryContext.Provider>

      <div className="extra">
        <h1>hello world</h1>
        <h1>hello world</h1>
        <h1>hello world</h1>
        <h1>hello world</h1>
        <h1>hello world</h1>
        <h1>hello world</h1>
        <h1>hello world</h1>
      </div>
    </div>
  );
};

export default Home;
