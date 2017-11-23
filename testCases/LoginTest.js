var loginPage = require('../pages/LoginPage.js')

describe('Verify Login page', function () {

    it('Verify login page heading', function () {
        loginPage.pageHeading()
    })

    it('Verify successful login', function () {
        loginPage.clickOnLogin()

    })
});
