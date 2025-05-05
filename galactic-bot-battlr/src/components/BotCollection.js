import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, onBotClick }) {
  return (
    <div>
      <h2>Available Bots</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} onClick={onBotClick} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;