require('assert');
var sgpt = require('sg-protractor-tools');

var commonActions = {


    waitForUrlToChange: function waitForUrlToChange(expectedUrl) {


        const EC = protractor.ExpectedConditions;
        browser.wait(EC.urlContains(expectedUrl), 10000);
        browser.logger.info("Landing on: " + expectedUrl + " Url...")

    },

    pageHeading: function pageHeading(element, expectedPageHeading) {

        expect(element.getText()).toEqual(expectedPageHeading)
        browser.logger.info('Page Heading Verified as:' + expectedPageHeading)

    },

scrollToElement: function scrollToElement(element) {

    sgpt.scroll.scrollTo(element);
},


    waitForElement: function waitForElement(element) {

        const EC = protractor.ExpectedConditions;
        browser.wait(EC.presenceOf(element), 10000);
        expect(element.isPresent()).toBeTruthy();
    },

    waitElementToBeVisible: function waitElementToBeVisible(element) {
        const EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element), 10000)

    },

    waitElementToBeClickable: function waitElementToBeClickable(element) {
        const EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(element), 10000)

    },

    waitUntilReady: function waitUntilReady(element) {
        return browser.wait(function (element) {
            return element.isPresent().toBeTruthy();
        }, 10000).then(function () {
            return browser.wait(function () {
                return element.isDisplayed()

            }, 10000);
        });


    },


    //this function need to be replaced with above (in future- ready to use now)
    browserWaitForElement: function browserWaitForElement(element) {

        return browser.isElementPresent(element).then(function (result) {
            if (result) {
                return true;
            }
            else {


                browser.logger.error("Element '" + element + "' has not found");

            }
        }, 20000)

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

    }

    ,

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
    }
    ,

    selectDropdownbyCssValue: function selectDropdownbyCssValue(selector, item) {
        element(by.cssContainingText('option', 'Vibhor Mathur')).click();
    }
    ,


    switchToWindow: function switchToWindow(clickedElement, childWindowElement) {
        clickedElement.click().then(function () {
            browser.sleep(500);
            browser.getAllWindowHandles().then(function (handles) {
                parentWindowHandle = handles[0],
                    newWindowHandle = handles[1]; // this is your new window
                browser.switchTo().window(newWindowHandle).then(function () {
                    // fill in the form here
                    expect(browser.getCurrentUrl()).toMatch('');
                });
                browser.switchTo().window(parentWindowHandle)
            });
        });

    },


    selectDropDownWithValue: function (dropDownElement, TimeInMilliseconds, inputValueField, inputValue) {

        browser.waitForAngularEnabled(false);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(dropDownElement), TimeInMilliseconds, " Element Not Found" + element)
        dropDownElement.click()
        if (inputValueField.isEnabled()) {
            // inputValueField.click()
            inputValueField.sendKeys(inputValue)
            browser.sleep(2000)
            browser.actions().sendKeys(protractor.Key.ENTER).perform();
            browser.sleep(2000)

        }

    },

    waitForCheckboxToBeChecked: function waitForCheckboxToBeChecked(element) {

        browser.wait(function () {
            return (element.getAttribute('checked')).then(function (isElementChecked) {
                return (isElementChecked)
            },10000)


        })

    }


}


module.exports = commonActions