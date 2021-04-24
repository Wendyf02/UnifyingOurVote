const mongoose = require("mongodb");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");

db.event = require("./event");

module.exports = db;

