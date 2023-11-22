/***********************User section******************* */

const RAPIDAPI_API_FOOTBALL_KEY =
	require("./configItems.js").RAPIDAPI_API_FOOTBALL_KEY;

const RAPIDAPI_ADDRESS = require("./configItems.js").RAPIDAPI_ADDRESS;
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
export const getLeagues = async (applyFunc) => {
	console.log("key", RAPIDAPI_API_FOOTBALL_KEY);
	const url = "https://api-football-v1.p.rapidapi.com/v3/timezone";
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": RAPIDAPI_API_FOOTBALL_KEY,
			"X-RapidAPI-Host": RAPIDAPI_ADDRESS,
		},
	};

	let resultLeagues = [];
	try {
		const response = await fetch(url, options);
		const result = await response.text();
		const parsedResult = JSON.parse(result).response;
		// data as an object make array

		let array = Array.from(parsedResult);

		for (let x = 0; x < array.length; x++) {
			if (array[x].split("/").length === 2) {
				let [continent, league] = array[x].split("/");
				let resultSplit = { continent: continent, league: league };
				resultLeagues.push(resultSplit);
			} else if (array[x].split("/").length === 3) {
				let [continent, country, league] = array[x].split("/");
				let resultSplit = {
					contenent: continent,
					country: country,
					league: league,
				};
				resultLeagues.push(resultSplit);
			}
		}
		console.log(resultLeagues);
	} catch (error) {
		console.error(error);
	}

	// res.json().then((characters) => {
	// 	applyFunc([...characters]);
	// });
};

export const addCharacter = async (description) => {
	const { id, token } = JSON.parse(localStorage.getItem("userData"));
	const url = "http://localhost:8090/api/character";
	const body = JSON.stringify({ description, author: id });
	const headers = {
		"Content-Type": "application/json",
		Authorization: `Bearer ${token}`,
	};
	const res = await fetch(url, { method: "POST", body, headers });
	const result = await res.json();
	return result;
};

/*******************Movie Section ********************* */
export const getMovies = async (applyFunc) => {
	const url = "http://localhost:8090/api/movie";
	const res = await fetch(url);
	res.json().then((movies) => {
		applyFunc([...movies]);
	});
};

export const addMovie = async (description) => {
	const { id, token } = JSON.parse(localStorage.getItem("userData"));
	const url = "http://localhost:8090/api/movie";
	const body = JSON.stringify({ description, author: id });
	const headers = {
		"Content-Type": "application/json",
		Authorization: `Bearer ${token}`,
	};
	const res = await fetch(url, { method: "POST", body, headers });
	const result = await res.json();
	return result;
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

export const postEditReviews = async (req) => {
	console.log(`reviewsSentOver: `, req);

	var myHeaders = new Headers();
	const { id, token } = JSON.parse(localStorage.getItem("userData"));
	myHeaders.append("Content-Type", "application/json");
	myHeaders.append("Authorization", `Bearer ${token}`);

	var requestOptions = {
		method: "PUT",
		headers: myHeaders,
		body: JSON.stringify(req),
	};
	const { _id } = req;
	console.log(`PER _id: `, _id);

	fetch(`http://localhost:8090/api/user/${id}`, requestOptions)
		.then((response) => response.json())
		.then((result) => console.log(result.text))
		.then((answer) => {
			const { reviewsGiven } = req;
			console.log(`put; `, reviewsGiven);
			answer.reviewsGiven = reviewsGiven;
		});
};

export const postReviews = async (req) => {
	console.log(`reviewsSentOver: `, req.reviews);
	console.log(`movieSentOver: `, req);

	const { _id, reviews } = req;
	console.log(_id);
	console.log(`post reviews: `, reviews);
	var myHeaders = new Headers();
	const { token } = JSON.parse(localStorage.getItem("userData"));
	myHeaders.append("Content-Type", "application/json");
	myHeaders.append("Authorization", `Bearer ${token}`);

	var requestOptions = {
		method: "PUT",
		headers: myHeaders,
		body: JSON.stringify(req),
	};

	console.log(`PER movie_id: `, _id);

	fetch(`http://localhost:8090/api/movie/${_id}`, requestOptions)
		.then((response) => response.json())
		.then((result) => console.log(result.text))
		.then((answer) => {
			const { reviews } = req;
			console.log(`Put; `, reviews);
			answer.reviews = reviews;
		});
};
