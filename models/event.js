const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  location: { type: String, required: false },
  link: { type: String, required: false },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
