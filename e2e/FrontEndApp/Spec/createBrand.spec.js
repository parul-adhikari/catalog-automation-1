let fakeData = require('../../../Utils/FakeData.js');
let commonActions = require('../../../Common/CommonActions');
let createBrandPagePo = require('../PageObject/createBrand.po');
let loginPagepo = require('../PageObject/login.po');
let brandListingPagePo = require('../PageObject/brandListing.po');
let clearData = require('../PageObject/clearAutomationData');
let brandCategoryListingPage = require('../PageObject/brandCategoryListing.po');
let testPagePo = require('../PageObject/createBrandCategory.po');

describe('Verify Brand Creation', function () {

    beforeAll(function (done) {
      // commonActions.waitForUrlToChange(browser.getCurrentUrl() + '/brands')
       //browser.get(browser.params.Url);
        browser.waitForAngular();
       expect(browser.getCurrentUrl()).toContain('/brands')
        done();
    });
    // afterAll(function () {
    //     clearData.ClearCurrentSessionData();
    // });
    it('Verify validation alert in case of all ready existing brand name ', () => {
        //loginPagepo.doLogin('Vibhor.mathur@quovantis.com', 'Quovantis1')
        browser.sleep(5000);
        createBrandPagePo.brandSetup(browser.params.AllreadyExistingBrand, browser.params.WebsiteURLForBrand, browser.params.BrandDescription)
        expect(createBrandPagePo.getErrorDialog().isDisplayed()).toBeTruthy();
        browser.logger.info('Alert present in case of all ready existing brand name');
    })

    it('Verify validation alert in case of wrong formatted website URL ', () => {
        createBrandPagePo.brandSetup(fakeData.randomFirstName + " Automation Brand", fakeData.randomFirstName, browser.params.BrandDescription)
        expect(createBrandPagePo.getErrorDialog().isDisplayed()).toBeTruthy();
        browser.logger.info('Alert present in case of wrong formatted website URL');

    })

    it('Verify Brand creation', () => {
        createBrandPagePo.brandSetup(fakeData.randomFirstName + " Automation Brand", browser.params.WebsiteURLForBrand, browser.params.BrandDescription)
        browser.navigate().to('https://staging.unityinfluence.com/brands')
        commonActions.waitElementToBeVisible(brandListingPagePo.getExistingBrandBox(fakeData.randomFirstName + " Automation Brand"));
        expect(brandListingPagePo.getExistingBrandBox(fakeData.randomFirstName + " Automation Brand").isDisplayed()).toBeTruthy();
        brandListingPagePo.getExistingBrandBox(fakeData.randomFirstName + " Automation Brand").click();
        browser.logger.info('Brand got created with the name ' + fakeData.randomFirstName + " Automation Brand");


    })


})