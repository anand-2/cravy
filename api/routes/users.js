const {
    Pool,
    Client
} = require("pg")
const client = new Client()



var express = require("express");
const insertUsers = require("../queries/users");
var app = express.Router();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
})


app.post('/register', async (req, res) => {
    let User = req.body;
    await insertUsers(pool, User)
        .then(resp => {
            res.send(resp)
        })
        .catch(err => {
            res.send(err)
        })
})


module.exports = app;