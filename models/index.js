const mongoose = require("mongodb");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

module.exports = {
  Event: require("./event"),
  user: require("./user.model")
};
