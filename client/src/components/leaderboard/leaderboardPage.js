import React from "react";
import "./leaderboard.css"; // Import the specific leaderboard styles
import Navbar from "../navbar/Navbar"; // Import the navbar component

const LeaderboardPage = ({ isAuth, teams }) => {
	// Sample leaderboard data
	const leaderboardData = [
		{ name: "Player 1", score: 500, ranking: 1 },
		{ name: "Player 2", score: 450, ranking: 2 },
		{ name: "Player 3", score: 400, ranking: 3 },
		{ name: "Player 4", score: 350, ranking: 4 },
		{ name: "Player 5", score: 300, ranking: 5 },
		{ name: "Player 6", score: 550, ranking: 6 },
		{ name: "Player 7", score: 320, ranking: 7 },
	];

	// Sample profile data
	const profileData = {
		name: "James Karr",
		score: 480,
		ranking: 2, // Assuming James Karr is ranked 2nd
	};

	return (
		<div className="leaderboard-container">
			<Navbar />
			<div className="leaderboard-header">
				<h2>Leaderboard</h2>
				<p>Top Sport Trader</p>
				<p>Profile: {profileData.name}</p>
			</div>

			<table className="leaderboard-table">
				<thead>
					<tr>
						<th>Ranking</th>
						<th>Name</th>
						<th>Score</th>
					</tr>
				</thead>
				<tbody>
					{leaderboardData.map((player, index) => (
						<tr key={index}>
							<td>{player.ranking}</td>
							<td>{player.name}</td>
							<td>{player.score}</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className="bottom-icons-container">
				<a href="/loggedinhomepage">
					<div className="icon">
						<img src="home.svg" alt="Icon 1" />
						<p>Home</p>
					</div>
				</a>
				<a href="/clubs">
					<div className="icon">
						<img src="ion_football.svg" alt="Icon 2" />
						<p>Clubs</p>
					</div>
				</a>
				<a href="/player">
					<div className="icon">
						<img src="carbon_user-profile.svg" alt="Icon 3" />
						<p>Player</p>
					</div>
				</a>
				<a href="/predictions">
					<div className="icon">
						<img src="mdi_alphabet-b-box.svg" alt="Icon 4" />
						<p>Prediction</p>
					</div>
				</a>
				<a href="/trends">
					<div className="icon">
						<img src="mdi_chart-line.svg" alt="Icon 5" />
						<p>Trends</p>
					</div>
				</a>
			</div>
		</div>
	);
};

export default LeaderboardPage;
