import React from "react";

function Player({ player }) {
	console.log(player);
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
		statistics,
	} = player;
	console.log(
		"name",
		name,
		firstname,
		lastname,
		statistics.team.name,
		statistics.games.position,
		statistics.games.rating
	);

	return (
		<div id={lastname} className="playercard">
			<img className="player" src={photo} alt="player" />
			<h1>{name}</h1> 
			<p>
				{firstname} {lastname}
			</p>
			<p>Team: {statistics.team.name}</p>
			<p>Position: {statistics.games.position}</p>
			<p>Rating: {statistics.games.rating}</p>
			<img src={statistics.team.logo} alt="logo" /> 
		</div>
	);
}

export default Player;
