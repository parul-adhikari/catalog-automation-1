require('../testCases/WelcomePageTest.js')

var loginPage = {

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