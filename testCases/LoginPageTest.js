var loginPage = require('../pages/LoginPage.js')
var commonActions = require('../Common/CommonActions.js')

describe('Verify Login functionality', function () {

    it('Verify login page heading', function () {
      //  loginPage.checkPageHeading()
        commonActions.pageHeading(loginPage.PageElements.txt_PageHeading,loginPage.PageElements.txt_expectedPageHeading)
    })

    it('Verify successful login', function () {
        loginPage.doLogin()
    })

    it('Verify the after login Url',function () {
        commonActions.waitForUrlToChange(loginPage.PageElements.urlToBeChanged)
    })

});
