let commonActions = require('../../../Common/CommonActions');

function CategoryListingPage() {


    this.box_AddNewCategory = function () {
        commonActions.waitForElement($('p > span'));
        return $('p > span')
    };
    this.btn_SubmitCategory = function () {

        commonActions.waitForElement($('div.container-fluid > form > button'));
        return $('div.container-fluid > form > button')

    };

    this.lbl_BrandCategoryListingPageTitle = function () {
        commonActions.waitForElement($('div.container-fluid > h2 > b'));
        return $('div.container-fluid > h2 > b');

    };

    this.txt_btn_SubmitCategory = function () {
        commonActions.waitElementToBeVisible($('div.container-fluid > form > button > span'));
        return $('div.container-fluid > form > button > span');

    }


    this.box_ExistingCategory = function (TextValue) {

        commonActions.waitForElement(element(by.cssContainingText('.image-text.semi-bold', TextValue)));

        return element(by.cssContainingText('.image-text.semi-bold', TextValue))
    }
    this.CategoryCountAndSubmitButtonClick = function () {
        this.txt_btn_SubmitCategory()


    }

}


module.exports = new CategoryListingPage();