let commonActions = require('../../../Common/CommonActions');


function createInfluencer() {

    let influencerFirstNameTextBox = $('#id_first_name');
    let influencerEmailTextBox = $('#id_email');
    let influencerPageSaveAndContinueButton = $('[name="_continue"]');
    let successMessageAfterAddingInfluencer = $('[class="success"]');


    this.getInfluencerFirstNameTextBox=function () {
        commonActions.waitForElement(influencerFirstNameTextBox);
        return influencerFirstNameTextBox;
    };

    this.getInfluencerEmailTextBox=function () {
        commonActions.waitForElement(influencerEmailTextBox);
        return influencerEmailTextBox;
    };

    this.getInfluencerPageSaveAndContinueButton=function () {
        commonActions.waitForElement(influencerPageSaveAndContinueButton);
        return influencerPageSaveAndContinueButton;

    };

    this.fillDetailsAndClickOnSaveButton=function (firstName,email) {
        this.getInfluencerFirstNameTextBox().sendKeys(firstName);
        this.getInfluencerEmailTextBox().sendKeys(email);
        this.getInfluencerPageSaveAndContinueButton().click();
    };

this.getSuccessMessageAfterAddingInfluencer=function () {
    commonActions.waitForElement(successMessageAfterAddingInfluencer);
    return successMessageAfterAddingInfluencer;

};




};

module.exports = new createInfluencer();