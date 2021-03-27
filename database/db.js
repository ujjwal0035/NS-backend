const DB_USER = process.env.DB_USERNAME;
const PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);
const DB_URL = `mongodb://${DB_USER}:${PASSWORD}@localhost:27017/newtonSchool`;

const mongoose= require('mongoose');
function connectToDatabase() {

    return mongoose.connect(DB_URL, {useUnifiedTopology: true});
    //     console.log("Dataconnection connected successfull");
    // }).catch((err)=>{
    //     console.log(err);
    // })
}

module.exports = {connectToDatabase};
