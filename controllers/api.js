const router = require("express").Router();
const Workout = require("../models/workout.js");
const { route } = require("./view.js");

router.post("/workouts", (req, res) => {
//add stuff
});

router.put("/workouts/:id", ({ body, params }, res) => {
//add stuff
});

module.exports = router;