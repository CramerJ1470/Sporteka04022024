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

  return (
    <div id={lastname} className="playercard">
      <img className="player" src={photo} alt="player" />
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


