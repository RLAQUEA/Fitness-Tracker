const router = require("express").Router();
const Workout = require("../models/workout.js");

//POST route to add new workout
router.post("/workouts", (req, res) => {
const addExercise = Workout.insertOne({...req.body, data: req.params.id})

if(err) throw err
})
addExercise();
//PUT route to update workout
router.put("/workouts/:id", ({ body, params }, res) => {
const updatedWorkout = Post.update(body, params)
if(updatedWorkout > 0) {
res.status(200).end()
}
else {
res.status(404).end()
}
if(err) throw err
})

//Route to 



module.exports = router;