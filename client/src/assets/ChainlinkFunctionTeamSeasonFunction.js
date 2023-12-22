// const TeamId = Number(args[0]);

var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');
myHeaders.append('Accept', 'application/json');

var requestOptions = {
	mode: "cors",
	method: 'GET',
	headers: myHeaders,
    redirect: 'follow'
};
 
let url = `https://api.sportsdata.io/v4/soccer/scores/json/TeamSeasonStats/1/2023?key=${secrets.SPORTDATA_API_TOKEN}`;
const response = Functions.makeHttpRequest({
  url: url,
  params: requestOptions,
});

// Execute the API request (Promise)
const standingsResponse = await response;
if (standingsResponse.error) {
  console.error(standingsResponse.error);
  throw Error("Request failed");
}
//  console.log(`standingsResponse:`,standingsResponse);
let result = JSON.stringify(standingsResponse);
// console.log(`result: `,result)
let data =   result.toString();
// let seasonsArray = [];

let allSeasons = JSON.parse(data).data[0].TeamSeasons.length;
let teamSeasonData = JSON.parse(data).data[0].TeamSeasons;
for (let x = 0; x < allSeasons;x++){
const {StatId,SeasonType,Season,RoundId,TeamId,Name,Team,GlobalTeamId,Possession,Updated,UpdatedUtc,Games,FantasyPoints,FantasyPointsFanDuel,FantasyPointsDraftKings,FantasyPointsYahoo,FantasyPointsMondogoal,Minutes,Goals,Assists,Shots,ShotsOnGoal,YellowCards,RedCards,YellowRedCards,Crosses,TacklesWon,Interceptions,OwnGoals,Fouls,Fouled,Offsides,Passes,PassesCompleted,LastManTackle,CornersWon,BlockedShots,Touches,DefenderCleanSheets,GoalkeeperSaves,GoalkeeperGoalsAgainst,GoalkeeperSingleGoalAgainst,GoalkeeperCleanSheets,GoalkeeperWins,PenaltyKickGoals,PenaltyKickMisses,PenaltyKickSaves,PenaltiesWon,PenaltiesConceded,Score,OpponentScore,Tackles} = teamSeasonData[x];

console.log(StatId,SeasonType,Season,RoundId,TeamId,Name,Team,GlobalTeamId,Possession,Updated,UpdatedUtc,Games,FantasyPoints,FantasyPointsFanDuel,FantasyPointsDraftKings,FantasyPointsYahoo,FantasyPointsMondogoal,Minutes,Goals,Assists,Shots,ShotsOnGoal,YellowCards,RedCards,YellowRedCards,Crosses,TacklesWon,Interceptions,OwnGoals,Fouls,Fouled,Offsides,Passes,PassesCompleted,LastManTackle,CornersWon,BlockedShots,Touches,DefenderCleanSheets,GoalkeeperSaves,GoalkeeperGoalsAgainst,GoalkeeperSingleGoalAgainst,GoalkeeperCleanSheets,GoalkeeperWins,PenaltyKickGoals,PenaltyKickMisses,PenaltyKickSaves,PenaltiesWon,PenaltiesConceded,Score,OpponentScore,Tackles);
};
// for (let x = 0; x < allStandings.length; x++) {
// 	if (Number(allStandings[x].TeamId) === TeamId ) {
// 		let Rank = {Games: allStandings[x].Games, Order: allStandings[x].Order};
// 		ranksArray.push(Rank);
// 		}
// 	}
// 	ranksArray.sort(function(a,b) { 
// 	return parseFloat(Number(b.Games)) - parseFloat(Number(a.Games))
// 	});
// 	rank = ranksArray[0].Order;
	return Functions.encodeString(data);