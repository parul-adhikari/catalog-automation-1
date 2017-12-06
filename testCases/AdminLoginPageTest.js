var adminLoginPage = require('../pages/AdminLoginPage')
var adminHomePage = require('../pages/AdminHomePage')
var commonActions = require('../Common/CommonActions.js')

describe('Verify Unity Admin Login', function () {


    it('Verify Admin successful login', function () {
        browser.logger.info('Launching Unity Admin Page...')
        browser.get('https://api-staging.unityinfluence.com/admin/login/?next=/admin/')
        adminLoginPage.doAdminLogin()

    }),

        it('Verify the after login Url', function () {

            commonActions.waitForUrlToChange(adminLoginPage.PageElements.urlToBeChanged)

        })

})
