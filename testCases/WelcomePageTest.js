var unityWelcomePage = require('../pages/WelcomePage.js')

describe('Verify Unity Welcome page', function () {

    it('Verify welcome page heading', function () {
        unityWelcomePage.pageHeading()
    }),

    it('Verify the Unity Login link', function () {
        unityWelcomePage.clickOnLogin()


    }),

    it('Verify the redirection on Unity Login Page',function ()
    {
        unityWelcomePage.waitForUrlToChange1()
    })

});
