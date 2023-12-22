import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./team.css";
import Navbar from "../navbar/Navbar";

function Team( {team,standings} ) {

  return (<Link key={team.TeamId} className="linkbutton" to={`/teamdetails/${team.TeamId}`}>
    
        <div id={team.TeamId} className="playercard">
          <img src={team.WikipediaLogoUrl
} alt="logo" />
          <h2>{team.Name}</h2>
          <p></p>
       
          <p>Token: {team.Key} </p>
        
        </div>
        
      </Link>
     
  );
}

export default Team;
