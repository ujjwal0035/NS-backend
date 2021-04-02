const authRoute=require('./authentication/authRoute');

var express = require('express');
var app = express();
var bodyParser = require('body-parser')
// const mongoose =require('mongoose');
require('dotenv').config({path:'./config/config.env'});
app.use(bodyParser.json());


// app.use(bodyParser.json()); app.use("/auth",authRoute);

app.use("/auth",authRoute);

const database=require('./database/db.js');

database.connectToDatabase().then(response =>{
    console.log('database connected');
    app.listen(3000, 'localhost', function run() {
        console.log('App is running 3000 port');
    });
}).catch(error => {
    console.log(error);
});


// app.get('/start',function(req,res){
//     const responseObj={
//         Name : "Ujjwal Gupta",
//         gender: "Male",
//         age: "21"
//     }
//     res.send(responseObj);
// });
// app.post('/start',function(req,res){
//     console.log(req.body);
//     const responseObj={
//         Name : "Ujjwal Gupta",
//         gender: "Male",
//         age: "21"
//     }
    
//     res.send("This is post request");
//     // res.send(responseObj);
// });
