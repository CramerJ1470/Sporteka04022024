import React from "react";

function Player({ player }) {
  console.log("player", player);

  // Destructure player object directly in the function parameters
  const {
    id,
    name,
    firstname,
    lastname,
    age,
    birth,
    nationality,
    height,
    weight,
    injured,
    photo,
    statistics: { team, games },
  } = player;

  console.log(
    "name",
    name,
    firstname,
    lastname,
    team.name,
    games.position,
    games.rating
  );

  // Inline styles for the player card
  const playerCardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "10px",
    margin: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  };

  // Inline styles for the player image
  const playerImageStyle = {
    width: "100px", // Set the desired width
    height: "100px", // Set the desired height
    objectFit: "cover", // Maintain aspect ratio while covering the entire space
    borderRadius: "50%", // Make it circular
    marginBottom: "10px",
  };

  return (
    <div id={lastname} className="playerCard" style={playerCardStyle}>
      <img className="player" src={photo} alt="player" style={playerImageStyle} />
      <h1>{name}</h1>
      <p>
        {firstname} {lastname}
      </p>
      <p>Team: {team.name}</p>
      <p>Position: {games.position}</p>
      <p>Rating: {games.rating}</p>
      <img src={team.logo} alt="logo" />
    </div>
  );
}

export default Player;



// ---------------------------NOTES-------------------------//

// Changes made
// 1. Destructured `statistics` directly in the function parameters
// 2. Simplified the access to nested properties within the `statistics` object
// 3. Improved the formatting for better readability


