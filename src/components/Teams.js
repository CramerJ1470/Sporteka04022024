import React from 'react';
import { teamsList } from "../assets/teamsList";

function Teams({ teams }) {
  console.log("teamsList:", teamsList);

  return (
    <div>
      {teamsList.map((team) => (
        <div key={team.id}>
          <h2>{team.name}</h2>
          <p>Country: {team.country}</p>
          <p>Founded: {team.founded}</p>
          {/* Add other team information as needed */}
        </div>
      ))}
    </div>
  );
}

export default Teams;

// ----- NOTES ----- //
// This assumes that the `teamList` array contains objects with properties like `id`, `name`, `country`, `founded`, etc. Adjust the rendering of team information based on the actual data structure.  Don't forget to add a `key` prop to the mapped `Team` components to ensure a unique identifier for each team.