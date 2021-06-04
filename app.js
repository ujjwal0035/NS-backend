const authRoute=require('./authentication/authRoute');
// const database = require('./database/db.js');
var express = require('express');
var app = express();
var bodyParser = require('body-parser')
require('dotenv').config({path:'./config/config.env'});
app.use(bodyParser.json());
const database=require('./database/db.js');

app.use("/auth",authRoute);



database.connectToDatabase().then(response =>{
    console.log('database connected');
    app.listen(3000, 'localhost', ()=> {
        console.log('App is running 3000 port');
    });
}).catch(error => {
    console.log(error);
});

