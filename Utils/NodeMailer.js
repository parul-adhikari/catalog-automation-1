/**
 * Created by Selenium on 22-12-2015.
 */
var nodemailer = require("nodemailer");

var test = {

    sendEmailTo: function sendEmail() {

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'ankita.jangra@quovantis.com',
                pass: 'ankita@123'
            }
        });

        var mailOptions = mailWithoutAttachment(mailOptions, 'unitytestuser01@gmail.com', 'Report for Test Result',
            'Contains the test result for the smoke test in html file')


        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);

            } else {
                console.log('Email sent: ' + info.response);

            }
            transporter.close();

        });
    }


};

function mailWithoutAttachment(mailOptions,to, subject, text ) {
    mailOptions = {
        from: 'ankita.jangra@quovantis.com',
        to: to,
        subject: subject,
        text: text
    };
    return mailOptions;
}


module.exports = test


