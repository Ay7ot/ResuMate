const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.AllUsers = require("./user.model.js")(mongoose);
db.resume = require("./userResume.model.js")(mongoose);
db.images = require("./images.model.js")(mongoose);

module.exports = db;
