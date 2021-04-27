const mongoose = require("mongoose");
const db = require("../models");
require('dotenv').config()

// This file empties the Events collection and inserts the events below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/sourpatchDB"
);

const eventSeed = [
  {
    name: "Protect our Civil Rights",
    date: new Date(Date.now()),
    location: "Atlanta City Hall",
    link: "https://fairfight.com/georgia-resources/",
    description: "SAVE THE PEOPLE!Ut pellentesque risus sed ex tempus sollicitudin. Quisque suscipit justo lacus, ac dapibus nulla tempor eget. Morbi bibendum mauris ex, vitae laoreet neque tristique ac. Quisque ut tincidunt ex, lobortis faucibus purus. Duis fringilla auctor tempus. Mauris condimentum vehicula nunc et egestas. ",  
  },
  {
    name: "We NEED to Make a Change Rally",
    date: new Date(Date.now()),
    location: "Georgia City Hall",
    link: "https://www.rockthevote.org/",
    description: "What are your opinions on what is currently happening in your community? Let's talk about it. Donec maximus id tortor sed iaculis. Vestibulum tristique eget metus in luctus. In porta et leo posuere facilisis. Vivamus orci lacus, posuere lobortis ligula ac, suscipit venenatis eros. Sed magna purus, venenatis et diam vel, condimentum sollicitudin eros. Donec hendrerit venenatis nulla sit amet pulvinar.",
  },
  {
    name: "Do you Understand your Rights as a Citizen?",
    date: new Date(Date.now()),
    location: "East Point City Hall",
    link: "https://www.georgialegalaid.org/",
    description: "Rights that may come in handy to know at some point. Do you know them? Donec maximus id tortor sed iaculis. Vestibulum tristique eget metus in luctus. In porta et leo posuere facilisis. Vivamus orci lacus, posuere lobortis ligula ac, suscipit venenatis eros. Sed magna purus, venenatis et diam vel, condimentum sollicitudin eros. Donec hendrerit venenatis nulla sit amet pulvinar.",
  },
  {
    name: "What the New Voting Laws Means for you and your family",
    date: new Date(Date.now()),
    location: "Atlanta City Hall",
    link: "https://www.yahoo.com/",
    description: "Let's dig deep and understand how Georgia laws may impact you, your friends, and even your family. Donec maximus id tortor sed iaculis. Vestibulum tristique eget metus in luctus. In porta et leo posuere facilisis. Vivamus orci lacus, posuere lobortis ligula ac, suscipit venenatis eros. Sed magna purus, venenatis et diam vel, condimentum sollicitudin eros. Donec hendrerit venenatis nulla sit amet pulvinar.",
  },
  {
    name: "Sign the Petition against Posuere Facilisis",
    date: new Date(Date.now()),
    location: "Georgia State Mall",
    link: "https://www.google.com/",
    description: "ibero enim, malesuada vel convallis id, interdum a purus. Nam ullamcorper nibh mauris, at condimentum magna posuere sed. Phasellus vulputate elit vitae dui ultrices, vel tempus diam ornare. Nullam non lacus quis nunc scelerisque ullamcorper. Nulla ac faucibus lacus. Donec faucibus vel justo non sodales.",
  },
  {
    name: "",
    date: new Date(Date.now()),
    location: "Atlanta City Hall",
    link: "https://www.aol.com/",
    description: "Quisque ut tincidunt ex, lobortis faucibus purus. Duis fringilla auctor tempus. Mauris condimentum vehicula nunc et egestas. Nunc hendrerit luctus purus, sit amet volutpat diam sagittis id. Donec lorem neque, dictum non sollicitudin at, condimentum quis mauris. Suspendisse potenti.",
  },
];

db.Event
  .remove({})
  .then(() => db.Event.collection.insertMany(eventSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
