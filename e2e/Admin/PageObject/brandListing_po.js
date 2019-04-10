let dictionary = require ('../../../Utils/DataFile.js');
let fakeData = require('../../../Utils/FakeData.js');


function brandListing() {

    this.searchForBrandAndClick = function (brand) {

        dictionary.dataDictionary.searchTextBox.sendKeys(brand);
        dictionary.dataDictionary.searchButton.click();
        dictionary.dataDictionary.brandLink.click();
    };

    this.verifyBrandDetails = function (name) {

        dictionary.dataDictionary.brandName.getAttribute('value').then(function (value) {
                expect(value).toEqual(name);
                browser.logger.info("Admin has landed on detail page of" + name + " brand");
            }
        )
    };

    this.viewOnAdminLink = function () {
        dictionary.dataDictionary.viewOnAdminButton.click();
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]).then(function () {
                browser.waitForAngular();
                browser.sleep(5000);
                if (expect(browser.getCurrentUrl()).toContain('content/contentrequest/?brand_id=')) {
                    browser.logger.info("Admin is on content request listing page of the brand");
                };
            });
        });

    };
}
module.exports = new brandListing()
