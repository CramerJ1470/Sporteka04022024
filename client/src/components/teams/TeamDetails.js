import React from "react";
import { Link, useParams } from "react-router-dom";

import "./videoPlayer/Video.css";
import TeamDetailsInside from "./TeamDetailsInside";


let team;
function TeamDetails({teams, standings,venues,clubtokens}) {
	
	const { id } = useParams();
	
	teams.forEach((item) => {
		if (item.TeamId === Number(id)) {
			team = item;
		}
	});
	let VenueId = team.VenueId;
	
	let venue = venues[team.VenueId-1];
	
		return (
		<>
			<TeamDetailsInside team={team} teams={teams} standings={standings} venue={venue} clubtokesn={clubtokens}/>
		</>
	);
}

export default TeamDetails;
