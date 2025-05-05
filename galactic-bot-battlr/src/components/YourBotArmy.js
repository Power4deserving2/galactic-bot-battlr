import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, onRemove, onDischarge }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {army.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onClick={onRemove}
            onDelete={onDischarge}
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;