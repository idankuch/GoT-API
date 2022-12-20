import React from "react";
import Character from "./Character";

function CharactersList(props) {
  if (props.characters) {
    return (
      <div className='grid'>
        {props.characters.map((character) => (
          <Character
            key={character.id}
            firstname={character.firstName}
            lastname={character.lastName}
            imageSrc={character.imageUrl}
          />
        ))}
      </div>
    );
  }
}

export default CharactersList;
