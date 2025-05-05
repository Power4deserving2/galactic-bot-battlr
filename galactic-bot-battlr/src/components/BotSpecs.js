import React from "react";

function BotSpecs({ bot, onBack, onEnlist }) {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} width="300px" />
      <p><strong>Class:</strong> {bot.bot_class}</p>
      <p><em>{bot.catchphrase}</em></p>
      <p>❤️ {bot.health} | 💥 {bot.damage} | 🛡️ {bot.armor}</p>
      <br />
      <button onClick={() => onEnlist(bot)}>Enlist</button>
      <button onClick={onBack} style={{ marginLeft: "10px" }}>Back</button>
    </div>
  );
}

export default BotSpecs;