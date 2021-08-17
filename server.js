const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const view = require("./controllers/view.js");
const api = require("./controllers/api.js");

const PORT = process.env.PORT || 3000; 

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout", {
    useNewUrlParser: true, 
    useFindAndModify: false,
    useUnifiedTopology: true,
});

app.use(api);
app.use(view);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

