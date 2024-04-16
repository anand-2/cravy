var express = require("express");
var app = express.Router();

app.get('/version', (req, res) => {
  res.send("Cravy - Food ordering and delivery<br>Version 1.0")
})


module.exports = app; 