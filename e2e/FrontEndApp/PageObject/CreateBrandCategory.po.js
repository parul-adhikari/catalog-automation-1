let commonActions = require('../../../Common/CommonActions');
let brandCategoryListingPagePo = require('../../../e2e/FrontEndApp/PageObject/BrandCategoryListing.po');

function CreateBrandCategoryModal() {
// Elements Function
    this.btn_AddCategory = function () {

        commonActions.waitForElement($('div.modal-body > div > form > button'))

        return $('div.modal-body > div > form > button')


    }

    this.txt_CategoryName = function () {
        commonActions.waitForElement($('#category_name'))

        return $('#category_name');

    }

    this.btn_Cross = function () {
        commonActions.waitForElement($('div.modal-header > button'))

        return $('div.modal-header > button')
    }

    this.lbl_CategoryModalTitle = function () {
        commonActions.waitForElement(element(by.cssContainingText('div.modal-header > div > h4 > b', 'Add your own category')))
        return element(by.cssContainingText('div.modal-header > div > h4 > b', 'Add your own category'))
    }
    this.err_Dailog = function () {
        commonActions.waitElementToBeVisible($('div.modal-body > div > form > div > div > div > div > div > div'))

        return $('div.modal-body > div > form > div > div > div > div > div > div')
    }
// Functional Function
    this.CreateBrandCategory = function (CategoryName) {
        this.txt_CategoryName().clear();
        this.txt_CategoryName().sendKeys(CategoryName)
        this.btn_AddCategory().click();
    }


}

module.exports = new CreateBrandCategoryModal();