let commonActions = require('../../../Common/CommonActions');
let brandCategoryListingPagePo = require('./brandCategoryListing.po');

function createBrandCategoryModal() {
// Elements Function
    var addCategoryButtton = $('div.modal-body > div > form > button');
    var categoryNameText = $('#category_name');
    var crossButton = $('div.modal-header > button');
    var errorDialog = $('div.modal-body > div > form > div > div > div > div > div > div');


    this.getAddCategoryButton = function () {

        commonActions.waitForElement(addCategoryButtton)

        return addCategoryButtton;


    }

    this.getCategoryNameText = function () {
        commonActions.waitForElement(categoryNameText)

        return categoryNameText;

    }

    this.getCrossButton = function () {
        commonActions.waitForElement(crossButton)

        return crossButton;
    }

    this.getCategoryModalTitleText = function () {
        commonActions.waitForElement(element(by.cssContainingText('div.modal-header > div > h4 > b', 'Add your own category')))
        return element(by.cssContainingText('div.modal-header > div > h4 > b', 'Add your own category'));
    }
    this.getErrorDialog = function () {
        commonActions.waitElementToBeVisible(errorDialog)
        return errorDialog;
    }
// Functional Function
    this.CreateBrandCategory = function (categoryName) {
        this.getCategoryNameText().clear();
        this.getCategoryNameText().sendKeys(categoryName);
        this.getAddCategoryButton().click();
    }


}

module.exports = new createBrandCategoryModal();