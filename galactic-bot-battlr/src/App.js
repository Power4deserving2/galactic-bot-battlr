// src/App.js
import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  console.log("App component rendered");
  
  return (
    <div className="App">
      <h1>Galactic Bot Battlr</h1>
      <YourBotArmy army={army} setArmy={setArmy} />
      <BotCollection bots={bots} army={army} setArmy={setArmy} />
    </div>
  );
}

export default App;