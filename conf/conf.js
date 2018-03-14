// An example configuration file.

var __dirname = 'E:\\Unity'
var log4js = require('log4js');
var HTMLReporter = require('protractor-jasmine2-html-reporter');
//var commonActions = require('../Common/CommonActions.js');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var handlebars = require('handlebars');
var fs = require('fs');


var reporter = new HTMLReporter(
    {

        savePath: 'E:\\Unity\\Reports',

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
   // specs: ['../e2e/Admin/**/*.spec.js'],
    //specs: ['../e2e/Admin/MapInfluncer/*.spec.js'],
    suites: {

        MySanitySuite:[

            'E:\\Unity\\e2e\\FrontEndApp\\Spec\\Home.spec.js',
            'E:\\Unity\\e2e\\FrontEndApp\\Spec\\Otp.spec.js',
            'E:\\Unity\\e2e\\FrontEndApp\\Spec\\UserDetails.spec.js',
            'E:\\Unity\\e2e\\FrontEndApp\\Spec\\UserDetailsPassword.spec.js',
            'E:\\Unity\\e2e\\FrontEndApp\\Spec\\Login.spec.js',
            'E:\\Unity\\e2e\\FrontEndApp\\Spec\\RegisterWithFacebook.spec.js',
            'E:\\Unity\\e2e\\FrontEndApp\\Spec\\RegisterWithGmail.spec.js'


            ]


    //  AdminRegression: '../AdminFlowWithExistingInfluencer/Test/MapExistInfluencerPageTest.js'
     //   reg: ['../testCases/AdminLoginPageTest.js','../testCases/AdminHomePageTest.js']
       // AdminRegression: '../testCases/AcceptCollaborationPageTest.js'




    },
    helpers: ["../node_modules/jasmine-expect/index.js"],

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        // allScriptsTimeout : 90000
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
        browser.logger.info("Starting Test With Logs");
         browser.driver.manage().window().maximize();
         browser.logger.info("Url is loading....");
      //  browser.get('https://staging.unityinfluence.com/home')



        //Initializing the reports
        jasmine.getEnv().addReporter(
            reporter
        )


    },
    onComplete: function () {
        return new Promise(function (fulfill, reject) {
            console.log('teste')
            var readHTMLFile = function (path, callback) {
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

                service: 'gmail',
                secure: false,
                port: 587,
                auth: {
                    user: 'unitytestuser01@gmail.com', // generated ethereal user
                    pass: 'Test@123'// generated ethereal password
                }
            }));

            readHTMLFile(__dirname + '/Reports/htmlReport.html', function (err, html) {
                console.log(__dirname + 'path')

                var template = handlebars.compile(html);
                var replacements = {
                    username: "vibhu mathur"
                };

                var htmlToSend = template(replacements);
                var mailOptions = {
                    from: '"Ankita" <unitytestuser01@gmail.com>',
                    to: 'unitytestuser01@gmail.com',
                    subject: 'Automation Test Report|UNITY',
                    html: htmlToSend
                };
                smtpTransport.sendMail(mailOptions, function (error, response) {
                    if (error) {
                        console.log(error);
                        callback(error);
                    }
                    fulfill(this.info);

                });
            });

        });
    }


}
