const user=require("../database/DatabaseSchema/user");

async function registerUser(userDetail) { 
    const result = await user.save(userDetail);
        console.log(result);
        return result;
    }
     
module.exports = { registerUser }