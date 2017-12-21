// An example configuration file.

var log4js = require('log4js');
var HTMLReporter = require('protractor-jasmine2-html-reporter');
var commonActions = require('../Common/CommonActions.js');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var handlebars = require('handlebars');
var fs = require('fs');



var reporter = new HTMLReporter(
    {
        savePath: 'E:\\Unity\\conf\\Reports',
        takeScreenshots: true,
        takeScreenshotsOnlyOnFailures: true

    })

exports.config = {
    directConnect: true,

    //For reading json File
    params: require('../Utils/DataFile.json'),


    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',

    // Spec patterns are relative to the current working directory when
    // protractor is called.
    // specs: ['../Common/EmailSentConf'],
   // specs: ['../testCases/AdminLoginPageTest'],
    suites: {
    //  AdminRegression: '../AdminFlowWithExistingInfluencer/Test/MapExistInfluencerPageTest.js'
       // reg: '../Admin/Test/Te.js'
        AdminRegression: '../Login/Test/LoginPageTest.js'


    },
    helpers: ["../node_modules/jasmine-expect/index.js"],

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000
    },


    beforeLaunch: function () {

        log4js.configure({
            appenders: {
                cheeseLogs: {type: 'file', filename: 'cheese.log'},
                console: {type: 'console'}
            },
            categories: {
                cheese: {appenders: ['cheeseLogs'], level: 'error'},
                another: {appenders: ['console'], level: 'trace'},
                default: {appenders: ['console', 'cheeseLogs'], level: 'trace'}
            }
        });
    },
    onPrepare: function () {



// For initializing the Console Logs
        browser.logger = log4js.getLogger('protractorLog4js'),

            // For db

       /* browser.logger.info('Connecting to db....')
        db.dbConnection()*/


            //For Url loading...
            browser.ignoreSynchronization = true;
        browser.logger.info("Starting Test With Logs")
        browser.driver.manage().window().maximize()
        browser.logger.info("Url is loading....");
       browser.get('https://staging.unityinfluence.com/home')
       // browser.get('http://localhost:4200/home')

        //Initializing the reports
        jasmine.getEnv().addReporter(
            reporter
        )


    },
    onComplete: function () {
        return new Promise(function (fulfill, reject) {
            console.log('teste')
            var readHTMLFile = function(path, callback) {
                fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
                    if (err) {
                        throw err;
                        callback(err);
                    }
                    else {
                        callback(null, html);
                    }
                });
            };

            smtpTransport = nodemailer.createTransport(smtpTransport({

                service:'gmail',
                secure: false,
                port:587,
                auth: {
                    user: 'vibhor.mathur@quovantis.com', // generated ethereal user
                    pass: 'mys@1307tery'// generated ethereal password
                }
            }));

            readHTMLFile(__dirname + '/Reports/htmlReport.html', function(err, html) {
                console.log(__dirname+'path')

                var template = handlebars.compile(html);
                var replacements = {
                    username: "vibhu mathur"
                };

                var htmlToSend = template(replacements);
                var mailOptions = {
                    from: '"vibhor mathur" <vibhor.mathur@quovantis.com>',
                    to : 'vibhor.mathur@quovantis.com,vib.bbbb@gmail.com',
                    subject : 'test subject',
                    html : htmlToSend
                };
                smtpTransport.sendMail(mailOptions, function (error, response) {
                    if (error) {
                        console.log(error);
                        callback(error);
                    }
                    fulfill(info);

                });
            });

        });
    }


}
