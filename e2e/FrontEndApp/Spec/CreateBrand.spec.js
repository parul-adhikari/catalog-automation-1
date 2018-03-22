let fakeData = require('../../../Utils/FakeData.js');
let commonActions = require('../../../Common/CommonActions');
let createBrandPagePo = require('../../../e2e/FrontEndApp/PageObject/CreateBrand.po');
let loginPagepo = require('../../../e2e/FrontEndApp/PageObject/Login.po');
let brandListingPagePo = require('../../../e2e/FrontEndApp/PageObject/BrandListing.po');
let clearData = require('../../../e2e/FrontEndApp/PageObject/ClearAutomationData');
let brandCategoryListingPagePo = require('../../../e2e/FrontEndApp/PageObject/BrandCategoryListing.po');
let testPagePo = require('../../../e2e/FrontEndApp/PageObject/CreateBrandCategory.po');

describe('Verify Brand Creation', function () {

    beforeAll(function (done) {
       //commonActions.waitForUrlToChange(browser.getCurrentUrl() + '/brands')
       browser.get(browser.params.Url);
       // expect(browser.getCurrentUrl()).toContain('/brands')
        browser.waitForAngular();
        done();
    });
    // afterAll(function () {
    //     clearData.ClearCurrentSessionData();
    // });
    it('Verify validation alert in case of all ready existing brand name ', () => {
        loginPagepo.doLogin('Vibhor.mathur@quovantis.com', 'Quovantis1')
        browser.sleep(5000)
        createBrandPagePo.BrandSetup(browser.params.AllreadyExistingBrand, browser.params.WebsiteURLForBrand, browser.params.BrandDescription)
        expect(createBrandPagePo.err_Dailog().isDisplayed()).toBeTruthy();
        browser.logger.info('Alert present in case of all ready existing brand name')
    })

    it('Verify validation alert in case of wrong formatted website URL ', () => {
        createBrandPagePo.BrandSetup(fakeData.randomFirstName + " Automation Brand", fakeData.randomFirstName, browser.params.BrandDescription)
        expect(createBrandPagePo.err_Dailog().isDisplayed()).toBeTruthy();
        browser.logger.info('Alert present in case of wrong formatted website URL')

    })

    it('Verify Brand creation', () => {
        createBrandPagePo.BrandSetup(fakeData.randomFirstName + " Automation Brand", browser.params.WebsiteURLForBrand, browser.params.BrandDescription)
        browser.navigate().to('https://staging.unityinfluence.com/brands')
        commonActions.waitElementToBeVisible(brandListingPagePo.box_ExistingBrand(fakeData.randomFirstName + " Automation Brand"));
        expect(brandListingPagePo.box_ExistingBrand(fakeData.randomFirstName + " Automation Brand").isDisplayed()).toBeTruthy();
        brandListingPagePo.box_ExistingBrand(fakeData.randomFirstName + " Automation Brand").click();
        browser.logger.info('Brand got created with the name ' + fakeData.randomFirstName + " Automation Brand");


    })


})