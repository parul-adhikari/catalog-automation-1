let commonActions = require('../../../Common/CommonActions');
let campaignDashboard = require('../../../e2e/FrontEndApp/PageObject/campaignDashboard.po')


function campaignDetailsPage() {


    var campaignNameTextBox = $('#first_name');
    var campaignLaunchOnDatePicker = $('input[formcontrolname*="launch_on"]');
    var launchDate = $('[class="ngb-dp-day"]');
    var utmCodeCheckBox = $('span.custom-control-indicator');
    var nextProductButton = $('form > button');
    var closeWindowButton = $('[class*="close-link"]');

    var alertInCaseofAlreadyexistingCampaign = $("[class*='error-dialogue']")

    this.getAlert = function () {
        commonActions.waitForElement(alertInCaseofAlreadyexistingCampaign);
        return alertInCaseofAlreadyexistingCampaign;
    }
    this.getCampaignNameTextBox = function () {
        commonActions.waitForElement(campaignNameTextBox);
        return campaignNameTextBox;
    }
    this.getCampaignLaunchOnDatePicker = function () {
        commonActions.waitForElement(campaignLaunchOnDatePicker);
        return campaignLaunchOnDatePicker;
    }
    this.getUtmCodeCheckBox = function () {
        commonActions.waitForElement(utmCodeCheckBox);
        return utmCodeCheckBox;

    }
    this.getNextProductButton = function () {
        commonActions.waitForElement(nextProductButton);
        return nextProductButton;
    }
    this.getCloseWindowButton = function () {
        commonActions.waitForElement(closeWindowButton);
        return closeWindowButton;

    }

    this.getLaunchDate = function () {
        commonActions.waitForElement(launchDate);
        return launchDate;

    }


    this.fillCampaignDetails = function (campaignName) {

        browser.sleep(5000);

        browser.isElementPresent(campaignDashboard.getAddCampaignBox()).then(function (result) {
            if (result) {
                commonActions.waitElementToBeVisible(campaignDashboard.getAddCampaignBox());
                campaignDashboard.getAddCampaignBox().click();
            };
        });

        this.getCampaignNameTextBox().sendKeys(campaignName);
        this.getCampaignLaunchOnDatePicker().click();
        this.getLaunchDate().click();
        this.getNextProductButton().click();
    }
}

module.exports = new campaignDetailsPage();


