let commonActions = require('../../../Common/CommonActions');

function UserDetailsPassword() {

    var lbl_OfUserDetailPasswordPage = element(by.cssContainingText('.sub-info-text', 'Please use an uppercase and a number or special character'))
    var txt_Password = $('#password')
    var chk_TermsAndCondition = element(by.className('custom-control-indicator'))
    var btn_BrandSetup = element(by.cssContainingText('.custom-submit', 'Next: Brand setup'))
    var alert_WrongFormattedPassword = element(by.cssContainingText('.error-dialogue', 'Woops! Please make sure you follow the guidelines.'))
    var btn_ConfirmEmail = $('button[class*="next-button"]')

    this.SetPassword = function (Password) {
        txt_Password.sendKeys(Password)
        browser.waitForAngular();
        browser.actions().mouseMove(chk_TermsAndCondition).doubleClick().perform()
        btn_BrandSetup.click()
    }
    this.alert_WrongFormattedPassword=function () {
        commonActions.waitElementToBeVisible(alert_WrongFormattedPassword)
        return alert_WrongFormattedPassword;
    }


    this.chk_TermsAndCondition = function () {
        commonActions.waitElementToBeVisible(chk_TermsAndCondition)
        return chk_TermsAndCondition;
    }

    this.btn_BrandSetup = function () {
        commonActions.waitElementToBeVisible(btn_BrandSetup)
        return btn_BrandSetup;
    }
    this.lbl_OfUserDetailPasswordPage = function () {
        commonActions.waitElementToBeVisible(lbl_OfUserDetailPasswordPage)
        return lbl_OfUserDetailPasswordPage;
    }
    this.btn_ConfirmEmail=function () {
        commonActions.waitElementToBeVisible(btn_ConfirmEmail)
        return btn_ConfirmEmail;

    }
    this.txt_Password=function () {
        commonActions.waitElementToBeVisible(txt_Password)
        return txt_Password;

    }
}

module.exports = new UserDetailsPassword();