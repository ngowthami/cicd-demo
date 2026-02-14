const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({"message": "CI/CD is awesome!"})
})

app.get("/welcome", (req, res) => {
    res.json({"message": "Welcome to CI/CD pipeline"})
})



module.exports = app;