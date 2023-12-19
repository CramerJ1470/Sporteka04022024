import React from "react";
import Video from "./videoPlayer/Video";



let rank =0;
function TeamDetailsInside({ team,teams ,standings}) {
	let value = 0;
	console.log(team);
	let currentTeams = [];
	let ranks= standings.forEach((standingTeam) => {const {group_id,id,league_id,participant_id,points,position,result,round_id,season_id,sport_id,stage_id,standing_rule_id,_id} = standingTeam;console.log(standingTeam);if (participant_id === team.id) {currentTeams.push(standingTeam)}});
  let currentTeam = currentTeams[0];
 rank = currentTeam.position;
  console.log(rank);

function getValue(e) {

	var team_id= Number(e.target.id);
	var capacity = Number(team.venue_capacity);
	let position = rank;

  let multiplier = 1;
	  

	  if (position > 0 && position < 6) {
		  multiplier = 8;
	  } else if (position > 5 && position < 11) {
		  multiplier = 7;
	  } else if (position > 10 && position < 16) {
		  multiplier = 7;
	  } else if (position > 15 && position < 21) {
		  multiplier = 6;
	  }
console.log(`cap:`,capacity,"multi:",multiplier,"pos:",position);
	  value = (38 * 50 * capacity * multiplier) / 10000000;
	document.getElementById("endvalue").style.display= "block";
	document.getElementById("endvalue").innerText = `Current value: ${value} SPRTK (Sporteka Token) click to purchase ${team.short_code} (${team.name}) token`;
	document.getElementById("endGame").style.display = "none";
	
			
}
	
	const video = {
		url: team.url,
	};

	function addToken() {
		alert(`Deploy addClubToken`);
	}

	console.log(`inside team:`, team);

	return (
		<div>
			<div id={team.id} className="playercard">
				<img src={team.image_path} alt="logo" />
				<h1>{team.name}</h1>
				<p>Token: {team.short_code} </p>
				<p>Country: {team.country}</p>
				
				<p>Venue Capacity: {team.venue_capacity}</p>
				<p>Rank: {rank}</p>
			</div>
			<div id="getValue" className="cent">
				<div id="endGame">
				<button id={team.id} className="button cent" onClick={getValue}>
					Get current value/purchase {team.short_code} token
				</button>
				</div>
               
				<button id="endvalue" className="button cent endvalue" onClick={addToken}></button>
				
				<Video video={video} />
			</div>
		</div>
	);
}

export default TeamDetailsInside;
