import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import BotSpecs from "./components/BotSpecs";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  // Fetch bots from backend
  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  // Add bot to army if not already present
  function handleAddToArmy(bot) {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
    setSelectedBot(null); // Exit specs view after enlisting
  }

  // Remove bot from army
  function handleRemoveFromArmy(bot) {
    setArmy(army.filter((b) => b.id !== bot.id));
  }

  // Discharge bot (delete from server)
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

      {selectedBot ? (
        <BotSpecs
          bot={selectedBot}
          onBack={() => setSelectedBot(null)}
          onEnlist={handleAddToArmy}
        />
      ) : (
        <>
          <YourBotArmy
            army={army}
            onRemove={handleRemoveFromArmy}
            onDischarge={handleDischarge}
          />
          <BotCollection
            bots={bots}
            army={army}
            onBotClick={setSelectedBot}
          />
        </>
      )}
    </div>
  );
}

export default App;