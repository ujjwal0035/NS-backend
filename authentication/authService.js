const user = require("../database/DatabaseSchema/user.js");
const users=require("../database/DatabaseSchema/user.js");
const commonLib = require("../Utility/common");

async function registerUser(userDetail) { 

    const isUserExist=await isUserExists(userDetail.email);
    if(isUserExist.length>0){
        throw "User already Exists";
    }

    const encryptPassword = await commonLib.encryptPassword(userDetail.password);
    userDetail.password=encryptPassword;

    const result = await users.create(userDetail);
        console.log(result);
        return result;
    }
    async function isUserExists(email){
        return user.find({email:email}).lean();
    } 

module.exports = { registerUser }