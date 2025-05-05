import React from "react";

function BotCard({ bot, onClick, onDelete }) {
  return (
    <div
      className="bot-card"
      style={{
        border: "1px solid #ccc",
        margin: "10px",
        padding: "10px",
        width: "200px",
        position: "relative",
        cursor: "pointer",
      }}
      onClick={() => onClick(bot)}
    >
      {onDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent bot click
            onDelete(bot);
          }}
          style={{
            position: "absolute",
            top: "5px",
            right: "5px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            cursor: "pointer",
          }}
        >
          ❌
        </button>
      )}
      <img src={bot.avatar_url} alt={bot.name} width="100%" />
      <h3>{bot.name}</h3>
      <p><strong>Class:</strong> {bot.bot_class}</p>
      <p><em>"{bot.catchphrase}"</em></p>
      <p>❤️ {bot.health} | 💥 {bot.damage} | 🛡️ {bot.armor}</p>
    </div>
  );
}

export default BotCard;