import React from "react";
import { Link, useParams } from "react-router-dom";

function TeamDetails({ teams, isAuth }) {
	console.log(teams);
	const { id } = useParams();
    console.log(id);


	let newTeam = teams.map(item=> {
        console.log(item);
		if(id === item.item.team_id) return item;
	});
    console.log(newTeam);

	// const { starredIn, name, description, imageUrl, uploadedBy } =
	// 	activeTeam[0];
	return (
		<div>
			{/* <div id={activeTeam.team_id} className="playercard">
				<img src={team.logo} alt="logo" />
				<h1>{team.name}</h1>
				<p></p>
				<p>Country: {team.country}</p>
				<p>Founded: {team.founded}</p>
				<p>Venue: {team.venue_name}</p>
			</div> */}
		</div>
	);
}

export default TeamDetails;
