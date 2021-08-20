
const Workout = require("../models/workout.js");
const router = require("express").Router();

// Get to all workouts
router.get("/workouts", async (req, res) => {
  try {
//  Calculates total duration of all workouts 
    const data = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration",
          },
        },
      },
    ]);
    res.json(data);
  }
  catch (err) { res.json(err); }
});
// Create a new workout
router.post("/workouts", async ({ body }, res) => {
  try {
    const data = Workout.create(body);
  
    res.json(data);
  }
  catch (err) { res.json(err); }
});
// Update a single workout 
router.put("/workouts/:id", async ({ body, params }, res) => {
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
router.get("/workouts/range", (req, res) => {
  Workout.aggregate([
    { $addFields: { totalDuration: { $sum: "$exercises.duration", 
  }, 
}, 
}, 
])
    .sort({ _id: -1 })
    .limit(7)
    .then((data) => { res.json(data); })
    .catch((err) => { res.json(err); });
});

module.exports = router;



// const router = require("express").Router();
// const Workout = require("../models/workout.js");

// //POST route to add new workout
// router.post("/workouts", (req, res) => {
// Workout.create({})
// .then(createdWorkout => {
// res.json(createdWorkout)
// })
// .catch((err) => {
// res.json(err);
// });
// })

// //PUT route to update workout
// router.put("/workouts/:id", ({ body, params }, res) => {
// Workout.findByIdAndUpdate(params.id, 
// {$push: {exercises: body}}, 
// {new: true, runValidators: true})
// .then((myWorkouts) => {
//   res.json(myWorkouts);
// })
// .catch((err) => {
//   res.json(err);
// });
// })

// //Past week of workouts
// router.get('/workouts', (req, res) => {
//     Workout.aggregate([
//       {
//         $addFields: {
//           totalDuration: {
//             $sum: '$exercises.duration',
//           },
//         },
//       },
//     ])
//       .then((myWorkouts) => {
//         res.json(myWorkouts);
//       })
//       .catch((err) => {
//         res.json(err);
//       });
//   });

//   router.get('/workouts/range', (req, res) => {
//     Workout.aggregate([
//       {
//         $addFields: {
//           totalDuration: {
//             $sum: '$exercises.duration',
//           },
//         },
//       },
//     ])
//       .sort({ _id: -1 })
//       .limit(7)
//       .then((myWorkouts) => {
//         console.log(myWorkouts);
//         res.json(myWorkouts);
//       })
//       .catch((err) => {
//         res.json(err);
//       });
//   });

// module.exports = router;
