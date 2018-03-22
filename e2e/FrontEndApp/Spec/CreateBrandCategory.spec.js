let brandCategoryListingPagePo = require('../../../e2e/FrontEndApp/PageObject/BrandCategoryListing.po');
let createBrandCategoryPagePo = require('../../../e2e/FrontEndApp/PageObject/CreateBrandCategory.po');
let fakeData = require('../../../Utils/FakeData.js');
describe('Verify Brand Category Creation', function () {

    beforeAll(function (done) {
        brandCategoryListingPagePo.box_AddNewCategory().click();
        done();
    })

    afterAll(function () {
        //clearData.ClearCurrentSessionData();
    });
    it('Verify validation when category name field is blank, Add Category button should be disabled', () => {
        expect(createBrandCategoryPagePo.btn_AddCategory().isDisabled).toBe(createBrandCategoryPagePo.btn_AddCategory().isDisabled);
    });
    it('Verify validation alert in case of already existing brand category name.', () => {
        createBrandCategoryPagePo.CreateBrandCategory(browser.params.AllreadyExistingCategory)
        expect(createBrandCategoryPagePo.err_Dailog().isDisplayed()).toBeTruthy();

    });

    it('Verify brand category creation', () => {
        createBrandCategoryPagePo.CreateBrandCategory(fakeData.randomFirstName + " Automation Category");
        expect(brandCategoryListingPagePo.box_ExistingCategory(fakeData.randomFirstName + " Automation Category").isDisplayed()).toBeTruthy();
        brandCategoryListingPagePo.box_ExistingCategory(browser.params.AllreadyExistingCategory).click();
        expect(brandCategoryListingPagePo.txt_btn_SubmitCategory().getText()).toContain('2');
        brandCategoryListingPagePo.btn_SubmitCategory().click();

    });


});