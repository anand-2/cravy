const {
    Pool,
    Client
} = require("pg")
const client = new Client()



var express = require("express");
var bcrypt = require("bcryptjs");
const [insertUsers, getUserInfo] = require("../queries/users");

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
    var salt = bcrypt.genSaltSync(10);
    User.password = bcrypt.hashSync(User.password, salt);
    await insertUsers(pool, User)
        .then(resp => {
            res.send(resp)
        })
        .catch(err => {
            res.send(err)
        })
})

app.post("/login" , async(req,res)=>{
    const enteredEmail = req.body.email;
    const enteredPassword = req.body.password;

    await getUserInfo(pool,enteredEmail)
        .then(resp => {
            bcrypt.compare(enteredPassword, resp.data.password ).then((success) => {
                if(success)
                    res.send("Logged in")
                else res.send("Login failed")
            });
        })
        .catch(err => {
            res.send(err)
        })

})


module.exports = app;