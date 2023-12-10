import React from "react";
import Video from "./videoPlayer/Video";

import {getliveStandingByLeagueData} from "../../services";
// const LiveStandings = require("../../assets/liveStandingByLeague")
// 	.liveStandingByLeagueData.data;



function TeamDetailsInside({ team,teams }) {
	console.log(team);
	async function addClubToken() {
		alert(`Deploy addClubToken`);
	}
	// function getCapacity(id, teamData) {
	// 	let currentTeam = teamData.filter((item) => {
	// 		if (item.id === id) {
	// 			return item;
	// 		}
	// 	});
	// 	console.log(currentTeam);
	// 	let capacity = currentTeam.venue_capacity;
	// 	return { venue_capacity: capacity };
	// }

	

//  let value = getliveStandingByLeagueData(team_id, capacity);



 
	// function getPosition(team_id,cap) {
	// }

		
	// 	// let team_id = team.id;
	// 	// make fetch request
	// 	//const liveStandingsByLeagueId = `https://api.sportmonks.com/v3/football/standings/live/leagues/8?api_token={{api_token}}&include=`;

	// 	let currentTeam = LiveStandings.filter((item) => {
	// 		if (item.participant_id === team_id) {
	// 			return item;
	// 		}
	// 	});
	// 	console.log(currentTeam[0]);
	// 	let position = currentTeam[0].position;
	// 	console.log(`position: `, position);
	// 	return { position };
	// }
	// let clickGetValue = 0;
	// function getValue() {
	// 	clickGetValue++;
	// 	if (clickGetValue > 1) {


			
	// 	} else {
	// 		let multiplier = 1;
	// 		let current_capacity = Number(team.venue_capacity);
	// 		console.log(team.venue_capacity);
	// 		let position = Number(getPosition(team.id));

	// 		if (position > 0 && position < 6) {
	// 			multiplier = 8;
	// 		} else if (position > 5 && position < 11) {
	// 			multiplier = 7;
	// 		} else if (position > 10 && position < 16) {
	// 			multiplier = 7;
	// 		} else if (position > 15 && position < 21) {
	// 			multiplier = 6;
	// 		}

	// 		console.log(Number(current_capacity));

	// 		let value = (38 * 50 * current_capacity * multiplier) / 1000000;
	// 		console.log(Number(value));
function getValue(e) {
	var team_id= Number(e.target.id);
	var capacity = Number(team.venue_capacity);
console.log(`team_id:`, team_id, ` capacity:`,capacity );


var value = getliveStandingByLeagueData(team_id, capacity); 
return value;
}
			
	// 	}
	// }
	const video = {
		url: team.url,
	};

	function handleSubmit(event) {
    
		console.log(`event: `, event.target);
		// event.preventDefault();
		// document.getElementById("getValue").innerHTML = ``;
	}

	console.log(`inside team:`, team);

	return (
		<div>
			<div id={team.id} className="playercard">
				<img src={team.image_path} alt="logo" />
				<h1>{team.name}</h1>
				<p>Token: {team.short_code} </p>
				<p>Country: {team.country}</p>
				<p>Founded: {team.founded}</p>
			</div>
			<div id="getValue" className="cent">
				<button id={team.id} className="button cent" onClick={getValue}>
					Get current value/purchase {team.short_code} token
				</button>
                <button id={team.id} className="button cent" onClick={handleSubmit}>Current value: _____ SPRTK (Sporteka Token) click to purchase {team.short_code} ({team.name}) token</button>
				{/* <button id="endvalue" className="button cent" onClick={getValue}>Current value: ${value} SPRTK (Sporteka Token) click to purchase ${team.short_code} (${team.name}) token</button> */}
				
				<Video video={video} />
			</div>
		</div>
	);
}

export default TeamDetailsInside;
