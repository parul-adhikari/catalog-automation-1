// An example configuration file.

var log4js = require('log4js')
var HTMLReporter = require('protractor-jasmine2-html-reporter')
var commonActions = require('../Common/CommonActions.js')
//var db = require('../Common/DBConnection')



var reporter = new HTMLReporter(
    {
        savePath: 'C:\\Users\\Ankita Jangra\\eclipse-workspace\\Unity\\Reports\\',
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
        AdminRegression: '../AdminFlowWithExistingInfluencer/Test/MapNewInfluencerTest.js'


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
       /* browser.driver.manage().window().maximize()
        browser.logger.info("Url is loading....");
       browser.get('https://staging.unityinfluence.com/home')*/
       // browser.get('http://localhost:4200/home')

        //Initializing the reports
        jasmine.getEnv().addReporter(
            reporter
        )


    }
}
