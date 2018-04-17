let loginPage = require('../PageObject/login.po');
let commonActions = require('../../../Common/CommonActions');
let fakeData = require('../../../Utils/FakeData.js');
let clearData = require('../PageObject/clearAutomationData')

describe('Verify Login functionality', function () {

    beforeAll(function (done) {
        browser.logger.info('Loading Login Page')
        browser.get(browser.params.Url);
        done();
    });

    afterAll(function (done) {
        //browser.manage().deleteAllCookies();
        clearData.currentSessionDataClear();
        clearData.deleteBrand(fakeData.randomFirstName)
        clearData.deleteUser(fakeData.randomFirstName + '@mailinator.com');
        done();
   });

    xit('Blank fields check', function () {
        loginPage.blankLoginCheck();
        expect(loginPage.getLoginButton().isDisabled).toBe(loginPage.getLoginButton().isDisabled);
    });

    xit('Wrong credentials check', function () {
        loginPage.wrongCredentials();
        expect(loginPage.getErrorMessage().getText()).toContain(loginPage.getAlertMessage());

    });

    xit('Verify Login with Google', function () {

        loginPage.loginWithGmail();
        expect(browser.getTitle()).toEqual(loginPage.getPageTitleAfterLogin())
    });

    it('Verify successful login', function () {
       // loginPage.doLogin('vibhor.mathur@quovantis.com', 'Quovantis1')
         loginPage.doLogin(fakeData.randomFirstName + '@mailinator.com', browser.params.ValidPasswordForCustomSignup);
        commonActions.waitForUrlToChange(browser.params.Url + '/brands')
        expect(browser.getCurrentUrl()).toBe(browser.params.Url + '/brands')
    });

    xit('Verify logOut Functionality', function () {
        browser.refresh();
        loginPage.logOut();
        expect(browser.getCurrentUrl()).toBe(browser.params.Url + '/')
        expect(browser.getTitle()).toBe(loginPage.getPageTitleAfterLogout());
    });

    xit('Verify the after login Url', function () {
        loginPage.getUrlToBeChanged();
    })


});
