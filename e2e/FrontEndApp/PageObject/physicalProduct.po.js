let commonActions = require('../../../Common/CommonActions');


function physicalProductPage() {
    var pageHeading = $("[class*='head-text']");
    var pageSubHeading = $("[class*='info-sub-text']");
    var productNameTextBox = $('#Product_name');
    var productValueTextBox = $('#poduct_value');
    var shortDescriptionTextBox = $('#short_description');
    var userActionDropDown = $("[formcontrolname*='user_action']");
    var websiteTextBox = $("#Website");
    var competitiveProductOrBrandTextBox = $("#competitive_products");
    var nextAudienceButton = $("[type*='submit']");
    var closeButton = $("[class*='close-link']");

    this.getPageHeading = function () {
        commonActions.waitForElement(pageHeading)
        return pageHeading;
    };
    this.getPageSubHeading = function () {
        commonActions.waitForElement(pageSubHeading)
        return pageSubHeading;
    };
    this.getProductNameTextBox = function () {
        commonActions.waitForElement(productNameTextBox)
        return productNameTextBox;
    };
    this.getProductValueTextBox = function () {
        commonActions.waitForElement(productValueTextBox)
        return productValueTextBox;
    };
    this.getShortDescriptionTextBox = function () {
        commonActions.waitForElement(shortDescriptionTextBox)
        return shortDescriptionTextBox;
    };
    this.getUserActionDropDown = function () {
        commonActions.waitForElement(userActionDropDown)
        return userActionDropDown;
    };
    this.getWebsiteTextBox = function () {
        commonActions.waitForElement(websiteTextBox)
        return websiteTextBox;
    };

    this.getCompetitiveProductOrBrandTextBox = function () {
        commonActions.waitForElement(competitiveProductOrBrandTextBox)
        return competitiveProductOrBrandTextBox;
    };

    this.getNextAudienceButton = function () {
        commonActions.waitForElement(nextAudienceButton)
        return nextAudienceButton;
    };

    this.getCloseButton = function () {
        commonActions.waitForElement(closeButton)
        return closeButton;
    };
}



