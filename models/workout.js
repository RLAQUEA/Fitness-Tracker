const mongoose = require("mongoose");

const workoutSchema = new workoutSchema({
    day: {
    type: DataTypes.STRING, 
    }, 
    exercises: {
    type: DataTypes.STRING,
    }
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;