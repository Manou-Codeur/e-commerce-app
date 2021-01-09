import React from "react";

import TrendsWrapper from "./trendsWrapper/trendsWrapper";

import "./trending.scss";

const Trending = () => {
  return (
    <div className="trending">
      <h2 className="trending__heading">Trending Now</h2>
      <TrendsWrapper />
    </div>
  );
};

export default Trending;
