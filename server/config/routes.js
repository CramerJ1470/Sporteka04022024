const router = require("../routes");

module.exports = (app) => {
	app.use("/apisnt/user", router.user);

	app.use("/apisnt/transactions", router.transactions);

	app.use("/apisnt/standings",router.standings);

	app.use("/apisnt/clubtokens",router.clubtokens);

	app.use("*", (req, res, next) => {
		// console.log(req.url);
		res.status(500).json({ error: "Route not matching" });
	});
};
