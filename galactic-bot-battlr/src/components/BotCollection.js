import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, army, setArmy }) {
  function handleAddToArmy(bot) {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  }

  return (
    <div>
      <h2>Available Bots</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} onClick={handleAddToArmy} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;