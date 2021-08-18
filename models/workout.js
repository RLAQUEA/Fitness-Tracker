const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const formatDate = require("../models/formatDate.js")

const workoutSchema = new Schema({
        day: {
        type: Date,
        default: Date.now,
        },
        exercises: {
            type: Array,
            trim: true,
            required: "Enter the type of exercise you'd like:"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter the name of the exercise you'd like:"
        },
        duration: {
            type: Number,
            required: "How long would you like to exercise?"
        },
        weight: {
            type: Number,
            required: "Enter the weight of the rep:"
        },
        reps: {
            type: Number,
            required: "Enter the number of reps:"
        },
        sets: {
            type: Number,
            required: "Enter the number of sets:"
        },
        distance: {
            type: Number,
            required: "Enter the distance of the run:"
        }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;