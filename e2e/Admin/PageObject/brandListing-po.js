let dataDictionary = require ('../../../Utils/DataFile.js');

let brandListing = {

    searchForBrandAndClick : function (brand) {

        dataDictionary.searchTextBox.sendKeys(brand);
        dataDictionary.searchButton.click();
        dataDictionary.brandLink.click();
    },

    verifyBrandDetails : function () {

        dataDictionary.brandName.getAttribute('value').then(function (value) {
                expect(value).toEqual(dataDictionary.existingBrand);
                browser.logger.info("Admin has landed on detail page of" + dataDictionary.existingBrand + " brand");
            }
        )
    },

    viewOnAdminLink : function () {
        dataDictionary.viewOnAdminButton.click();
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]).then(function () {
                browser.waitForAngular();
                browser.sleep(5000);
                if (expect(browser.getCurrentUrl()).toContain('content/contentrequest/?brand_id=' + dataDictionary.existingBrandId)) {
                    browser.logger.info("Admin is on content request listing page of the brand");
                }
                ;
            });
        });

    },
}
module.exports = brandListing;
