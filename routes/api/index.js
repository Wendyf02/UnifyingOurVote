const router = require("express").Router();
const eventRoutes = require("./events");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
// Event routes
router.use("/events", eventRoutes);

module.exports = router;
