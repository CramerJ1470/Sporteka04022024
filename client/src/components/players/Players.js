import React from "react";
import Player from "./Player";
import "./players.css"; // Import the players.css file for styling
import { playersList } from "../../assets/players";

function Players({ players }) {
   // let playersList = players;
  console.log(`players:`, players);

  // Define your grid container styles here
  const flexContainerStyle = {
    display: "flex", // Change to grid for correct display
	flexWrap: "wrap", // Added to wrap the grid items
	width: "100%", // Full width
    padding: "20px", // Adjusted padding for better spacing
    margin: "0 auto", // Centered horizontally
    marginTop: "20px", // Added top margin
  };

  return (
    <>
      <div className="player-list" style={{ ...flexContainerStyle }}>
        {playersList.map((player) => (
          <div key={player.id} className="player-container">
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
