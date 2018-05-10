let commonActions = require('../../../Common/CommonActions');


function campaignProfile() {
    let campaignIdReadOnly = $('div.form-row.field-id > div > div');
    let campaignNameTextBox = $('#id_name');
    let brandDescriptionTextBox = $('div.form-row.field-brand_description > div > div');
    let paymentReceivedCheckBox = $('#id_payment_received');
    let saveAndContinueButton = element(by.name('_continue'));
    let statusOfCampaign= $('div.form-row.field-status > div > div');

    this.getCampaignIdOnly = function () {
        commonActions.waitForElement(campaignIdReadOnly);
        return campaignIdReadOnly;
    };

    this.getCampaignNameTextBox = function () {
        commonActions.waitForElement(campaignNameTextBox);
        return campaignNameTextBox;
    };

    this.getBrandDescriptionTextBox = function () {
        commonActions.waitForElement(brandDescriptionTextBox);
        return brandDescriptionTextBox;
    };
    this.getPaymentRecivedCheckBox= function () {
        commonActions.waitForElement(paymentReceivedCheckBox);
        return paymentReceivedCheckBox;

    };

    this.getSaveAndContinueButton=function () {
        commonActions.waitForElement(saveAndContinueButton);
        return saveAndContinueButton;

    };
    this.getStatusOfCampaign=function () {

        commonActions.waitForElement(statusOfCampaign);
        return statusOfCampaign;

    }

    this.markCampaignAsPaymentReceived =function () {

        this.getPaymentRecivedCheckBox().click();
        this.getSaveAndContinueButton().click();

    };


};

module.exports = new campaignProfile();