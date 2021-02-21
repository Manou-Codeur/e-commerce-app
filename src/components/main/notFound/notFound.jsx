import React from "react";

import HistoryContext from "./../../../context/historyContext";
import NavBar from "./../../reuseable/navBar/navBar";

import "./notFound.scss";

const NotFound = ({ history }) => {
  return (
    <div className="not-found">
      <HistoryContext.Provider value={{ history }}>
        <NavBar />
      </HistoryContext.Provider>

      <div className="not-found__main">
        <h1>Oops... Page Not Found!</h1>

        <button onClick={() => history.push("/")}>Go Home</button>
      </div>
    </div>
  );
};

export default NotFound;
