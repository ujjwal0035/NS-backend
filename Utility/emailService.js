var nodemailer = require("nodemailer");
// var xoauth2 = require('xoauth2');

var smtpTransport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: "neeraj@unthinkable.co", // Your gmail address.
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.CLIENT_REFRESH,
        accessToken: process.env.CLIENT_ACCESS_TOKEN
    }
});



async function sendEmail(recieverId,subject, text) {
    var mailOptions = {
        from: "neeraj@unthinkable.co",
        to: recieverId,
        subject: subject,
        generateTextFromHTML: true,
        html: `<b>${text}</b>`
    };

    let response = await smtpTransport.sendMail(mailOptions);
    smtpTransport.close();
    return response;
}

module.exports = {
    sendEmail
}

