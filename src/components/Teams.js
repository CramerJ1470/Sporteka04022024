import React from "react";
import Team from "./Team";

function Teams({ teams }) {
	console.log(`teams teams:`, teams);

	return (
		<>
			<div>
				<h1>Teams</h1>

				<div className="Players">
					<div id="playerBack" >
						{teams.map((team) => {
							return <Team key={team.team_id} team={team} />;
						})}
					</div>
				</div>

				<div className="bottommargin"></div>
			</div>
		</>
	);
}

export default Teams;

// ----- NOTES ----- //
// This assumes that the `teamList` array contains objects with properties like `id`, `name`, `country`, `founded`, etc. Adjust the rendering of team information based on the actual data structure.  Don't forget to add a `key` prop to the mapped `Team` components to ensure a unique identifier for each team.
