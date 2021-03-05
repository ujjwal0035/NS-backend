var express = require('express');
var app = express();
var bodyParser = require('body-parser')
const mongoose =require('mongoose');
app.use(bodyParser.json());

const DB_USER = "Ujju";
const PASSWORD = encodeURIComponent('123');
const DB_URL = `mongodb://${DB_USER}:${PASSWORD}@localhost:27017/newtonSchool`;

mongoose.connect(DB_URL).then(()=>{
    console.log("Dataconnection connected successfull");
}).catch((err)=>{
    console.log(err);
})

app.get('/start',function(req,res){
    const responseObj={
        Name : "Ujjwal Gupta",
        gender: "Male",
        age: "21"
    }
    res.send(responseObj);
});
app.post('/start',function(req,res){
    console.log(req.body);
    const responseObj={
        Name : "Ujjwal Gupta",
        gender: "Male",
        age: "21"
    }
    
    res.send("This is post request");
    // res.send(responseObj);
});

app.listen(3000, 'localhost', function run() {
    console.log('App is running 3000 port');
});