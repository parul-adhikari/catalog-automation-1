let commonActions = require('../../../Common/CommonActions');


function physicalProductPage() {
    var pageHeading = $("[class*='head-text']");
    var pageSubHeading = $("[class*='info-sub-text']");
    var productNameTextBox = $('#Product_name');
    var productValueTextBox = $('#poduct_value');
    var shortDescriptionTextBox = $('#short_description');
    var userActionDropDown = $("[formcontrolname*='user_action']");
    var userActionDropDownOption = $('select-dropdown > div > div > ul > li');
    var websiteTextBox = $("#Website");
    var competitiveProductOrBrandTextBox = $("#competitive_products");
    var nextAudienceButton = $("[type*='submit']");
    var closeButton = $("[class*='close-link']");
    var errorDialog = $("div[class*='error-dialog']");

    this.getPageHeading = function () {
        commonActions.waitForElement(pageHeading);
        return pageHeading;
    };
    this.getPageSubHeading = function () {
        commonActions.waitForElement(pageSubHeading);
        return pageSubHeading;
    };
    this.getProductNameTextBox = function () {
        commonActions.waitForElement(productNameTextBox);
        return productNameTextBox;
    };
    this.getProductValueTextBox = function () {
        commonActions.waitForElement(productValueTextBox);
        return productValueTextBox;
    };
    this.getShortDescriptionTextBox = function () {
        commonActions.waitForElement(shortDescriptionTextBox);
        return shortDescriptionTextBox;
    };
    this.getUserActionDropDown = function () {
        commonActions.waitForElement(userActionDropDown);
        return userActionDropDown;
    };

    this.getUserActionDropDownOption = function () {
        commonActions.waitForElement(userActionDropDownOption);
        return userActionDropDownOption;
    }
    this.getWebsiteTextBox = function () {
        commonActions.waitForElement(websiteTextBox);
        return websiteTextBox;
    };

    this.getCompetitiveProductOrBrandTextBox = function () {
        commonActions.waitForElement(competitiveProductOrBrandTextBox);
        return competitiveProductOrBrandTextBox;
    };

    this.getNextAudienceButton = function () {
        commonActions.waitForElement(nextAudienceButton);
        return nextAudienceButton;
    };

    this.getCloseButton = function () {
        commonActions.waitForElement(closeButton);
        return closeButton;
    };

    this.getErrorDialog = function () {
        commonActions.waitElementToBeVisible(errorDialog);
        return errorDialog;

    };

    this.fillPhysicalProductDetails = function (productName, productValue, productDescription, url) {
        this.getProductNameTextBox().clear();

        this.getProductNameTextBox().sendKeys(productName);

        this.getProductValueTextBox().clear();
        this.getProductValueTextBox().sendKeys(productValue);
        this.getShortDescriptionTextBox().clear();
        this.getShortDescriptionTextBox().sendKeys(productDescription);
        this.getUserActionDropDown().click();
        this.getUserActionDropDownOption().click();
        this.getWebsiteTextBox().clear();
        this.getWebsiteTextBox().sendKeys(url);
        this.getNextAudienceButton().click();
    };

};

module.exports = new physicalProductPage();
