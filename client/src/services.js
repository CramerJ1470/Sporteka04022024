import { teamsList } from "./assets/teamsList.js";

const RAPIDAPI_API_FOOTBALL_KEY =
	require("./configItems.js").RAPIDAPI_API_FOOTBALL_KEY;
const RAPIDAPI_API_FOOTBALL_KEY_BETA =
	require("./configItems.js").RAPIDAPI_API_FOOTBALL_KEY_BETA;
const RAPIDAPI_ADDRESS = require("./configItems.js").RAPIDAPI_ADDRESS;
const SPORTMONKS_API_TOKEN = require("./configItems.js").SPORTMONKS_API_TOKEN;

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
/************Leagues Section ***************** */
export const getCups = async (applyFunc) => {
	const url = "https://api-football-v1.p.rapidapi.com/v3/leagues?type=cup";
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": RAPIDAPI_API_FOOTBALL_KEY,
			"X-RapidAPI-Host": RAPIDAPI_ADDRESS,
		},
	};

	try {
		const response = await fetch(url, options);
		await response.json().then((cups) => {
			// console.log("inside cups",cups.response);
			applyFunc([...cups.response]);
		});
	} catch (error) {
		console.error(error);
	}
};

export const getLeagues = async (applyFunc) => {
	const url = "https://api-football-v1.p.rapidapi.com/v3/leagues";
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": RAPIDAPI_API_FOOTBALL_KEY,
			"X-RapidAPI-Host": RAPIDAPI_ADDRESS,
		},
	};

	try {
		const response = await fetch(url, options);
		await response.json().then((leagues) => {
			// console.log("inside leagues", leagues.response);
			applyFunc([...leagues.response]);
		});
	} catch (error) {
		console.error(error);
	}
};

export const getSportmonksLeagues = async (applyFunc) => {
	var myHeaders = new Headers();

	var requestOptions = {
		method: "GET",
		redirect: "follow",
		// headers: {"authorization": "Tl5oZDKYHaVVgKRYWcMsIZFr0K38F2DTgULddkq6kAuLHyfwzdhXae7rLfJB"}
	};

	await fetch(
		`https://soccer.sportmonks.com/api/v2.0/leagues?api_token=${SPORTMONKS_API_TOKEN}`,
		requestOptions
	)
		.then((response) =>(response.text()))
		.then((result) => console.log(result))
		.catch((error) => console.log("error", error));

	// try {
	// 	const response = await fetch(url, options);
	// 	await response.json().then((leagues) => {
	// 		// console.log("inside leagues", leagues.response);
	// 		applyFunc([...leagues.response]);
	// 	});
	// } catch (error) {
	// 	console.error(error);
	// }
};

export const getCountries = async (applyFunc) => {
	const url = "https://api-football-v1.p.rapidapi.com/v3/teams/countries";
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": RAPIDAPI_API_FOOTBALL_KEY,
			"X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
		},
	};

	try {
		const response = await fetch(url, options);
		await response.json().then((countries) => {
			// console.log("inside countries", countries.response);
			applyFunc([...countries.response]);
		});
	} catch (error) {
		console.error(error);
	}
};
export const getTeams = async (applyFunc) => {
	const url = "https://api-football-v1.p.rapidapi.com/v2/teams/league/2";
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": RAPIDAPI_API_FOOTBALL_KEY,
			"X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
		},
	};

	try {
		const response = await fetch(url, options);

		response.json().then((teams) => {
			// console.log("inside teams", teams.api.teams);
			applyFunc([...teams.api.teams]);
		});
	} catch (error) {
		console.error(error);
	}
};

/**********************Cart Section****************************/

export const getCarts = async (applyFunc) => {
	const url = "http://localhost:8090/api/carts";
	const res = await fetch(url);
	res.json().then((carts) => {
		applyFunc([...carts]);
	});
};

export const addCart = async (cart) => {
	const data = JSON.parse(localStorage.getItem("userData"));
	const token = data.token;
	const url = "http://localhost:8090/api/carts";

	const body = cart.body;
	console.log(`addCart body: `, body);
	const headers = {
		"Content-Type": "application/json",
		Authorization: `Bearer ${token}`,
	};
	const res = await fetch(url, { method: "POST", body, headers });
	const result = await res.json();
	return result;
};

export const deleteCart = () => {
	const data = JSON.parse(localStorage.getItem("userData"));
	const token = data.token;
	const url = "http://localhost:8090/api/carts";
	const headers = {
		"Content-Type": "application/json",
		Authorization: `Bearer ${token}`,
	};
	fetch(url, { method: "DELETE", headers });
};

/*******************Order Section ********************* */

export const getOrders = async (applyFunc) => {
	const url = "http://localhost:8090/api/orders";
	const res = await fetch(url);
	console.log(`getOrders res; `, res);
	res.json().then((orders) => {
		applyFunc([...orders]);
	});
};

export const addOrders = async (body) => {
	const { token } = JSON.parse(localStorage.getItem("userData"));

	const url = "http://localhost:8090/api/orders";
	//const item1 = JSON.stringify(item );
	//const userId1 = JSON.stringify( userId);
	body = JSON.stringify(body);
	console.log(`body: `, body);
	const headers = {
		"Content-Type": "application/json",
		Authorization: `Bearer ${token}`,
	};
	const res = await fetch(url, {
		method: "POST",
		body,
		headers,
	});
	const result = await res.json();
	return result;
};

/****************EditCart/Order***********************/
/* export const getEditReview = async (req, res) => {
	// parse the review id from the;
	console.log(req.params);
	let _id = req.params.id;
	// Search database for the review

	const course = await Course.findById(_id);

	res.render("editCourse.hbs", {
		isAuth,
		sessionUser: course.createdBy,
		course,
		_id,
	});
};
 
const postEditCourse = async (req, res) => {
	console.log(`courseSenrOver: `.course);
	let _id = req.params.id;
	const course = await Course.findById(_id);
	course.title = req.body.title;
	course.description = req.body.description;
	course.imageURL = req.body.imageURL;
	if (req.body.isPub == "on") {
		course.isPublic = true;
	} else {
		course.isPublic = false;
	}

	await course.save();
	res.redirect("/");
};

const getDelete = async (req, res) => {
	let _id = req.params.id;
	console.log("_id: ", _id);
	const course = await Course.findById(_id);
	await course.delete(_id);
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
