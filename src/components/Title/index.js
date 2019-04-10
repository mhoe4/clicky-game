import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="title-container col-md-10 text-center">
      <h1 className="title">Clicky Game!</h1>
      <h2 className="instructions">
        Click on an image to earn points, but don't click on any more than once!
      </h2>
      
    </div>
  );
}

export default Title;
