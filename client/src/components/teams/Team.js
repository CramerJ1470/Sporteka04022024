import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./team.css";
import Navbar from "../navbar/Navbar";

function Team( {team,standings} ) {
  console.log(team);
 


console.log(`standings: `,standings);

  // let currentTeams = [];
	// let ranks= standings.forEach((standingTeam) => {const {group_id,id,league_id,participant_id,points,position,result,round_id,season_id,sport_id,stage_id,standing_rule_id,_id} = standingTeam;console.log(standingTeam);if (participant_id === team.id) {currentTeams.push(standingTeam)}});
  // let currentTeam = currentTeams[0];
  // let rank = currentTeam.position;
  // console.log(rank);


  return (<Link key={team.TeamId} className="linkbutton" to={`/teamdetails/${team.TeamId}`}>
        <div id={team.TeamId} className="playercard">
          <img src={team.WikipediaLogoUrl
} alt="logo" />
          <h2>{team.Name}</h2>
          <p></p>
       
          <p>Token: {team.Key} </p>
          <p>Rank:  </p>
        </div>
      </Link>
  );
}

export default Team;
