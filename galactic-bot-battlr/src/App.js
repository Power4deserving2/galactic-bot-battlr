import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import BotSpecs from "./components/BotSpecs";
import SortBar from "./components/SortBar";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [sortBy, setSortBy] = useState(null); // New state for sorting

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

  // Sorting handler
  function handleSort(criteria) {
    setSortBy(criteria);
  }

  // Sort bots before displaying
  const sortedBots = [...bots].sort((a, b) => {
    if (!sortBy) return 0;
    return b[sortBy] - a[sortBy];
  });

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
          <SortBar onSort={handleSort} />
          <YourBotArmy
            army={army}
            onRemove={handleRemoveFromArmy}
            onDischarge={handleDischarge}
          />
          <BotCollection
            bots={sortedBots}
            army={army}
            onBotClick={setSelectedBot}
          />
        </>
      )}
    </div>
  );
}

export default App;