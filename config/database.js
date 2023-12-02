const mongoose = require('mongoose');
const config = require('./config');

module.exports = () => {
    console.log(config.dbURL);
    return mongoose.connect(config.dbURL, { useNewUrlParser: true, useUnifiedTopology: true });
};

