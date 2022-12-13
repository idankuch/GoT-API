import React from "react";
import "./Card.css";

const Card = function (props) {
  return <div className={props.className}>{props.children}</div>;
};

export default Card;
