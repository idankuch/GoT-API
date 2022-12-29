import React from "react";
import InfoIcon from "./InfoIcon";
import Card from "./UI/Card/Card";

function Character(props) {
  // console.log(props);
  return (
    <Card className='card'>
      <InfoIcon data={`${props.firstname}, ${props.lastname}`} />
      <div>
        <img src={props.imageSrc} height='120px' />
      </div>
      <div className='character-name'>{`${props.firstname} ${props.lastname}`}</div>
    </Card>
  );
}

export default Character;
