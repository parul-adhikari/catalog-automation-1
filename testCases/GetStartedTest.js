var page = require('../pages/GetStartedPage.js')


describe('Login Page Verification', function () {

    it('Verify the page title', function () {
        page.pageTitle()
    }),


        it('Verify Get Started button', function () {
            browser.logger.info("Going to Click Get Started button")
            page.clickGetStartedBtn()

        }),


        it('Verify the redirection after click', function () {
          page.waitForUrlToChange()

        })


});





