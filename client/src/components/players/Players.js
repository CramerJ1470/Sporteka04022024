import React from "react";
import Player from "./Player";
import { playersList } from "../../assets/players";

function Players({ players }) {
	// Define your grid container style

	// let playersList = players;
	console.log(`players:`, players);
	const gridContainerStyle = {
		width: "70%",
		display: "-ms-grid",

		margin: "0 auto",
		msGridColumns: "repeat(auto-fit, minmax(300px, 1fr))",
		gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
		gridGap: "10px",
		padding: "20px", // Adjusted padding for better spacing
		border: "1px solid #ccc",
		boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Added a subtle box shadow
		marginTop: "20px", // Added top margin
	};

	return (
		<>
			<div className="grid-container" style={{ ...gridContainerStyle }}>
				{playersList.map((player) => (
					<div key={player.id} className="grid-item">
						<Player player={player.player} />
					</div>
				))}
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
