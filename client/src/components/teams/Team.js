import React from "react";
import { Link } from "react-router-dom";

function Team({ team }) {
	// console.log(team);
if (team.country_id === 462) {
	team.country= "England";
}
	return (
         
		<Link key={team.id} className="linkbutton" to={`/teamdetails/${team.id}`}>
			<div id={team.id} className="playercard">
				<img src={team.image_path} alt="logo" />
				<h2>{team.name}</h2>
				<p></p>
				<p>Token: {team.short_code} </p>
				<p>Country: {team.country}</p>
				<p>Founded: {team.founded}</p>
				<p>Venue: {team.venue_name}</p>
			</div>
		</Link>
        
	);
}

export default Team;
