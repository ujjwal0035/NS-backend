var nodemailer = require("nodemailer");

// var smtpTransport = nodemailer.createTransport("SMTP", {
//   service: "Gmail",
//   auth: {
//     XOAuth2: {
//       user: "ujjwalkumar.0035@gmail.com", // Your gmail address.
//                                             // Not @developer.gserviceaccount.com
//       clientId: process.env.CLIENT_ID,
//       clientSecret: process.env.CLIENT_SECRET,
//       refreshToken: process.env.CLIENT_REFRESH
//     }
//   }
// });

var smtpTransport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: "ujjwalkumar.0035@gmail.com", // Your gmail address.
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.CLIENT_REFRESH,
        accessToken: process.env.CLIENT_ACCESS_TOKEN
    }
}); 

async function sendEmail(recieverId,text){
    var mailOptions = {
        from: "ujjwalkumar.0035@gmail.com",
        to: recieverId,
        subject: "Newton school Node project",
        generateTextFromHTML: true,
        html: `<b>${text}</b>`
      };

      
      let response = await smtpTransport.sendEmail(mailOptions);
      smtpTransport.close();
      return response;

}

module.exports={
    sendEmail
}


