var LoginPage = require('../PageObject/Login.po');
var commonActions = require('../../../Common/CommonActions');
let fakeData = require('../../../Utils/FakeData.js');
let clearData = require('../../../e2e/FrontEndApp/PageObject/ClearAutomationData')

describe('Verify Login functionality', function () {

    beforeAll(function (done) {
        browser.logger.info('Loading Login Page')
        browser.get(browser.params.Url);
        done()
    });

    afterAll(function (done) {
        //browser.manage().deleteAllCookies();
        clearData.ClearCurrentSessionData();
        clearData.DeleteUser("mailinator");

        done()
    });

    xit('Verify login page heading', function () {
        commonActions.waitElementToBeVisible(LoginPage.PageElements.txt_PageHeading);
        expect(LoginPage.PageElements.txt_PageHeading.getText()).toEqual(LoginPage.PageElements.txt_expectedPageHeading)
    });

    xit('Blank fields check', function () {
        LoginPage.blankLoginCheck();
        expect(LoginPage.PageElements.btn_Login.isDisabled).toBe(LoginPage.PageElements.btn_Login.isDisabled);
    });

    xit('Wrong credentials check', function () {
        LoginPage.wrongCredentials();
        var errAlert = LoginPage.PageElements.errMsg.getText();
        expect(errAlert).toContain(LoginPage.PageElements.alertMessage);

    });

    xit('Verify Login with Google', function () {

        LoginPage.loginwithGmail();
        expect(browser.getTitle()).toEqual(LoginPage.PageElements.PageTitleAfterLogin)
    });

    it('Verify successful login', function () {
        LoginPage.doLogin(fakeData.randomFirstName + '@mailinator.com', browser.params.ValidPasswordForCustomSignup);
        commonActions.waitForUrlToChange(browser.params.Url + '/brands')
        expect(browser.getCurrentUrl()).toBe(browser.params.Url + '/brands')
    });

    it('Verify Logout Functionality', function () {
        browser.refresh();
        LoginPage.Logout();
        expect(browser.getCurrentUrl()).toBe(browser.params.Url+'/')
        expect(browser.getTitle()).toBe(LoginPage.pageTitleAfterLogout());
    });

    xit('Verify the after login Url', function () {
        commonActions.waitForUrlToChange(LoginPage.PageElements.urlToBeChanged)
    })


});
