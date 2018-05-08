let brandCategoryListingPagePo = require('../PageObject/brandCategoryListing.po');
let createBrandCategoryPagePo = require('../PageObject/createBrandCategory.po');
let fakeData = require('../../../Utils/FakeData.js');
let clearData = require('../../ClearData/clearAutomationData');
describe('Verify Brand Category Creation', function () {

    beforeAll(function (done) {
        brandCategoryListingPagePo.getAddNewCategoryBox().click();
        done();
    })

    // afterAll(function () {
    //     clearData.currentSessionDataClear();
    // });
    it('Verify validation when category name field is blank, Add Category button should be disabled', () => {
        expect(createBrandCategoryPagePo.getAddCategoryButton().isDisabled).toBe(createBrandCategoryPagePo.getAddCategoryButton().isDisabled);
    });
    it('Verify validation alert in case of already existing brand category name.', () => {
        createBrandCategoryPagePo.CreateBrandCategory(browser.params.AllreadyExistingCategory);
        expect(createBrandCategoryPagePo.getErrorDialog().isDisplayed()).toBeTruthy();

    });

    it('Verify brand category creation', () => {
        createBrandCategoryPagePo.CreateBrandCategory(fakeData.randomFirstName + " Automation Category");
        expect(brandCategoryListingPagePo.getExistingCategoryBox(fakeData.randomFirstName + " Automation Category").isDisplayed()).toBeTruthy();
        brandCategoryListingPagePo.getExistingCategoryBox(browser.params.AllreadyExistingCategory).click();
        expect(brandCategoryListingPagePo.getSubmitCategoryButtonText().getText()).toContain("2");
        brandCategoryListingPagePo.getSubmitCategoryButton().click();

    });


});