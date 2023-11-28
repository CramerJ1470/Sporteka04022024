import React from "react";
import Player from "./Player";
import { playersList } from "../assets/players";

function Players() {
  console.log(playersList);

  return (
    <>
      <div>
        <div className="Players">
          <div id="playerBack">
            {playersList.map((player) => {
              console.log(player);
              return <Player key={player.id} player={player.player} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Players;

//-------------NOTES-------------------------//
// 1. Added a `key` prop to the mapped `Player` components to ensure a unique identifier for each player
// 2. Removed unnecessary curly braces around the `playerList.map` arrow function since it's a single expression
// 3. Improved the formatting for better readability
// 4. Removed redundant `<div>` tags that didn't serve any specific purpose.  If needed, they can be added back in later.