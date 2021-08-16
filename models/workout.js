const mongoose = require("mongoose");

const workoutSchema = new workoutSchema({
    day: {
//add stuff
    }, 
    exercises: {
//add stuff
    }
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;