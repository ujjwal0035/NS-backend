const users=require("../database/DatabaseSchema/user.js");

async function registerUser(userDetail) { 
    const result = await users.create(userDetail);
        console.log(result);
        return result;
    }
     
module.exports = { registerUser }