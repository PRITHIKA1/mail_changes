var nodemailer = require('nodemailer');
require('dotenv/config')
var transport = nodemailer.createTransport(
    {
        service:'gmail',
        auth:{
            user: process.env.USER,
            pass: process.env.PASSWORD
        }
    }
)
//send out email

module.exports.sendConfirmationEmail = (name, email) => {
    console.log("Check");
    transport.sendMail({
      from: process.env.USER,
      to: email,
      subject: "WELCOME TO ECEA",
      html: `<h1>Email Confirmation</h1>
          <h2>Hello ${name}</h2>
          <p>YOR ACCOUNT HAS BEEN SUCCESFULLY CREATED</p>
          
          </div>`,
    }).catch(err => console.log(err));
  };