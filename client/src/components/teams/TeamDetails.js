import React from "react";
import { Link, useParams } from "react-router-dom";

import "./videoPlayer/Video.css";
import TeamDetailsInside from "./TeamDetailsInside";


let team;
function TeamDetails({teams, standings,venues }) {
	console.log(teams);
	console.log(venues);
	
	
	const { id } = useParams();
	console.log("Teamdetails id", id);
	teams.forEach((item) => {
		if (item.TeamId === Number(id)) {
			team = item;
		}
	});
	let venue = venues[team.TeamId];
	console.log(`venue:`,venue);
	console.log(`the team: `,team);
	
	console.log(team);
	function addClubToken() {
		alert(`Deploy addClubToken`);
	}
	

	return (
		<>
			<TeamDetailsInside team={team} teams={teams} standings={standings} venue={venue}/>
		</>
	);
}

export default TeamDetails;
