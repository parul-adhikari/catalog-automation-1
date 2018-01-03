var LoginPage = require('./login.po');
var CommonActions = require('../../../Common/CommonActions');

describe('Verify Login functionality', function () {

    beforeAll(function (done) {
        browser.logger.info('Loading Login Page')
        done()
    });

    afterAll(function (done) {
        browser.manage().deleteAllCookies();
        done()
    });

    xit('Verify login page heading', function () {
        CommonActions.waitElementToBeVisible(LoginPage.PageElements.txt_PageHeading);
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

      it('Verify Login with Google', function () {

           LoginPage.loginwithGmail();
          expect(browser.getTitle()).toEqual(LoginPage.PageElements.PageTitleAfterLogin)
       });

       xit('Verify Logout Functionality', function () {

           LoginPage.Logout();
           expect(browser.getTitle()).toBe(LoginPage.PageElements.pageTitleAfterLogout);
       });

       xit('Verify successful login', function () {
           LoginPage.doLogin();
           expect(browser.getCurrentUrl()).toBe('https://staging.unityinfluence.com/brands')
       });

       xit('Verify the after login Url', function () {
           commonActions.waitForUrlToChange(LoginPage.PageElements.urlToBeChanged)
       })


});
