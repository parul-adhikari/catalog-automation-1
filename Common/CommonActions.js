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


    readingTableData: function readingTableData(tableElement, rowElement, rowHeadingElement) {


        var tabledata = tableElement;

        //Get Rows

        var campaignrow = rowElement;


        //Get cells values

        var rowHeading = rowHeadingElement;

        // expect(cells.get(0).getText().then(function (value) {
        expect(rowHeading.getText().then(function (value) {
            browser.logger.info('Clicking' + ' ' + value + ' Link...')
        }))

        rowHeading.click()

    },

    selectDropdownbyNum: function selectDropdownbyNum(element, optionNum) {
        if (optionNum) {
            var options = element.all(by.tagName('option'))
                .then(function (options) {
                    //  options[optionNum].click();
                    options[optionNum].getText().then(function (value) {
                        browser.logger.info('Selected value is :' + value)
                    })
                    options[optionNum].click()
                });
        }
    },

    selectDropdownbyCssValue: function selectDropdownbyCssValue(selector, item) {
        element(by.cssContainingText('option', 'Vibhor Mathur')).click();
    },


    switchToChildWindow: function switchToChildWindow(childWindowElement) {
        browser.sleep(10000); //This line is important
        var winHandles = browser.getAllWindowHandles();
        winHandles.then(function (handles) {
            var parentWindow = handles[0];
            var popUpWindow = handles[1];
            browser.switchTo().window(popUpWindow);
            childWindowElement.getAttribute('value').then(function (value) {
                browser.logger.info(value)
            }), function (err) {
                browser.logger.error('No email address is configured for influencer' + err)

            }

            browser.switchTo().window(parentWindow);
        })

    },


}


module.exports = commonActions