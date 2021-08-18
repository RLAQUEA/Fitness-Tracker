const router = require("express").Router();
const Workout = require("../models/workout.js");

//POST route to add new workout
router.post("/workouts", (req, res) => {
Workout.create({})
.then(createdWorkout => {
res.json(createdWorkout)
})
.catch((err) => {
res.json(err);
});
})

//PUT route to update workout
router.put("/workouts/:id", ({ body, params }, res) => {
Workout.findByIdAndUpdate(params.id, 
{$push: {exercises: body}}, 
{new: true, runValidators: true})
.then((myWorkouts) => {
  res.json(myWorkouts);
})
.catch((err) => {
  res.json(err);
});
})


//Past week of workouts
router.get('/workouts', (req, res) => {
    Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: '$exercises.duration',
          },
        },
      },
    ])
      .then((myWorkouts) => {
        res.json(myWorkouts);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  


  router.get('/workouts/range', (req, res) => {
    Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: '$exercises.duration',
          },
        },
      },
    ])
      .sort({ _id: -1 })
      .limit(7)
      .then((myWorkouts) => {
        console.log(myWorkouts);
        res.json(myWorkouts);
      })
      .catch((err) => {
        res.json(err);
      });
  });

module.exports = router;