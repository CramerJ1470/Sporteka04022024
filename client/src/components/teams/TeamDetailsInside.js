import React from "react";
import Video from "./videoPlayer/Video";



let rank =0;
function TeamDetailsInside({ team,teams ,standings,venue}) {
	let value = 0;
	console.log(team);
	let currentTeams = [];
	let ranks= standings.forEach((standingTeam) => {const {Draws,Games,GlobalTeamId,GoalsAgainst,GoalsDifferential,GoalsScored,Group,Losses,Name,Order,Points,RoundId,Scope,ShortName,StandingId,TeamId,Wins} = standingTeam;console.log(standingTeam);if (TeamId === team.TeamId) {currentTeams.push(standingTeam);}});
  let currentTeam = currentTeams[0];
  if (currentTeam.Order) {
 rank = currentTeam.Order;
  console.log(rank);
  } else {
	console.log("no rank");
  }

function getValue(e) {

	var TeamId= Number(e.target.TeamId);
	var capacity = Number(venue.Capacity);

	let position = rank;

  let multiplier = 1;
	  

	  if (position > 0 && position < 6) {
		  multiplier = 5;
	  } else if (position > 5 && position < 11) {
		  multiplier = 4;
	  } else if (position > 10 && position < 16) {
		  multiplier = 3;
	  } else if (position > 15 && position < 21) {
		  multiplier = 2;
	  }
console.log(`cap:`,capacity,"multi:",multiplier,"pos:",position);
	  value = (38 * 50 * capacity * multiplier) / 10000000;
	document.getElementById("endvalue").style.display= "block";
	document.getElementById("endvalue").innerText = `Current value: ${value} SPRTK (Sporteka Token) click to purchase ${team.Key} (${team.Name}) token`;
	document.getElementById("endGame").style.display = "none";
	
			
}
	
	// const video = {
	// 	url: team.url,
	// };

	function buyClubToken() {
		// ask if they are buying they need to pay to update price
		// run chainlink function that updates price with ClubTokenName- returns price and date
		//In mongodb add address to clubs price array
		// Do calculation with price and User Sporteka balance in front end
		


		//run buyClubToken (string memory clubName, uint256 amountofToken) 

		// get Users SportekaToken balance;
		// get Club Symbol
		// 
	
		alert(`Deploy buyClubToken`);
	}

	console.log(`inside team:`, team);

	return (
		<div>
			<div id={team.TeamId} className="playercard">
				<img src={team.WikipediaLogoUrl} alt="logo" />
				<h1>{team.Name}</h1>
				<p>Token: {team.Key} </p>
				<p>Country: {team.AreaName}</p>
				
				{/* <p>Venue Capacity: {venue.Capacity}</p> */}
				<p>Rank: {rank}</p>
			</div>
			<div id="getValue" className="cent">
				<div id="endGame">
				<button id={team.id} className="button cent" onClick={getValue}>
					Get current value/purchase {team.short_code} token
				</button>
				</div>
               
				<button id="endvalue" className="button cent endvalue" onClick={buyClubToken}></button>
{/* 				
				<Video video={video} /> */}
			</div>
		</div>
	);
}

export default TeamDetailsInside;
