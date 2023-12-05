import React from "react";
import "./teams.css"; // Import the CSS file
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";

function Teams({ teams }) {
	console.log("teams", teams);

	return (
		<div>
			<Navbar />
			<div className="team-list ">
				{teams.map((team) => (
					<Link
						key={team.team_id}
						className="linkbutton"
						to={`/teamdetails/${team.team_id}`}
					>
						<div className="team-container">
							<img src={team.logo} alt="logo" />
							<h2>{team.name}</h2>
							<p></p>
							<p>Country: {team.country}</p>
							<p>Founded: {team.founded}</p>
							<p>Venue: {team.venue_name}</p>
						</div>
					</Link>
				))}
				{/* Add other team information as needed */}
			</div>
		</div>
	);
}

export default Teams;

// ----- NOTES ----- //
// This assumes that the `teamList` array contains objects with properties like `id`, `name`, `country`, `founded`, etc. Adjust the rendering of team information based on the actual data structure.  Don't forget to add a `key` prop to the mapped `Team` components to ensure a unique identifier for each team.
