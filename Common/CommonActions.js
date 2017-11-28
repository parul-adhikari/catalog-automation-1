var commonActions = {


    waitForUrlToChange: function waitForUrlToChange(expectedUrl) {


        const EC = protractor.ExpectedConditions;
        browser.wait(EC.urlContains(expectedUrl), 9000);
        browser.logger.info("Landing on: " + expectedUrl + " Url...")

    },

    pageHeading: function pageHeading(element,expectedPageHeading) {

        expect(element.getText()).toEqual(expectedPageHeading)
        browser.logger.info('Page Heading Verified as:' + expectedPageHeading)

    },


    waitForElement: function waitForElement(element) {

        const  EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element)).then(function () {
            browser.logger.info('Element is visible')

        }),function (err) {
            browser.logger.info('Element is not visible' +err)

        }
    }
}

module.exports = commonActions