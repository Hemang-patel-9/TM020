const nodemailer = require("nodemailer");

const sendingmail = async (req, res) => {

    let userEmail = req.body.email;
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'hemang9705@gmail.com',
            pass: 'xqmt crac bkqw ejyf'
        }
    });

    var mailOptions = {
        from: 'hemang9705@gmail.com',
        to: userEmail,
        subject: 'Sending Email using Node.js',
        text: 'This is demo email!'
    };
    
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
module.exports = sendingmail;