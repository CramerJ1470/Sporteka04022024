module.exports = () => {
	return {mongoURI: `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster1.iukjd24.mongodb.net/administrators?retryWrites=true&w=majority`,
	jwtSecret: "secret",};
};
