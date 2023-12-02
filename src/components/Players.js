import React from "react";
import Player from "./Player";
import { playersList } from "../assets/players";

function Players() {
  // Define your grid container style
  const gridContainerStyle = {
    display: "grid",
    gap: "10px", // Decreased gap
    padding: "10px", // Decreased padding
    border: "1px solid #ccc",
    marginTop: "20px", // Added top margin
  };

  // Define your grid item style
  const gridItemStyle = {
    background: "#f0f0f0",
    padding: "10px", // Decreased padding
    border: "1px solid #ccc",
    textAlign: "center",
  };

  // Responsive styles using media queries
  const responsiveStyles = {
    "@media (min-width: 768px)": {
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", // Default for larger screens
    },
    "@media (min-width: 1024px)": {
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", // Increase columns at a larger screen size
    },
    "@media (min-width: 1200px)": {
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", // Further increase columns at an even larger screen size
    },
    // Add more media queries as needed
  };

  return (
    <>
      <div className="grid-container" style={{ ...gridContainerStyle, ...responsiveStyles }}>
        {playersList.map((player) => (
          <div key={player.id} className="grid-item" style={gridItemStyle}>
            <Player player={player.player} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Players;



//-------------NOTES-------------------------//
// 1. Added a `key` prop to the mapped `Player` components to ensure a unique identifier for each player
// 2. Removed unnecessary curly braces around the `playerList.map` arrow function since it's a single expression
// 3. Improved the formatting for better readability
// 4. Removed redundant `<div>` tags that didn't serve any specific purpose.  If needed, they can be added back in later.