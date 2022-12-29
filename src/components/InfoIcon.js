import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

function InfoIcon(props) {
  console.log(props);
  return (
    <>
      <p id='tip'>Tooltip Icon</p>
      <Tooltip anchorId='tip' content={props.data} place='top' />
    </>
  );
}

export default InfoIcon;
