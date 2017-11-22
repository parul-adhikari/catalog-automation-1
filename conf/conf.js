// An example configuration file.

var log4js = require('log4js')
var HTMLReporter = require('protractor-jasmine2-html-reporter')


var reporter = new HTMLReporter(
    {
        savePath: 'C:\\Users\\Ankita Jangra\\eclipse-workspace\\Doodle\\Reports\\',
        takeScreenshots: true,
        takeScreenshotsOnlyOnFailures: true

    })


exports.config = {
    directConnect: true,

    //For reading json File
    //params: require('../Utils/DataFile.json'),


    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',

    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['../testCases/studRegFormTest.js'],
    helpers: ["../node_modules/jasmine-expect/index.js"],

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000
    },


    beforeLaunch: function () {

        log4js.configure({
            appenders: {
                cheeseLogs: { type: 'file', filename: 'cheese.log' },
                console: { type: 'console' }
            },
            categories: {
                cheese: { appenders: ['cheeseLogs'], level: 'error' },
                another: { appenders: ['console'], level: 'trace' },
                default: { appenders: ['console', 'cheeseLogs'], level: 'trace' }
            }
        });
    },
    onPrepare: function () {

        browser.logger = log4js.getLogger('protractorLog4js'),


        jasmine.getEnv().addReporter(
            reporter
        )


        var faker = require("C:\\Users\\Ankita Jangra\\eclipse-workspace\\Doodle\\node_modules\\Faker");
        faker.locale = "en_US"

        browser.params.randomFirstName = faker.Name.firstName()
        browser.params.randomLastName = faker.Name.lastName()
        browser.params.randomEmail = faker.Internet.email();
        browser.params.randomPassword = "1234566"
        browser.params.Grade = "1"
        browser.params.randomDOB = faker.Date.between('2015-01-01', '2015-12-31')
        browser.params.randomStreetAddress = faker.Address.streetAddress()
        browser.params.randomCity = "Adams"
        browser.params.randomZipCode = "01220"
        browser.params.randomSchool = "BARBEE MONTESSORI"


    }
}