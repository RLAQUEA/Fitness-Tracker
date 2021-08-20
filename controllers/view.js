const router = require("express").Router();
const path = require("path");
// User view for exercises
router.get("/exercise", (req, res) => {
res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// User view for stats
router.get("/stats", (req, res) => {
res.sendFile(path.join(__dirname, "../public/stats.html"));
});
    

module.exports = router;