const {
    Pool,
    Client
} = require("pg")
const client = new Client()
const jwt = require("jsonwebtoken");



var express = require("express");
var bcrypt = require("bcryptjs");
const [insertUsers, getCredentials, checkUserExist ,getAllRestaurant] = require("../queries/users");

var app = express.Router();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
})

//Register user

app.post('/register', async (req, res) => {
    let User = req.body;
    var salt = bcrypt.genSaltSync(10);
    User.password = bcrypt.hashSync(User.password, salt);
    //Step 1 : Check if username exists
    //Step 2 : insert user if Step 1 returns no rows
    await checkUserExist(pool,User)
        .then(async resp => {
            //Username available, proceed to insert new user
            await insertUsers(pool, User)
            .then(resp => {
                res.send(resp)
            })
            .catch(err => {
                //Insertion failed, send error
                res.send(err)
            })
        })
        .catch(err => {
            //Username taken or some error checking username
            res.send(err)
        });
});
        
    

  //Check login

app.post("/login", async(req,res)=>{
  

    const enteredEmail = req.body.email;
    const enteredPassword = Buffer.from(req.body.password, 'base64').toString('ascii')
    let result = {
        error: true,
        message: "Login failed. Please check username or password",
        token : undefined
    }

    await getCredentials(pool,enteredEmail)
        .then(resp => {
            bcrypt.compare(enteredPassword, resp.data.password ).then((success) => {
                if(success)
                   {
                    jwt.sign({resp} , process.env.JWT_SECRET , (err,token) =>{
                        result.error = false;
                        result.message = "Login success"
                        result.token = token;
                        res.send(result)
                        return
                    });
                   }
                else 
                {
                    res.send(result) 
                    return;
                }
                    
            });
        })
        .catch(err => {
             res.send(err)
            })
})

// Get restraunt info 

app.get("/restaurant" ,async(req,res)=>{

    await getAllRestaurant(pool)
            .then(resp => {
                res.send(resp)
            })
            .catch(err => {
                //
                res.send(err)
            })
}) 
  


    
    //Verify Token
function verifyToken(req,res,next){
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader!== "undefined")
    {
        const bearer = bearerHeader.split(" ")
        const bearerToken = bearer[1];
        req.token = bearerToken ;
        next();
    }
    else{
        res.json("Forbidden Access")
    }
}


module.exports = app;








//token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNwIjp7ImRhdGEiOnsiZW1haWwiOiJhbmFuZC5ibHIyMDAwQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJGs4Y1JTdE5JZDFTaHVBQzB2YTF4WGVQZ0VrazEwRkg3elVOME5ISVNYeFNuejdNb2tQend5In0sImVycm9yIjpmYWxzZSwibWVzc2FnZSI6IlVzZXIgZGV0YWlsZWQgZmV0Y2hlZCJ9LCJpYXQiOjE2MzI3NTkyODZ9.Kcxc5QmPWQ7X9CY8QXTy5c2FIn3UTfQbH2IqHZ3nENA"