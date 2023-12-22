import React from "react";
import "./teams.css"; // Import the CSS file
import { Link } from "react-router-dom";
import Team from "./Team";


function Teams({ teams ,standings}) {
	console.log("teams", teams);



	return (
		<div className="page">
			<h3>Team Tokens</h3>
		<div className="teams-container">
			<div className="Players">
				<div id="playerBack">
					{teams.map((team) => {
						return <Team key={team.TeamId} team={team} standings={standings} />;
					})}
				</div>
			</div>
			<div className="bottommargin"></div>
			{/* WILL STYLE THIS ANOTHER DAY */}
			{/* <div className="button">
				<Link to="/loggedinhomepage">
					<button className="btn btn-primary">Back</button>
				</Link>
			</div> */}
		</div>
	</div>
	
	);
}

export default Teams;

// ----- NOTES ----- //
// This assumes that the `teamList` array contains objects with properties like `id`, `name`, `country`, `founded`, etc. Adjust the rendering of team information based on the actual data structure.  Don't forget to add a `key` prop to the mapped `Team` components to ensure a unique identifier for each team.
