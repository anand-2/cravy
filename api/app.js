const express = require('express')
require("dotenv").config()
var app = module.exports = express();
const port = 9000

var index_route = require('./routes/index')
var users_route = require("./routes/users")
var cors = require('cors')

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json());

app.use(function(req,res,next){
  res.append("Access-Control-Allow-Origin","*")
  next()
})
app.use(cors());
app.use('/', index_route);
app.use("/users", users_route);

app.listen(port, () => {
  console.log(`Cravy API listening at http://localhost:${port}`)
})