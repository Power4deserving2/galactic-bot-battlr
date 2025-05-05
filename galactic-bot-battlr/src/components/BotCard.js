import React from "react";

function BotCard({ bot, onClick }) {
  return (
    <div
      className="bot-card"
      onClick={() => onClick(bot)}
      style={{
        border: "1px solid #ccc",
        margin: "10px",
        padding: "10px",
        width: "200px",
        cursor: "pointer",
      }}
    >
      <img src={bot.avatar_url} alt={bot.name} width="100%" />
      <h3>{bot.name}</h3>
      <p><strong>Class:</strong> {bot.bot_class}</p>
      <p><em>"{bot.catchphrase}"</em></p>
      <p>❤️ {bot.health} | 💥 {bot.damage} | 🛡️ {bot.armor}</p>
    </div>
  );
}

export default BotCard;