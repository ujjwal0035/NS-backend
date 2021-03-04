var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());

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