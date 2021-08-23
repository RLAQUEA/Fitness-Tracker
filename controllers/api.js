const Workout = require("../models/workout.js");
const router = require("express").Router();


// Get to all workouts
router.get('/api/workouts', (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration',
        },
      },
    },
  ])
    .then((allWorkouts) => {
      res.json(allWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});
// Create a new workout
router.post('/workouts', async ({ body }, res) => {
  try {
    const data = Workout.create(body);
  
    res.json(data);
  }
  catch (err) { res.json(err); }
});
// Update a single workout 
router.put('/workouts/:id', async ({ body, params }, res) => {
  try{
    const data = await Workout.findByIdAndUpdate(
      { _id: `${params.id}` },
      { $push: { exercises: body } }
    );
    res.json(data);
  }
  catch(err) { res.json(err); }
});

// Gets last 7 days of workouts
router.get('/api/workouts/range', (req, res) => {
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
    .then((allWorkouts) => {
      console.log(allWorkouts);
      res.json(allWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
