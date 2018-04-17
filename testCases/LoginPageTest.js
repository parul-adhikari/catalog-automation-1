var loginPage = require('../pages/LoginPage.js')
var commonActions = require('../Common/CommonActions')

describe('Verify Login functionality', function () {
    
    afterEach(function () {
        browser.manage().deleteAllCookies();
    })

    it('Verify login page heading', function () {
        //  loginPage.checkPageHeading()
        commonActions.pageHeading(loginPage.PageElements.txt_PageHeading, loginPage.PageElements.txt_expectedPageHeading)
    })
    it('Blank fields check', function () {
        loginPage.blankLoginCheck()
    })
    it('Wrong credentials check', function () {
        loginPage.wrongCredentials()
    })

    it('Verify Login with Google', function () {

        loginPage.loginWithGmail()
    })

    it('Verify logOut Functionality', function () {

        loginPage.logOut()
    })

    it('Verify successful login', function () {
        loginPage.doLogin()
    })

    it('Verify the after login Url', function () {
        commonActions.waitForUrlToChange(loginPage.PageElements.urlToBeChanged)
    })




});
