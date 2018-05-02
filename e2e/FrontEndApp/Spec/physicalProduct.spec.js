let physicalProductPagePo = require('../PageObject/physicalProduct.po');
let clearData = require('../PageObject/clearAutomationData');
let faker = require('faker');
var productName = faker.Name.firstName();

describe('Verify Physical Product Creation', function () {

    beforeAll(function (done) {
        // commonActions.waitForUrlToChange(browser.getCurrentUrl() + '/brands')
        //browser.get(browser.params.Url);
        browser.waitForAngular();
        //expect(browser.getCurrentUrl()).toContain('/campaigns');
        done();
    });

    it('Verify disabled Next:Audience button until product name field is filled', () => {

        physicalProductPagePo.fillPhysicalProductDetails("", browser.params.physicalProductValue, browser.params.physicalProductDescription, browser.params.websiteUrlForPhysicalProduct);
        browser.sleep(1000);
        expect(physicalProductPagePo.getNextAudienceButton().isEnabled()).toBe(false);
    });
    it('Verify validation alert in case of wrong formatted website URL', () => {
        physicalProductPagePo.fillPhysicalProductDetails(browser.params.physicalProductName, browser.params.physicalProductValue, browser.params.physicalProductDescription, "gyfuyf");
        browser.sleep(1000);
        expect(physicalProductPagePo.getErrorDialog().isDisplayed()).toBeTruthy();
        browser.logger.info('Alert present in case of wrong formatted website URL');
    });
    it('Verify successful physical product creation', () => {
        physicalProductPagePo.fillPhysicalProductDetails(productName + " " + browser.params.physicalProductName, browser.params.physicalProductValue, browser.params.physicalProductDescription, browser.params.websiteUrlForPhysicalProduct);
        browser.logger.info("Physical product successfully created");
    });


});
