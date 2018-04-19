let commonActions = require('../../../Common/CommonActions');

function userDetailsPassword() {

    var userDetailPasswordPage = element(by.cssContainingText('.sub-info-text', 'Please use an uppercase and a number or special character'))
    var passwordTextBox = $('#password')
    var termsAndConditionCheckBox = element(by.className('custom-control-indicator'))
    var brandSetupButton = element(by.cssContainingText('.custom-submit', 'Next: Brand setup'))
    var wrongFormattedPassword = element(by.cssContainingText('.error-dialogue', 'Woops! Please make sure you follow the guidelines.'))
    var btn_ConfirmEmail = $('button[class*="next-button"]')

    this.SetPassword = function (Password) {
        passwordTextBox.sendKeys(Password)
        browser.waitForAngular();
        browser.actions().mouseMove(termsAndConditionCheckBox).doubleClick().perform()
        brandSetupButton.click()
    }
    this.alert_WrongFormattedPassword=function () {
        commonActions.waitElementToBeVisible(wrongFormattedPassword)
        return wrongFormattedPassword;
    }


    this.chk_TermsAndCondition = function () {
        commonActions.waitElementToBeVisible(termsAndConditionCheckBox)
        return termsAndConditionCheckBox;
    }

    this.btn_BrandSetup = function () {
        commonActions.waitElementToBeVisible(brandSetupButton)
        return brandSetupButton;
    }
    this.lbl_OfUserDetailPasswordPage = function () {
        commonActions.waitElementToBeVisible(userDetailPasswordPage)
        return userDetailPasswordPage;
    }
    this.btn_ConfirmEmail=function () {
        commonActions.waitElementToBeVisible(btn_ConfirmEmail)
        return btn_ConfirmEmail;

    }
    this.txt_Password=function () {
        commonActions.waitElementToBeVisible(passwordTextBox)
        return passwordTextBox;

    }
}

module.exports = new userDetailsPassword();