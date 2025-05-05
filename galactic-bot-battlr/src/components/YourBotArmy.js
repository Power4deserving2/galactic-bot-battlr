import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, setArmy }) {
  function handleRemove(bot) {
    setArmy(army.filter((b) => b.id !== bot.id));
  }

  return (
    <div>
      <h2>Your Bot Army</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {army.map((bot) => (
          <BotCard key={bot.id} bot={bot} onClick={handleRemove} />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;