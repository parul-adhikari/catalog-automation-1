var page = require('../../Login/Pages/GetStartedPage.js')
var commonActions = require('../../Common/CommonActions')


describe('Login Page Verification', function () {

    it('Verify the page title', function () {
        page.pageTitle()
    }),


        it('Verify Get Started button', function () {
            browser.logger.info("Going to Click Get Started button")
            page.clickGetStartedBtn()

        }),


        it('Verify the redirection after click', function () {
         // page.waitForUrlToChange()
            commonActions.waitForUrlToChange(page.PageElements.urlToBeChanged)


        })


});





