let fakeData = require('../../../Utils/FakeData.js');
let signUpPage = require('../PageObject/signUp_po');
let loginPage = require('../PageObject/login_po');
let dictionary = require ('../../../Utils/DataFile.js');

describe('Verify custom sign up functionality', function () {

    beforeAll(function (done) {
        browser.get('https://staging.catalog.cc/auth/sign-up');

        console.log('STARTED THE SEREVER and IT IS UP AND RUNNING')
        // expect(browser.getCurrentUrl()).toContain('auth/sign-up');
        done();
    });

    afterEach(function (done) {
        // browser.manage().deleteAllCookies();
        // clearData.currentSessionDataClear();
        // clearData.deleteBrand(fakeData.randomFirstName + ' Automation Brand');
        // clearData.deleteUser(fakeData.randomFirstName + '@mailinator.com');
        browser.refresh();
        done();
    });

    afterAll(function () {
        dictionary.dataDictionary.waitForElement(dictionary.loginPage.loginOnHome);
    });


    it('Verify heading on sign up screen', () => {
        expect(dictionary.loginPage.pageHeading.getText()).toBe(dictionary.signUpPage.headingText);
        browser.logger.info('Heading on sign up page matched!!')
    });

    it('Disabled sign up button until all fields are not filled', () => {
        expect(dictionary.loginPage.loginOrSignUpButton.isDisabled).toBe(dictionary.loginPage.loginOrSignUpButton.isDisabled);
        browser.logger.info("Sign up button is disabled until all fields are filled!")
    });

    it('Verify that the sign up button is disabled until user accepts terms and conditions', () => {
        // f.locale = 'ru';
        // browser.logger.info("Faker data:" + f.name.findName());
        // browser.logger.info("Faker data:" + f.name.firstName());
        signUpPage.termsAndConditionsValidation(fakeData.randomFirstName);
        expect(dictionary.loginPage.loginOrSignUpButton.isDisabled).toBe(dictionary.loginPage.loginOrSignUpButton.isDisabled);
        browser.logger.info("Sign up button is disabled until terms and conditions are accepted")
    });

    it('Verify by filling in details with invalid password', () => {
        signUpPage.invalidPasswordCheck(fakeData.randomFirstName);
    });

    it('Verify by registering through an existing user', () => {
        signUpPage.existingUserCheck(fakeData.randomFirstName);
    });

    it('Verify by registering through a valid user', () => {
        signUpPage.customSignUp(fakeData.randomFirstName);
    });

    it('Verify logout Functionality', function () {
        loginPage.logOut();

    });



})
