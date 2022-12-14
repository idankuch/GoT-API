import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <button
      className={props.className}
      type={props.type || "button"}
      disabled={props.isDisabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
