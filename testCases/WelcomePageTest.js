var unityWelcomePage = require('../pages/WelcomePage.js')
var commonActions = require('../Common/CommonActions.js')

describe('Verify Unity Welcome page', function () {

    it('Verify welcome page heading', function () {
        commonActions.pageHeading(unityWelcomePage.PageElements.txt_PageHeading, unityWelcomePage.PageElements.expectedPageHeading)
    }),

        it('Verify the Unity Login link', function () {
            unityWelcomePage.clickOnLogin()


        }),

        it('Verify the redirection on Unity Login Page', function () {
            commonActions.waitForUrlToChange(unityWelcomePage.PageElements.urlToBeChanged)
        })

});
