const express = require('express')
require("dotenv").config()
var app = module.exports = express();
const port = 5000

var index_route = require('./routes/index')
var users_route = require("./routes/users")


app.use(express.urlencoded({
  extended: true
}))
app.use(express.json());
app.use('/', index_route)
app.use("/users", users_route)

app.listen(port, () => {
  console.log(`Cravy API listening at http://localhost:${port}`)
})