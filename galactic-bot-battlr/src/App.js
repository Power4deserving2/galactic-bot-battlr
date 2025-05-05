import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  // Fetch bots from JSON Server
  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  // Add a bot to the army (only if not already enlisted)
  function handleAddToArmy(bot) {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  }

  // Remove a bot from the army
  function handleRemoveFromArmy(bot) {
    setArmy(army.filter((b) => b.id !== bot.id));
  }

  // Permanently discharge (delete) a bot
  function handleDischarge(bot) {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE",
    }).then(() => {
      setArmy((prev) => prev.filter((b) => b.id !== bot.id));
      setBots((prev) => prev.filter((b) => b.id !== bot.id));
    });
  }

  return (
    <div className="App">
      <h1>Galactic Bot Battlr</h1>
      <YourBotArmy
        army={army}
        setArmy={setArmy}
        onRemove={handleRemoveFromArmy}
        onDischarge={handleDischarge}
      />
      <BotCollection bots={bots} army={army} setArmy={setArmy} />
    </div>
  );
}

export default App;