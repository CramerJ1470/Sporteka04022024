const mongoose = require('mongoose');
const config = require('./config');

module.exports = () => {
    return mongoose.connect(config.dbURL, { useNewUrlParser: true, useUnifiedTopology: true },)
    app.use(express.static(path.join(__dirname, "client", "build")));
    if (
    process.env.NODE_ENV === "production" ||
    process.env.NODE_ENV === "staging"
  ) {
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "client", "build", "index.html")); 
    });
  }
  
  app.listen(port, () => {
    console.log("port 8080..");
  });;
};