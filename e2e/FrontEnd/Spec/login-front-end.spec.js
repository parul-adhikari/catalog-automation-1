let loginPage = require('../PageObject/login_po');
let clearData = require('../../ClearData/clearAutomationData');
let dictionary = require ('../../../Utils/DataFile.js');
let fakeData = require('../../../Utils/FakeData.js');


describe('Verify Login functionality', function () {

    beforeAll(function () {
        browser.get('https://staging.catalog.cc/login');
        // dictionary.dataDictionary.waitForElement(dictionary.loginPage.loginOnHome);
        // dictionary.loginPage.loginOnHome.click();
        // browser.logger.info('Loading Login Page');
    });

    // it('Verify that login button is disabled until all fields are filled', function () {
    //     expect(dictionary.loginPage.loginOrSignUpButton.isDisabled).toBe(dictionary.loginPage.loginOrSignUpButton.isDisabled);
    //     browser.logger.info("Login button is disabled until all fields are filled!")
    // });
    //
    // it('Wrong credentials check', function () {
    //     loginPage.doLogin(fakeData.randomFirstName + "@mailinator.com", "123");
    //     expect(dictionary.loginPage.errorOnLogin.isDisplayed()).toBeTruthy();
    //     browser.logger.info('User entered wrong login credentials!');
    // });

    it('Verify successful login', function () {

        loginPage.doLogin(fakeData.randomFirstName + "@mailinator.com", dictionary.signUpPage.userPassword);
        browser.wait(protractor.ExpectedConditions.urlContains('brands'), 7000);
        browser.logger.info('User successfully logged in!');

        // loginPage.doLogin('anne_laughlin@catalog.cc', 'Qwerty@123');
        // browser.wait(protractor.ExpectedConditions.urlContains('brands'), 7000);
        // browser.logger.info('User successfully logged in!');
    });


});
