var loginPage = require('../../Login/Pages/LoginPage.js')
var commonActions = require('../../Common/CommonActions')

describe('Verify Login functionality', function () {

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
    it('Verify successful login', function () {
        loginPage.doLogin()
    })

    it('Verify the after login Url', function () {
        commonActions.waitForUrlToChange(loginPage.PageElements.urlToBeChanged)
    })
    it('Verify Logout Functionality', function () {

        loginPage.Logout()
    })
    it('Verify Login with Google', function () {

        loginPage.loginwithGmail()
    })


});
