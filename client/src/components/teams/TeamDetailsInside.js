import React from "react";
import Video from "./videoPlayer/Video";




function TeamDetailsInside({ team,teams ,standings}) {
	let value = 0;
	console.log(team);


function getValue(e) {

	var team_id= Number(e.target.id);
	var capacity = Number(team.venue_capacity);
console.log(`team_id:`, team_id, ` capacity:`,capacity , `standings:`,standings);
let standingsList  = standings.forEach((item) => {if(Number(item.participant_id) === Number(team_id)) {console.log(item.participant_id);return item.position;}});
let position = standingsList;
console.log(standingsList);

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
	  value = (38 * 50 * capacity * multiplier) / 1000000;
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
