import React from "react";
import Player from "./Player";
import { playersList } from "../assets/players";

function Players( ) {
    console.log(playersList);

	return (
		<>
			<div>
                <div className="Players">
                    <div id="playerBack">
				 {playersList.map((player => {console.log(player); return <Player player={player.player} />}))}
                 </div>
			
                </div>
			</div>
		</>
	);
}

export default Players;
