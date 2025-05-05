import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import BotSpecs from "./components/BotSpecs";
import SortBar from "./components/SortBar";
import FilterBar from "./components/FilterBar";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [filters, setFilters] = useState([]);

  // Fetch bots
  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  // Enlist bot
  function handleAddToArmy(bot) {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
    setSelectedBot(null); // Exit BotSpecs view after enlist
  }

  // Remove bot from army
  function handleRemoveFromArmy(bot) {
    setArmy(army.filter((b) => b.id !== bot.id));
  }

  // Discharge bot (delete permanently)
  function handleDischarge(bot) {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE",
    }).then(() => {
      setArmy((prev) => prev.filter((b) => b.id !== bot.id));
      setBots((prev) => prev.filter((b) => b.id !== bot.id));
    });
  }

  // Toggle class filter
  function handleToggleFilter(cls) {
    if (filters.includes(cls)) {
      setFilters(filters.filter((c) => c !== cls));
    } else {
      setFilters([...filters, cls]);
    }
  }

  // Sorting handler
  function handleSort(criteria) {
    setSortBy(criteria);
  }

  // Filter and sort bots before display
  const filteredBots = bots.filter((bot) => {
    if (filters.length === 0) return true;
    return filters.includes(bot.bot_class);
  });

  const sortedBots = [...filteredBots].sort((a, b) => {
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
          <FilterBar
            selectedFilters={filters}
            onToggleFilter={handleToggleFilter}
          />
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