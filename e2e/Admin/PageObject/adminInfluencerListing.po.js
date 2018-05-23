let commonActions = require('../../../Common/CommonActions');



function influencerListing() {


    // let addPotentialInfluencerLink = $('.add-row>td>a');
    // let searchInfluencer = $('#lookup_id_campaigninfluencer_set-0-influencer>img');

    let searchTextBox = $('#searchbar');
    let searchButton = $('#changelist-search > div > input[type="submit"]:nth-child(3)');
    let firstInfluencerLinkFromSearchResults = $('#result_list > tbody > tr > td.field-name > a');
    let addNewInfluencerButton = $('#content-main > ul > li > a');

    // let selectedInfluencerName = $('#campaigninfluencer_set-0-influencer_salmonella_label');
    // let compensationBudgetField = $('#id_campaigninfluencer_set-0-compensation_budget');
    // let promotionBudgetField = $('#id_campaigninfluencer_set-0-promotion_budget');
    // let saveAndContinueButton = element(by.name('_continue'));
    // let successMessage = element(by.xpath('//*[@class="success"]'));
    // let errMessageForMandatoryCompensationBudget = element(by.xpath('//*[@class="errorlist"]'));
    // let errMessageWhenBudgetMoreThanUsableBudget = element(by.xpath('//*[@class="errorlist nonfield"]'));
    // let inviteButton = $('#campaigninfluencer_set-1 > td.field-actions > div > button.button.invite-campaign-influencer');
    // let invitedUserInMatchedSection = $('#campaigninfluencer_set-2-0-influencer_salmonella_label > a');
    // let emailIdInAdditionalDetails = $('#campaigninfluencer_set-2-0 > td.field-additional_details > ul > li:nth-child(1) > span');

    // this.getAddPotentialInfluencerLink = function () {
    //
    //     commonActions.waitForElement(addPotentialInfluencerLink);
    //     return addPotentialInfluencerLink;
    // };
    // this.getSearchInfluencerLink = function () {
    //     commonActions.waitForElement(searchInfluencer);
    //     return searchInfluencer;
    // };

    this.getSearchTextBox = function () {
        commonActions.waitForElement(searchTextBox);
        return searchTextBox;

    };
    this.getSearchButton = function () {
        commonActions.waitForElement(searchButton);
        return searchButton;

    };
    this.getFirstInfluencerLinkFromSearchResults = function () {
        commonActions.waitForElement(firstInfluencerLinkFromSearchResults);
        return firstInfluencerLinkFromSearchResults;

    };

    this.getAddNewInfluencerButton = function () {

        commonActions.waitForElement(addNewInfluencerButton);
        return addNewInfluencerButton;

    };

    this.searchForInfluencerAndSelect = function (existingInfluencerName) {
        this.getSearchTextBox().sendKeys(existingInfluencerName);
        this.getSearchButton().click();
        browser.sleep(100);
        this.getFirstInfluencerLinkFromSearchResults().click();

    };

    // this.getSelectedInfluencerName = function () {
    //     commonActions.waitForElement(selectedInfluencerName);
    //     return selectedInfluencerName;
    //
    // };
    // this.getCompensationBudgetField = function () {
    //     commonActions.waitForElement(compensationBudgetField);
    //     return compensationBudgetField;
    //
    // };
    //
    // this.getPromotionBudgetField = function () {
    // commonActions.waitForElement(promotionBudgetField);
    // return promotionBudgetField;
    //
    // };
    //
    // this.getSaveAndContinueButton = function () {
    //     commonActions.waitForElement(saveAndContinueButton);
    //     return saveAndContinueButton;
    //
    // };
    // this.getSuccessMessage = function () {
    //     commonActions.waitForElement(successMessage);
    //     return successMessage;
    //
    // };
    // this.getErrMessageForMandatoryCompensationBudget = function () {
    //     commonActions.waitForElement(errMessageForMandatoryCompensationBudget);
    //     return errMessageForMandatoryCompensationBudget;
    //
    // };
    // this.getErrMessageWhenBudgetMoreThanUsableBudget = function () {
    //     commonActions.waitForElement(errMessageWhenBudgetMoreThanUsableBudget);
    //     return errMessageWhenBudgetMoreThanUsableBudget;
    //
    // };
    //
    // this.getInviteButton = function () {
    //     commonActions.waitForElement(inviteButton);
    //     return inviteButton;
    //
    // };
    //
    // this.getInvitedButtonInMatchedSection = function () {
    //     commonActions.waitForElement(invitedUserInMatchedSection);
    //     return invitedUserInMatchedSection;
    //
    // };
    //
    // this.getEmailIdInAdditionalDetails = function () {
    //     commonActions.waitForElement(emailIdInAdditionalDetails);
    //     return emailIdInAdditionalDetails;
    //
    // };
    //
    //
    // this.addPotentialInfluencerToCampaign = function (existingInfluencerName,compensationBudget,promotionBudget)
    // {
    //
    //     this.getAddPotentialInfluencerLink().click();
    //     this.getSearchInfluencerLink().click();
    //     this.getSearchTextBox().sendKeys(existingInfluencerName);
    //     this.getSearchButton().click();
    //     this.getSelectInfluencerFromList().click();
    //     expect(getSelectedInfluencerName().getText()).toBe(existingInfluencerName);
    //     this.getCompensationBudgetField().sendKeys(compensationBudget);
    //     this.getPromotionBudgetField().sendKeys(promotionBudget);
    //     this.getSaveAndContinueButton().click();
    //
    // }
    //
    // this.invitePotentialInfluencerToCampaign = function ()
    // {
    //
    //     this.getInviteButton().click();
    //
    // }



};


module.exports = new influencerListing();