require('../testCases/GetStartedPageTest.js')

var welcomePage = {

    PageElements: {
        txt_PageHeading: element(by.xpath('//*[contains(text(),"Welcome to Unity!")]')),
        expectedPageHeading: "Welcome to Unity!",
        lnk_Login: element(by.xpath('//a[@href="/login"]')),
       // urlToBeChanged: 'http://localhost:4200/login',
        urlToBeChanged: 'https://staging.unityinfluence.com/login',

    },


    clickOnLogin: function clickOnLogin() {
        expect(this.PageElements.lnk_Login.isPresent()).toBe(true)
        browser.logger.info('Unity Login Link Found')
        this.PageElements.lnk_Login.click().then(function () {
            browser.logger.info('Unity Login Link clicked')

        })


    }

};
module.exports = welcomePage