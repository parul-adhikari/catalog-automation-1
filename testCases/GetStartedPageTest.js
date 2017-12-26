var page = require('../pages/GetStartedPage.js')
var commonActions = require('../Common/CommonActions.js')


describe('Login Page Verification', function () {

    it('Verify the page title', function () {
        page.pageTitle()
    }),


        it('Verify Get Started button', function () {

            page.clickGetStartedBtn()

        }),


        it('Verify the redirection after click', function () {
            commonActions.waitForUrlToChange(page.PageElements.urlToBeChanged)


        })


});





