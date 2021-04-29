const bcrypt = require('bcrypt');

async function encryptPassword(plainPassword){
    return bcrypt.hash(plainPassword,10);
}

module.exports={encryptPassword}