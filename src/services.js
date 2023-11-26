const RAPIDAPI_API_FOOTBALL_KEY =
	require("./configItems.js").RAPIDAPI_API_FOOTBALL_KEY;
	const RAPIDAPI_API_FOOTBALL_KEY_BETA =
	require("./configItems.js").RAPIDAPI_API_FOOTBALL_KEY_BETA;
const RAPIDAPI_ADDRESS = require("./configItems.js").RAPIDAPI_ADDRESS;

/***********************User section******************* */
export const login = async (username, password, applyFunc) => {
	const url = "http://localhost:8090/api/user/login";
	const body = JSON.stringify({ username, password });
	const headers = { "Content-Type": "application/json" };
	const res = await fetch(url, { method: "POST", body, headers });
	if (res.ok) {
		const result = await res.json();
		localStorage.setItem(
			"userData",
			JSON.stringify({
				token: result.token,
				id: result.user._id,
				username: result.user.username,
			})
		);
		console.log(`localStorage: `, localStorage);
		applyFunc(true);
	} else {
		applyFunc(false);
	}
};

export const register = async (username, email, password) => {
	const url = "http://localhost:8090/api/user/register";
	const body = JSON.stringify({ username, email, password });
	const headers = { "Content-Type": "application/json" };
	const res = await fetch(url, { method: "POST", body, headers });
	const result = await res.json();
	return result;
};

export const logout = async () => {
	const url = "http://localhost:8090/api/user/logout";
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
		const result = await response.text();
		const parsedResult = JSON.parse(result).response;
		// data as an object make array

		let array4Cups = Array.from(parsedResult);
		console.log("Cups: ",array4Cups);
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
		const result = await response.text();
		const parsedResult = JSON.parse(result).response;
		// data as an object make array

		let leaguesArray = Array.from(parsedResult);
		console.log("Leagues:", leaguesArray);
	} catch (error) {
		console.error(error);
	}
};

export const getCountries = async (applyFunc) => {
	const url = "https://api-football-v1.p.rapidapi.com/v3/teams/countries";
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key":
			RAPIDAPI_API_FOOTBALL_KEY,
			"X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
		},
	};

	try {
		const response = await fetch(url, options);
		let res = await response.text;
		res.json.then((countries) => {
			applyFunc([...countries]);
		});
		console.log("countries:", res);
	} catch (error) {
		console.error(error);
	}
};
export const getTeams = async (applyFunc) => {
	const url =
		"https://api-football-beta.p.rapidapi.com/teams?league=39&season=2022";
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key":
			RAPIDAPI_API_FOOTBALL_KEY_BETA,
			"X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
		},
	};

	try {
		const response = await fetch(url, options);
		let res = await response.text;
		res.json.then((countries) => {
			applyFunc([...countries]);
		});
		console.log("Teams: ", res);
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
