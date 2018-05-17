let commonActions = require('../../../Common/CommonActions');
function userDetailsPage() {


    var nextPasswordButton = $('button[type*="submit"]');
    var firstNameTextBox = $('#first_name');
    var lastNameTextBox = $('#last_name');
    var phoneNumberTextBox = $('#phone_number');
    var toUploadPictureLink = element(by.cssContainingText('.link-button', 'Upload a profile picture'));
    var userDetailPageLabel = element(by.cssContainingText('.sub-info-text', 'Thank you for confirming your account with Unity. Just a few details and you’re ready to go.'))
    var emailTextBox = $("#email")

    this.fillUserDetail = function (firstName, lastName, phoneNumber) {
        commonActions.waitElementToBeVisible(firstNameTextBox)
        firstNameTextBox.clear()
        firstNameTextBox.sendKeys(firstName)
        commonActions.waitElementToBeVisible(lastNameTextBox)
        lastNameTextBox.clear()
        lastNameTextBox.sendKeys(lastName)
        commonActions.waitElementToBeVisible(phoneNumberTextBox)
        phoneNumberTextBox.clear()
        phoneNumberTextBox.sendKeys(phoneNumber)//todo(to genrate number between 0 to 9 by using faker)
        nextPasswordButton.click();
    }

    this.getUserDetailPageLabel = function () {
        commonActions.waitElementToBeVisible(userDetailPageLabel)
        return userDetailPageLabel;

    }
    this.getNextPasswordButton = function () {
        commonActions.waitElementToBeVisible(nextPasswordButton)
        return nextPasswordButton;
    }
    this.getPhoneNumberTextBox = function () {
        commonActions.waitElementToBeVisible(phoneNumberTextBox)
        return phoneNumberTextBox;
    }
    this.getUploadPictureLink = function () {
        commonActions.waitElementToBeVisible(toUploadPictureLink)
        return toUploadPictureLink;
    }

    this.getEmailTextBox= function () {
        commonActions.waitElementToBeVisible(emailTextBox)
        return emailTextBox;

    }


}

module.exports = new userDetailsPage();