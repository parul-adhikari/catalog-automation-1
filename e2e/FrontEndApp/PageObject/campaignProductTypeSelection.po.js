let commonActions = require('../../../Common/CommonActions');
let campaignDetailsPagePo = require('./campaignDetails.po');

function campaignProductTypeSelection() {


    var productSelectionTypeHeading = $('h2 > b');
    var productSelectionTypeSubHeading = $('div.container-fluid > p');
    var closeModalContinueButton = $('button.btn.btn-primary');
    var closeModalSaveAsDraftButton = $('button.btn.btn-red');
    var closeModalCrossIcon = $('div.exit-link > span');

    //css locators
    //var physicalProductSelectionBox = $('div.col-lg-3.col-md-4.col-6.new-item-box > div);
    var physicalProductTypeSelectionBox = $('[class*="new-item-box"]');
    //var digitalProductSelectionBox = $('div.col-lg-3.col-md-4.col-6.position-relative');
    var digitalProductTypeSelectionBox = $('[class*="position-relative"]');
    var closeWindowButton = $('[class*="close-link"]')

    //text to be matched
    // var productTypeSelectionScreenHeading = 'Select the type of product to promote';
    // var productTypeSelectionScreenSubHeading = 'Choose the type of product you want to promote in this campaign. You will be gifting a sample to the influencer(s) to create content for the campaign.';

    this.getProductSelectionTypeHeading = function () {
        commonActions.waitForElement(productSelectionTypeHeading);
        return productSelectionTypeHeading;
    }
    this.getProductSelectionTypeSubHeading = function () {
        commonActions.waitForElement(productSelectionTypeSubHeading);
        return productSelectionTypeSubHeading;
    }
    this.getPhysicalProductTypeSelectionBox = function () {
        commonActions.waitForElement(physicalProductTypeSelectionBox);
        return physicalProductTypeSelectionBox;

    }
    this.getDigitalProductTypeSelectionBox = function () {
        commonActions.waitForElement(digitalProductTypeSelectionBox);
        return digitalProductTypeSelectionBox;
    }
    this.getCloseWindowButton = function () {
        commonActions.waitForElement(closeWindowButton);
        return closeWindowButton;

    }
    this.getCloseModalContinueButton = function () {
        commonActions.waitForElement(closeModalContinueButton);
        return closeModalContinueButton;

    }
    this.getCloseModalSaveAsDraftButton = function () {
        commonActions.waitForElement(closeModalSaveAsDraftButton);
        return closeModalSaveAsDraftButton;

    }
    this.getCloseModalCrossIcon = function () {
        commonActions.waitForElement(closeModalCrossIcon);
        return closeModalCrossIcon;

    }



    // this.productTypeSelection = function () {
    //     this.getPhysicalProductTypeSelectionBox().click();
    // }

    // this.productTypeSelection = function () {
    //     this.getDigitalProductTypeSelectionBox().click();
    // }


    // this.closeCampaignWindowClick = function () {
    //     this.getCloseWindowButton().click();
    //
    // }
    //
    // this.continueCampaignCreationClick = function () {
    //     this.getCloseModalContinueButton().click();
    //
    // }
    //
    // this.saveCampaignAsDraftClick = function () {
    //     this.getCloseModalSaveAsDraftButton().click();
    // }


}

module.exports = new campaignProductTypeSelection();