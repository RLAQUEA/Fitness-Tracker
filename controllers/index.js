const router = require("express").Router();
const views = require("./view");

router.use("/", views);

module.exports = router;