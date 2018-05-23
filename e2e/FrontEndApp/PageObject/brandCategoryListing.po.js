let commonActions = require('../../../Common/CommonActions');

function BrandCategoryListingPage() {

    var addNewCategoryBox = $('p > span');
    var submitCategoryButton = $('div.container-fluid > form > button');
    var brandCategoryListingPageTitleLabel = $('div.container-fluid > h2 > b');
    var submitCategoryButtonText = $('div.container-fluid > form > button > span');

    this.getAddNewCategoryBox = function () {
        commonActions.waitForElement(addNewCategoryBox);
        return addNewCategoryBox;
    };
    this.getSubmitCategoryButton = function () {

        commonActions.waitForElement(submitCategoryButton);
        return submitCategoryButton;

    };

    this.getBrandCategoryListingPageTitleLabel = function () {
        commonActions.waitForElement(brandCategoryListingPageTitleLabel);
        return brandCategoryListingPageTitleLabel;

    };

    this.getSubmitCategoryButtonText = function () {
        commonActions.waitElementToBeVisible(submitCategoryButtonText);
        return submitCategoryButtonText;

    }


    this.getExistingCategoryBox = function (TextValue) {

        commonActions.waitForElement(element(by.cssContainingText('.image-text.semi-bold', TextValue)));

        return element(by.cssContainingText('.image-text.semi-bold', TextValue))
    }
    this.categoryCountAndSubmitButtonClick = function () {
        this.getSubmitCategoryButtonText()


    }

}


module.exports = new BrandCategoryListingPage();