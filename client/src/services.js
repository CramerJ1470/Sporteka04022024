import { teamsList } from "./assets/teamsList.js";

const RAPIDAPI_API_FOOTBALL_KEY =
	require("./configItems.js").RAPIDAPI_API_FOOTBALL_KEY;
const RAPIDAPI_API_FOOTBALL_KEY_BETA =
	require("./configItems.js").RAPIDAPI_API_FOOTBALL_KEY_BETA;
const RAPIDAPI_ADDRESS = require("./configItems.js").RAPIDAPI_ADDRESS;
const SPORTMONKS_API_TOKEN = require("./configItems.js").SPORTMONKS_API_TOKEN;
const sportmonksteams =
	require("./assets/TeamsPLayersBySeasonId").TeamsPlayerBySeasonId;
const TeamsPlayerBySeasonId =
	require("./assets/TeamsPLayersBySeasonId").TeamsPlayerBySeasonId;
const liveStandingByLeagueData =
	require("./assets/liveStandingByLeague").liveStandingByLeagueData;
const SPORTDATA_API_TOKEN = require("./configItems").SPORTDATA_API_TOKEN;

/***********************User section******************* */
export const login = async (username, password, applyFunc) => {
	const url = "http://localhost:8090/apisnt/user/login";
	const body = JSON.stringify({ username, password });
	const headers = { "Content-Type": "application/json" };

						const res = await fetch(url, { method: "POST", body, headers });
	if (res.ok) {
		const result = await res.json();
		console.log(result);
		localStorage.setItem(
			"userData",
			JSON.stringify({
				token: result.token,
				username: result.username,
				_id: result._id,
			})
		);

		console.log(localStorage.getItem("userData"));

		applyFunc(true);
	} else {
		applyFunc(false);
	}
};

export const register = async (username, password, userType) => {
	const url = "http://localhost:8090/apisnt/user/register";
	const body = JSON.stringify({ username, password, userType });
	const headers = { "Content-Type": "application/json" };
	const res = await fetch(url, { method: "POST", body, headers });
	const result = await res.json();
	return result;
};

export const logout = async () => {
	const url = "http://localhost:8090/apisnt/user/logout";
	const { token } = JSON.parse(localStorage.getItem("userData"));
	const headers = {
		"Content-Type": "application/json",
		Authorization: `Bearer ${token}`,
	};
	const res = await fetch(url, { method: "POST", body: "", headers });
	const result = await res.json();
	localStorage.removeItem("userData");
	return result;
};

export const getVenues = async (applyFunc) => {
	var myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');
	myHeaders.append('Accept', 'application/json');
	
	
	
	var requestOptions = {
		mode: "cors",
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	};
	
	let url = `https://api.sportsdata.io/v4/soccer/scores/json/Venues?key=${SPORTDATA_API_TOKEN}`;
	try {
	
	const response = await fetch(url, requestOptions);
		 const result = await response.json();
		let venues = result;
		
		applyFunc([...venues]);
	} catch (error) {
			console.error(error);
		}
	};
export const getBettingEventsBySeasonUpcomingGames = async () => {
	var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');
myHeaders.append('Accept', 'application/json');

var requestOptions = {
	mode: "cors",
	method: 'GET',
	headers: myHeaders,
    redirect: 'follow'
};
 
let url = `https://api.sportsdata.io/v4/soccer/odds/json/BettingEventsBySeason/1/2024?key=${SPORTDATA_API_TOKEN}`;
const response = fetch (url, requestOptions);

// Execute the API request (Promise)
const standingsResponse = await response;
if (standingsResponse.error) {
  console.error(standingsResponse.error);
  throw Error("Request failed");
}
console.log(`response: `,Array.from(standingsResponse.data)[178]);
const {AwayRotationNumber,AwayTeam,AwayTeamID,AwayTeamScore,BettingEventID,BettingEventType,BettingEventTypeID,
BettingMarkets,
CompetitionId,
Created,
GameID,
GameStatus,
GlobalAwayTeamID,
GlobalGameID,
GlobalHomeTeamID,
HomeRotationNumber,
HomeTeam,
HomeTeamID,
HomeTeamScore,
Name,
Quarter,
Season,
StartDate,
TotalScore,
Updated} = Array.from(standingsResponse.data)[178];
let startDateSplit = StartDate.split("T");
let newStartDateObj = {matchDate:startDateSplit[0], matchTime:startDateSplit[1]};
console.log(`matchDate: `,newStartDateObj.matchDate);
 console.log(`matchTime: `,newStartDateObj.matchTime);
};

export const getFuturesBySeason= async () => {
	var myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');
	myHeaders.append('Accept', 'application/json');
	
	
	
	var requestOptions = {
		mode: "cors",
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	};
	
	let url = `https://api.sportsdata.io/v4/soccer/odds/json/BettingEventsBySeason/1/2024?key=${SPORTDATA_API_TOKEN}`;
	try {
	
	const response = await fetch(url, requestOptions);
		 const result = await response.json();
		let BetSeasonFutures = result;
	return BetSeasonFutures
	} catch (error) {
			console.error(error);
		}
	};

export const getTeams = async (applyFunc) => {
var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');
myHeaders.append('Accept', 'application/json');



var requestOptions = {
	mode: "cors",
	method: 'GET',
	headers: myHeaders,
    redirect: 'follow'
};

let url = `https://api.sportsdata.io/v4/soccer/scores/json/Teams/1?key=${SPORTDATA_API_TOKEN}`;
try {

const response = await fetch(url, requestOptions);
 	const result = await response.json();
	let teams = result;
	
	applyFunc([...teams]);
} catch (error) {
		console.error(error);
	}
};
	
// 	var teams = sportmonksteams.data;
// 	applyFunc([...teams]);
// };

export const getSportmonksPlayers = async (applyFunc) => {
	var players = TeamsPlayerBySeasonId.data;
	applyFunc([...players]);
};


export const getStandings = async (applyFunc) => {
	
var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');
myHeaders.append('Accept', 'application/json');

var requestOptions = {
	mode: "cors",
	method: 'GET',
	headers: myHeaders,
    redirect: 'follow'
};

let url = `https://api.sportsdata.io/v4/soccer/scores/json/Standings/1/2023?key=${SPORTDATA_API_TOKEN}`;
try {

const response = await fetch(url, requestOptions);
 	const result = await response.json();
	let standings = [];
	for (let x=0; x < 20; x++) {standings.push(result[0].Standings[x]);

	}
	
	applyFunc([...standings]);
} catch (error) {
		console.error(error);
	}
};

// .then(response => response.text())
	// .then(result => console.log(result))
	// .catch(error => console.log('error', error));
	// let result = res.json();
	// console.log(`result:` ,result.data)
	// let currentTeam =result.data.filter((item) => {
	// 	if (item.participant_id === team_id) {
	// 		return item;
	// 	}
	// });
	// let position = currentTeam[0].position;
	// console.log(`position: `, position);
	

	//   let multiplier = 1;
	  

	//   if (position > 0 && position < 6) {
	// 	  multiplier = 8;
	//   } else if (position > 5 && position < 11) {
	// 	  multiplier = 7;
	//   } else if (position > 10 && position < 16) {
	// 	  multiplier = 7;
	//   } else if (position > 15 && position < 21) {
	// 	  multiplier = 6;
	//   }

	//   let value = (38 * 50 * capacity * multiplier) / 1000000;
	  
	//   return value
	  


/******************* Countries Section **********************/
// export const getCountries = async (applyFunc) => {
// 	const url = "https://api-football-v1.p.rapidapi.com/v3/teams/countries";
// 	const options = {
// 		method: "GET",
// 		headers: {
// 			"X-RapidAPI-Key": RAPIDAPI_API_FOOTBALL_KEY,
// 			"X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
// 		},
// 	};

// 	const response = await fetch(url, options);
// 	await response.json().then((countries) => {
// 		// console.log("inside countries", countries.response);
// 		applyFunc([...countries.response]);
// 	});
// };
// export const getTeams = async (applyFunc) => {
// 	const url = "https://api-football-v1.p.rapidapi.com/v2/teams/league/2";
// 	const options = {
// 		method: "GET",
// 		headers: {
// 			"X-RapidAPI-Key": RAPIDAPI_API_FOOTBALL_KEY,
// 			"X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
// 		},
// 	};

// 	try {
// 		const response = await fetch(url, options);

// 		response.json().then((teams) => {
// 			// console.log("inside teams", teams.api.teams);
// 			applyFunc([...teams.api.teams]);
// 		});
// 	} catch (error) {
// 		console.error(error);
// 	}
// };


/*******************Infor Section ********************* */

export const getClubTokens = async (applyFunc) => {
	const url = "http://localhost:8090/apisnt/clubtokens";
	const res = await fetch(url);
	console.log(`clubtokens: `, res);
	res.json().then((info) => {
		applyFunc([...info]);
	});
};

// export const addInfo = async (body) => {
// 	const { token } = JSON.parse(localStorage.getItem("userData"));

// 	const url = "http://localhost:8090/api/info";
// 	//const item1 = JSON.stringify(item );
// 	//const userId1 = JSON.stringify( userId);
// 	body = JSON.stringify(body);
// 	console.log(`body: `, body);
// 	const headers = {
// 		"Content-Type": "application/json",
// 		Authorization: `Bearer ${token}`,
// 	};
// 	const res = await fetch(url, {
// 		method: "POST",
// 		body,
// 		headers,
// 	});
// 	const result = await res.json();
// 	return result;
// };

/****************Edit Info***********************/
/* export const getEditInfo = async (req, res) => {
	// parse the review id from the;
	console.log(req.params);
	let _id = req.params.id;
	// Search database for the info

	const info = await Info.findById(_id);

	res.render("editInfo.hbs", {
		isAuth,
		sessionUser: info.createdBy,
		info,
		_id,
	});
};
 
const postEditInfo = async (req, res) => {
	console.log(`infoSenrOver: `,info);
	let _id = req.params.id;
	const info = await Info.findById(_id);
	info.title = req.body.title;
	info.description = req.body.description;
	info.imageURL = req.body.imageURL;
	if (req.body.isPub == "on") {
		info.isPublic = true;
	} else {
		info.isPublic = false;
	}

	await info.save();
	res.redirect("/");
};

const getDelete = async (req, res) => {
	let _id = req.params.id;
	console.log("_id: ", _id);
	const info = await Info.findById(_id);
	await info.delete(_id);
	res.redirect("/");
};
*/
/**************************Reviews********************/
/* post to User and Movie  */
/* get user reviewsGiven   */
/* get movie reviews		*/
/*							*/

export const getUser = async (userId) => {
	const userData = JSON.parse(localStorage.getItem("userData"));
	console.log(`userData: `, userData);
	return userData;
};

//
