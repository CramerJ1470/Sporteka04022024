import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./team.css";
import Navbar from "../navbar/Navbar";

function Team( {team,standings} ) {
  console.log(team);
  if (team.country_id === 462) {
    team.country = "England";
  }


console.log(`standings: `,standings);

  let currentTeams = [];
	let ranks= standings.forEach((standingTeam) => {const {group_id,id,league_id,participant_id,points,position,result,round_id,season_id,sport_id,stage_id,standing_rule_id,_id} = standingTeam;console.log(standingTeam);if (participant_id === team.id) {currentTeams.push(standingTeam)}});
  let currentTeam = currentTeams[0];
  let rank = currentTeam.position;
  console.log(rank);


  return (<Link key={team.id} className="linkbutton" to={`/teamdetails/${team.id}`}>
        <div id={team.id} className="playercard">
          <img src={team.image_path} alt="logo" />
          <h2>{team.name}</h2>
          <p></p>
       
          <p>Token: {team.short_code} </p>
          <p>Rank: {rank} </p>
        </div>
      </Link>
  );
}

export default Team;
