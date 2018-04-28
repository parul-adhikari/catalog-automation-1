let commonActions = require('../../../Common/CommonActions');

function userDetailsPassword() {

    var userDetailPasswordPage = element(by.cssContainingText('.sub-info-text', 'Please use an uppercase and a number or special character'))
    var passwordTextBox = $('#password')
    var termsAndConditionCheckBox = element(by.className('custom-control-indicator'))
    var brandSetupButton = element(by.cssContainingText('.custom-submit', 'Next: Brand setup'))
    var wrongFormattedPassword = element(by.cssContainingText('.error-dialogue', 'Woops! Please make sure you follow the guidelines.'))
    var confirmEmailButton = $('button[class*="next-button"]')

    this.setPassword = function (Password) {
        passwordTextBox.sendKeys(Password)
        browser.waitForAngular();
        browser.actions().mouseMove(termsAndConditionCheckBox).doubleClick().perform();
        brandSetupButton.click()
    }
    this.getWrongFormattedPasswordAlert=function () {
        commonActions.waitElementToBeVisible(wrongFormattedPassword)
        return wrongFormattedPassword;
    }


    this.getTermsAndConditionCheckBox = function () {
        commonActions.waitElementToBeVisible(termsAndConditionCheckBox)
        return termsAndConditionCheckBox;
    }

    this.getBrandSetupButton = function () {
        commonActions.waitElementToBeVisible(brandSetupButton)
        return brandSetupButton;
    }
    this.getUserDetailPasswordPageLabel = function () {
        commonActions.waitElementToBeVisible(userDetailPasswordPage)
        return userDetailPasswordPage;
    }
    this.getConfirmEmailButton=function () {
        commonActions.waitElementToBeVisible(confirmEmailButton)
        return confirmEmailButton;

    }
    this.getPasswordTextBox=function () {
        commonActions.waitElementToBeVisible(passwordTextBox)
        return passwordTextBox;

    }
}

module.exports = new userDetailsPassword();