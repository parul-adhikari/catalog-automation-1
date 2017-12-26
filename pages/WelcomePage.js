require('../testCases/GetStartedPageTest.js')
var commonActions = require('../Common/CommonActions')

var welcomePage = {

    PageElements: {
        txt_PageHeading: element(by.xpath('//*[contains(text(),"Welcome to Unity!")]')),
        expectedPageHeading: "Welcome to Unity!",
        lnk_Login: element(by.xpath('//a[@href="/auth/login"]')),
        urlToBeChanged: 'https://staging.unityinfluence.com/auth/login',

    },


    clickOnLogin: function clickOnLogin() {
        // expect(this.PageElements.lnk_Login.isPresent()).toBe(true)
        commonActions.waitForElement(this.PageElements.lnk_Login)
        this.PageElements.lnk_Login.click().then(function () {
            browser.logger.info('Unity Login Link clicked')

        })
        expect(browser.getCurrentUrl()).toBe(this.PageElements.urlToBeChanged)


    }

};
module.exports = welcomePage