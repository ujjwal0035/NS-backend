const user = require("../database/DatabaseSchema/user.js");
const users=require("../database/DatabaseSchema/user.js");
const commonLib = require("../Utility/common");

async function registerUser(userDetail) { 

    const isUserExist=await isUserExists(userDetail.email);
    if(isUserExist.length>0){
        throw "User already Exists";
    }
    let response=await testPassword(userDetail.password);
    if(!response){
        throw "Password is in invalid format";
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


    async function testPassword(password) {
        var re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        return re.test(password);
    } 

module.exports = { registerUser }