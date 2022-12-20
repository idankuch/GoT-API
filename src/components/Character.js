import React from "react";
import Card from "./UI/Card/Card";

function Character(props) {
  return (
    <Card className='card'>
      <div>tooltip</div>
      <div>
        <img src={props.imageSrc} height='120px' />
      </div>
      <div className='character-name'>{`${props.firstname} ${props.lastname}`}</div>
    </Card>
  );
}

export default Character;
