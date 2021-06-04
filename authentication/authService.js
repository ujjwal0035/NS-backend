const user = require('../database/DatabaseSchema/user');
const commonLib = require('../Utility/common');
const emailService = require('../Utility/emailService');

async function registerUser(userDetail) {

    const isUserExist = await isUserExists(userDetail.email);
    if (isUserExist) {
        throw "User already Exists";
    }

    let response = await testPassword(userDetail.password);
    if (!response) {
        throw 'Password is in invalid format'
    }

    const encryptedPassword = await commonLib.encryptPassword(userDetail.password);
    userDetail.password = encryptedPassword;

    const result = await user.create(userDetail);

    return result;
}

async function isUserExists(email) {

    return user.findOne({ "email": email }).lean();
}

async function testPassword(password) {
    var re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return re.test(password);
}

async function userLogin(params) {

    if (params.email && params.password) {
        const userDetail = await isUserExists(params.email);

        if (userDetail) {
            let isPasswordSame = await commonLib.decryptPassword(params.password, userDetail.password);
            if (isPasswordSame) {
                return true;
            } else {
                throw 'Password does not match';
            }

        } else {
            throw 'User does not exists';
        }

    } else {
        throw 'Email and password is mandatory';
    }
}
async function generateResetPasswordLink(email) {

    //check if user exists
    const userDetail = await isUserExists(email);
    if (userDetail) {
        const token = commonLib.generateToken();
        const message = "Your reset password link is :" + 'http://localhost:3000/resetPassword?token=' + token;
        const emailResponse = await emailService.sendEmail('neeraj@unthinkable.co', 'RESET PASSWORD LINK', message);

    } else {
        throw 'User does not exists';
    }
}

async function resetPassword(body) {
    //check if user exist or not
    const userDetail = await isUserExists(body.email);
    if (userDetail) {
        //check if token is valid or not
        const tokenStatus = commonLib.verifyToken(body.token);

        if (tokenStatus) {
            //Encrypt the new password
            const encryptedPassword = commonLib.encryptPassword(body.password);
            //Update into database
            const response = await user.updateOne(
                { email: body.email },
                { $set: { password: encryptedPassword } }
            )
            return response;
        }
    }
}


module.exports = {
    registerUser,
    isUserExists,
    testPassword,
    userLogin,
    generateResetPasswordLink,
    resetPassword
}
