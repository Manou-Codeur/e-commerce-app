import React from "react";

import "./notFound.scss";

const NotFound = ({ history }) => {
  const goHome = () => history.push("/");

  return (
    <div className="not-found">
      <div className="not-found__main">
        <h1>Oops... Page Not Found!</h1>

        <button onClick={goHome}>Go Home</button>
      </div>
    </div>
  );
};

export default NotFound;
