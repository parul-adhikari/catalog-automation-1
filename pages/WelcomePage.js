require('../testCases/GetStartedPageTest.js')

var welcomePage = {

    PageElements: {
        txt_PageHeading: element(by.xpath('//*[contains(text(),"Welcome to Unity!")]')),
        expectedPageHeading: "Welcome to Unity!",
        lnk_Login: element(by.xpath('//a[@href="/login"]')),
        urlToBeChanged: 'https://staging.unityinfluence.com/login',

    },


    pageHeading: function pageHeading() {

        expect(this.PageElements.txt_PageHeading.getText()).toEqual(this.PageElements.expectedPageHeading)
        browser.logger.info('Welcome Page Heading Verified as:' + this.PageElements.expectedPageHeading)

    },

    clickOnLogin: function clickOnLogin() {
        expect(this.PageElements.lnk_Login.isPresent()).toBe(true)
        browser.logger.info('Unity Login Link Found')
        this.PageElements.lnk_Login.click().then(function () {
            browser.logger.info('Unity Login Link clicked')

        })


    },


    waitForUrlToChange1: function waitForUrlToChange1() {
        const EC = protractor.ExpectedConditions;
        browser.wait(EC.urlContains(this.PageElements.urlToBeChanged),4000);
        browser.logger.info("Landing on Login page....")

    }

};
module.exports = welcomePage