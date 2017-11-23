require('../testCases/GetStartedTest.js')

var login = {

    PageElements: {
        txt_PageHeading: element(by.xpath('//*[contains(text(),"Welcome to Unity!")]')),
        expectedPageHeading: "Welcome to Unity!",
        lnk_Login: element(by.xpath('//*[@class="meta-text"]'))
    },


    pageHeading: function pageHeading() {

        expect(this.PageElements.txt_PageHeading.getText()).toEqual(this.PageElements.expectedPageHeading)
        browser.logger.info('Page Heading Verified as:' + this.PageElements.expectedPageHeading)

    },

clickOnLogin: function clickOnLogin() {
    expect(this.PageElements.lnk_Login.isPresent()).toBe(true);


}
};
module.exports = login