let dictionary = require ('../../../Utils/DataFile.js');
let sgpt = require('sg-protractor-tools');



function homePage() {


    this.headerOnHomePage = function () {

        sgpt.scroll.scrollTo(dictionary.loginPage.scrollToSection);
        expect(dictionary.loginPage.topHeaderOnScroll.isDisplayed()).toBe(true);
        browser.logger.info("Home page has top header");

    };


}

module.exports = new homePage();
