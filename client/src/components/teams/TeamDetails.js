import React from "react";
import { Link, useParams } from "react-router-dom";

import "./videoPlayer/Video.css";
import TeamDetailsInside from "./TeamDetailsInside";
const TeamsPlayerBySeasonId =
	require("../../controllers/teamsListController").TeamsPlayerBySeasonId;

let team;
let teams  = TeamsPlayerBySeasonId.data;
console.log("details teams: ",teams)
function TeamDetails({teams,standings,isAuth}) {
	console.log(teams);
	const { id } = useParams();
	console.log("Teamdetails id", id);
	teams.forEach((item) => {
		if (item.id === Number(id)) {
			team = item;
		}
	});
	console.log(`the team: `,team);
	
	console.log(team);
	function addClubToken() {
		alert(`Deploy addClubToken`);
	}
	

	return (
		<>
			<TeamDetailsInside team={team} teams={teams} standings={standings}/>
		</>
	);
}

export default TeamDetails;
