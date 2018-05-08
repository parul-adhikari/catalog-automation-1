let loginPage = require('../PageObject/login.po');
let commonActions = require('../../../Common/CommonActions');
let fakeData = require('../../../Utils/FakeData.js');
let clearData = require('../../ClearData/clearAutomationData');

describe('Verify Login functionality', function () {

    beforeAll(function (done) {
        browser.logger.info('Loading Login Page')
        browser.get(browser.params.Url);
        done();
    });

    afterAll(function (done) {
        browser.manage().deleteAllCookies();
        clearData.currentSessionDataClear();
        clearData.deleteBrand(fakeData.randomFirstName);
        clearData.deleteUser(fakeData.randomFirstName + '@mailinator.com');

        done();
    });

    it('Blank fields check', function () {
        loginPage.blankLoginCheck();
        expect(loginPage.getLoginButton().isDisabled).toBe(loginPage.getLoginButton().isDisabled);
    });

    it('Wrong credentials check', function () {
        loginPage.wrongCredentials("vibhiff@jsid.com", "12345678");
        expect(loginPage.getErrorMessage().getText()).toContain(loginPage.getStringOfAlertMessageInCaseOfWrongCredentials());

    });

    // xit('Verify Login with Google', function () {
    //
    //     loginPage.loginWithGmail();
    //     expect(browser.getTitle()).toEqual(loginPage.getPageTitleAfterLogin())
    // });

    it('Verify successful login', function () {
        // loginPage.doLogin('vibhor.mathur@quovantis.com', 'Quovantis1')
        loginPage.doLogin(fakeData.randomFirstName + '@mailinator.com', browser.params.ValidPasswordForCustomSignup);
        commonActions.waitForUrlToChange(browser.params.Url + 'brands');
        expect(browser.getCurrentUrl()).toBe(browser.params.Url + 'brands');
    });
    it('Verify the after login Url', function () {
        loginPage.getUrlToBeChanged();
    });
    it('Verify logOut Functionality', function () {
        browser.refresh();
        loginPage.logOut();
        commonActions.waitForUrlToChange(browser.params.Url);
        expect(browser.getCurrentUrl()).toBe(browser.params.Url);
        expect(browser.getTitle()).toBe(loginPage.getPageTitleAfterLogout());
    });


});
