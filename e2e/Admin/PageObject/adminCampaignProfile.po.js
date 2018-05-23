let commonActions = require('../../../Common/CommonActions');
let adminInfluencerListingPage = require('../PageObject/adminInfluencerListing.po');

function campaignProfile() {
    let campaignIdReadOnly = $('div.form-row.field-id > div > div');
    let campaignNameTextBox = $('#id_name');
    let brandDescriptionTextBox = $('div.form-row.field-brand_description > div > div');
    let paymentReceivedCheckBox = $('#id_payment_received');
    let saveAndContinueButton = element(by.name('_continue'));
    let statusOfCampaign= $('div.form-row.field-status > div > div');

    //Adding influencers to potential list
    let addPotentialInfluencerLink = $('.add-row>td>a');
    let searchInfluencerLink = $('#lookup_id_campaigninfluencer_set-0-influencer > img');
    let selectedInfluencerName = $('#campaigninfluencer_set-0-influencer_salmonella_label');
    let compensationBudgetField = $('#id_campaigninfluencer_set-0-compensation_budget');
    let promotionBudgetField = $('#id_campaigninfluencer_set-0-promotion_budget');
    let successMessage = element(by.xpath('//*[@class="success"]'));
    let errMessageForMandatoryCompensationBudget = element(by.xpath('//*[@class="errorlist"]'));
    let errMessageWhenBudgetMoreThanUsableBudget = element(by.xpath('//*[@class="errorlist nonfield"]'));
    let inviteButton = $('[class="button invite-campaign-influencer"]');
    //let invitedInfluencerNameInInviteSection = $('#campaigninfluencer_set-2-0-influencer_salmonella_label > a');
    let emailIdInAdditionalDetails = $('#campaigninfluencer_set-2-0 > td.field-additional_details > ul > li:nth-child(1) > span');


    this.getCampaignIdOnly = function () {
        commonActions.waitForElement(campaignIdReadOnly);
        return campaignIdReadOnly;
    };
    this.getInvitedInfluencerNameInInviteSection=function (invitedInfluencerNameIndex) {
      commonActions.waitForElement($('#campaigninfluencer_set-2-'+invitedInfluencerNameIndex+'-influencer_salmonella_label > a'));
      return $('#campaigninfluencer_set-2-'+invitedInfluencerNameIndex+'-influencer_salmonella_label > a');
    };

    this.getCampaignNameTextBox = function () {
        commonActions.waitForElement(campaignNameTextBox);
        return campaignNameTextBox;
    };

    this.getBrandDescriptionTextBox = function () {
        commonActions.waitForElement(brandDescriptionTextBox);
        return brandDescriptionTextBox;
    };
    this.getPaymentReceivedCheckBox= function () {
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

    this.adminCampaignProfilePage =function () {

        this.getPaymentReceivedCheckBox().click();
        this.getSaveAndContinueButton().click();

    };

    this.getAddPotentialInfluencerLink = function () {

        commonActions.waitForElement(addPotentialInfluencerLink);
        return addPotentialInfluencerLink;
    };
    this.getSearchInfluencerLink = function (searchInfluencerIndex) {
        commonActions.waitForElement($('#lookup_id_campaigninfluencer_set-'+searchInfluencerIndex+'-influencer > img'));
        return $('#lookup_id_campaigninfluencer_set-'+searchInfluencerIndex+'-influencer > img');
    };
    this.getSelectedInfluencerName = function () {
        commonActions.waitForElement(selectedInfluencerName);
        return selectedInfluencerName;

    };
    this.getCompensationBudgetField = function (compensationBudgetIndex) {
        commonActions.waitForElement($('#id_campaigninfluencer_set-'+compensationBudgetIndex+'-compensation_budget'));
        return $('#id_campaigninfluencer_set-'+compensationBudgetIndex+'-compensation_budget');

    };

    this.getPromotionBudgetField = function (promotionBudgetIndex) {
        commonActions.waitForElement($('#id_campaigninfluencer_set-'+promotionBudgetIndex+'-promotion_budget'));
        return $('#id_campaigninfluencer_set-'+promotionBudgetIndex+'-promotion_budget');

    };

    this.getSaveAndContinueButton = function () {
        commonActions.waitForElement(saveAndContinueButton);
        return saveAndContinueButton;

    };
    this.getSuccessMessage = function () {
        commonActions.waitForElement(successMessage);
        return successMessage;

    };
    this.getErrMessageForMandatoryCompensationBudget = function () {
        commonActions.waitForElement(errMessageForMandatoryCompensationBudget);
        return errMessageForMandatoryCompensationBudget;

    };
    this.getErrMessageWhenBudgetMoreThanUsableBudget = function () {
        commonActions.waitForElement(errMessageWhenBudgetMoreThanUsableBudget);
        return errMessageWhenBudgetMoreThanUsableBudget;

    };

    this.getInviteButton = function () {
        commonActions.waitForElement(inviteButton);
        return inviteButton;

    };

    this.getInvitedButtonInMatchedSection = function (inviteUserButtonIndex) {
        commonActions.waitForElement($('#campaigninfluencer_set-'+inviteUserButtonIndex+'> td.field-actions > div > button.button.invite-campaign-influencer'));
        return $('#campaigninfluencer_set-'+inviteUserButtonIndex+'> td.field-actions > div > button.button.invite-campaign-influencer');

    };

    this.getEmailIdInAdditionalDetails = function () {
        commonActions.waitForElement(emailIdInAdditionalDetails);
        return emailIdInAdditionalDetails;

    };

    this.addPotentialInfluencerToCampaign = function (compensationBudgetIndex,promotionBudgetIndex,compensationBudget,promotionBudget)
    {

        // expect(getSelectedInfluencerName().getText()).toBe(existingInfluencerName);
        this.getCompensationBudgetField(compensationBudgetIndex).clear();
        this.getCompensationBudgetField(compensationBudgetIndex).sendKeys(compensationBudget);
        this.getPromotionBudgetField(promotionBudgetIndex).clear();
        this.getPromotionBudgetField(promotionBudgetIndex).sendKeys(promotionBudget);
        this.getSaveAndContinueButton().click();

    };

    this.markCampaignAsPaymentReceived =function () {

        this.getPaymentReceivedCheckBox().click();
        this.getSaveAndContinueButton().click();

    };

    this.switchToInfluencerListingAndSelectFirstInfluencer=function (influencerName='thor') {
        let winHandles = browser.getAllWindowHandles();
        winHandles.then(function (handles) {
            let parentWindow = handles[0];
            let popUpWindow = handles[1];
            browser.switchTo().window(popUpWindow);





        });

        browser.waitForAngular();
        adminInfluencerListingPage.searchForInfluencerAndSelect(influencerName);




        winHandles.then(function (handles) {
            parentWindow = handles[0];

            browser.switchTo().window(parentWindow)
        });



    }


};

module.exports = new campaignProfile();