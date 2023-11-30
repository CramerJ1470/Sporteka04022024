import React from "react";
import "./teams.css"; // Import the CSS file
import Navbar from "../navbar/Navbar";

// Dummy data
const teamsList = [
  { id: 1, name: "Team A", country: "Country A", founded: 2000 },
  { id: 2, name: "Team B", country: "Country B", founded: 1995 },
  { id: 3, name: "Team C", country: "Country C", founded: 2010 },
  // Add more dummy data as needed
];

function Teams() {
  console.log("teamsList:", teamsList);

  return (
    <div>
      <Navbar />
      <div className="team-list">
        {teamsList.map((team) => (
          <div key={team.id} className="team-container">
            <h2 className="team-name">{team.name}</h2>
            <p className="team-info">Country: {team.country}</p>
            <p className="team-info">Founded: {team.founded}</p>
            {/* Add other team information as needed */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;

// ----- NOTES ----- //
// This assumes that the `teamList` array contains objects with properties like `id`, `name`, `country`, `founded`, etc. Adjust the rendering of team information based on the actual data structure.  Don't forget to add a `key` prop to the mapped `Team` components to ensure a unique identifier for each team.
