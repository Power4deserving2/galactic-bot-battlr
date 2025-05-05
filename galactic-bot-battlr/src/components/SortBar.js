import React from "react";

function SortBar({ onSort }) {
  return (
    <div style={{ margin: "20px 0" }}>
      <strong>Sort Bots By:</strong>
      <button onClick={() => onSort("health")}>Health</button>
      <button onClick={() => onSort("damage")}>Damage</button>
      <button onClick={() => onSort("armor")}>Armor</button>
    </div>
  );
}

export default SortBar;