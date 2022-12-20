import React, { useState } from "react";
import useFetch from "./hooks/useFetch";
import Button from "./components/UI/Button/Button";
import CharactersList from "./components/CharacterList";
import "./App.css";

function App() {
  console.log("App rendered");
  const [apiDB, isLoading, error] = useFetch(
    "https://thronesapi.com/api/v2/Characters"
  );
  const [lastShownItem, setLastShownItem] = useState(4);
  const [isDisabled, setDisabled] = useState(false);

  const onShowMoreClick = () => {
    setLastShownItem(lastShownItem + 4);
    lastShownItem >= apiDB.length ? setDisabled(true) : setDisabled(false);
  };

  return (
    <div className='container'>
      {isLoading && !error ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <CharactersList characters={apiDB.slice(0, lastShownItem)} />
          <Button
            className='btn'
            onClick={onShowMoreClick}
            isDisabled={isDisabled}
          >
            More
          </Button>
        </>
      )}
    </div>
  );
}

export default App;
