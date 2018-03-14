var CommonActions = require('../../../Common/CommonActions');
var fakeData = require('../../../Utils/FakeData.js');


var UploadContent = {

    PageElements: {
//css Locators and xpath Locators
        err_ErrorPageLocator: element(by.css('.error-text>span'))


    },
    page400: function page400() {

        // var flagForPage = false;
        browser.sleep(500)

        this.PageElements.err_ErrorPageLocator.getText().then(function (text) {
            expect(text).toContain('Woops! we');
            browser.logger.info('400 Page')

        })



        this.PageElements.err_ErrorPageLocator.getText().then(function (text) {
            expect(text).toContain('Woops! we');
            browser.logger.info('400 Page is present')


        })

    }


};

module.exports = UploadContent;