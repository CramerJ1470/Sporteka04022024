import React from "react";
import { Link } from "react-router-dom";

function Team({ team }) {
	console.log(team);

	return (
         
		<Link key={team.team_id} className="linkbutton" to={`/teamdetails/${team.team_id}`}>
			<div id={team.team_id} className="playercard">
				<img src={team.logo} alt="logo" />
				<h2>{team.name}</h2>
				<p></p>
				<p>Country: {team.country}</p>
				<p>Founded: {team.founded}</p>
				<p>Venue: {team.venue_name}</p>
			</div>
		</Link>
        
	);
}

export default Team;
