var commonActions = {


    waitForUrlToChange: function waitForUrlToChange(expectedUrl) {


        const EC = protractor.ExpectedConditions;
        browser.wait(EC.urlContains(expectedUrl), 60000);
        browser.logger.info("Landing on: " + expectedUrl + " Url...")

    },

    pageHeading: function pageHeading(element, expectedPageHeading) {

        expect(element.getText()).toEqual(expectedPageHeading)
        browser.logger.info('Page Heading Verified as:' + expectedPageHeading)

    },


    waitForElement: function waitForElement(element) {

        const EC = protractor.ExpectedConditions;
        browser.wait(EC.presenceOf(element), 10000)
        expect(element.isPresent()).toBeTruthy();
    },


    readingTableData: function readingTableData() {


        var tabledata =element.all(by.xpath('//*[@id=\'content-main\']/div[3]/table/caption'));

        //Get Rows

        var campaignrow =tabledata.all(by.xpath('//*[@class="model-campaign"]'));


        //Get cells values

       var rowHeading = campaignrow.all(by.xpath('//*[contains(text(),"Campaigns")]'));

       // expect(cells.get(0).getText().then(function (value) {
        expect(rowHeading.getText().then(function (value) {
            browser.logger.info('Clicking' +' ' +value + ' Link under Admin Home Page..')
        }))

        rowHeading.click()

    }
}


module.exports = commonActions