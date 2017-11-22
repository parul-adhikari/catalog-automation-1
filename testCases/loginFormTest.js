var page = require('../pages/loginForm.js')


describe('Login test', function () {


    beforeEach(function () {

        browser.ignoreSynchronization = true;
        browser.logger.info("Starting Test With Logs")
        browser.driver.manage().window().maximize()
        browser.get('https://milwaukee.studentnest-lotus.com')
        browser.logger.info("Url Loaded");


    });

    it('Test Register', function () {
        browser.logger.info("Going to Click Register Link")
        page.clickReglink()
        browser.sleep(1000)
    })


    xit('Test Login', function () {

        page.clickLoginbtn('milwaukee_student3', 'student1')

    })


});





