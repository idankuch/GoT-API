import React, { useEffect, useState } from "react";
import Button from "./components/UI/Button/Button";
import CharactersList from "./components/CharacterList";
import "./App.css";

function App() {
  console.log("App rendered")
  const [apiDB, setApiDB] = useState([]); 
  const [lastShownItem, setLastShownItem] = useState(4); 
  const [isDisabled, setIsDisabled ] = useState(false);
  

  useEffect( ()=>{
    fetch("https://thronesapi.com/api/v2/Characters")
    .then(res => res.json())
    .then(data => {setApiDB(data); console.log(apiDB)});
  } ,[]);
  
const onShowMoreClick = () => {
  setLastShownItem(lastShownItem + 4);
  lastShownItem >= apiDB.length ? setIsDisabled(true) : null;
}

  return <div className="container">
    <CharactersList characters={apiDB.slice(0, lastShownItem)}/>
    <Button className="btn" onClick={onShowMoreClick} isDisabled={isDisabled}>More</Button>
    </div>
  
}

export default App;
