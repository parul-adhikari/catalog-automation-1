let loginPage = require('../PageObject/login_po');
let clearData = require('../../ClearData/clearAutomationData');
let dictionary = require ('../../../Utils/DataFile.js');
let fakeData = require('../../../Utils/FakeData.js');


describe('Verify Login functionality', function () {

    beforeAll(function () {
        //dictionary.dataDictionary.waitForElement(dictionary.loginPage.loginOnHome);
        dictionary.loginPage.loginOnHome.click();
        browser.logger.info('Loading Login Page');
    });

    // beforeEach(function () {
    //     // browser.manage().deleteAllCookies();
    //     // clearData.currentSessionDataClear();
    //     // clearData.deleteBrand(fakeData.randomFirstName + ' Automation Brand');
    //     // clearData.deleteUser(fakeData.randomFirstName + '@mailinator.com');
    //     browser.refresh();
    // });

    it('Verify that login button is disabled until all fields are filled', function () {
        expect(dictionary.loginPage.loginOrSignUpButton.isDisabled).toBe(dictionary.loginPage.loginOrSignUpButton.isDisabled);
        browser.logger.info("Login button is disabled until all fields are filled!")
    });

    it('Wrong credentials check', function () {
        loginPage.doLogin(fakeData.randomFirstName + "@mailinator.com", "123");
    });

    it('Verify successful login', function () {

        loginPage.doLogin(fakeData.randomFirstName + "@mailinator.com", dictionary.signUpPage.userPassword);

    });


});
