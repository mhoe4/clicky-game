import React from "react";

function Container(props) {
  return <div className="container col-md-10">{props.children}</div>;
}

export default Container;
