const TeamsPlayerBySeasonId =
	require("./teamsListController").TeamsPlayerBySeasonId;

let teams = TeamsPlayerBySeasonId.data;
console.log(TeamsPlayerBySeasonId);

function getCapacity(teams, id) {
	let currentTeam;
	teams.filter((item) => {
		if (item.id === id) {
			currentTeam = item;
		}
	});
	console.log(currentTeam);
	let capacity = currentTeam.venue_capacity;
	return { team_id: currentTeam.id, venue_capacity: capacity };
}

console.log(getCapacity(teams, 18));
