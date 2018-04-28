let commonActions = require('../../../Common/CommonActions');
let userDetailsPasswordPo = require('./userDetailsPassword.po')
let userDetailsPo = require('./userDetails.po')
let homePagePo = require('./home.po')


function facebookWindow() {

    var textBoxFacebookEmail = $('#email')
    var textBoxFacebookPassword = $('#pass')
    var buttonFacebookLogin = $('#u_0_0')
    var buttonCancelPermission = element(by.name('__CANCEL__'))
    var buttonContinue = element(by.name('__CONFIRM__'))
    var dropdownSwitchUser = $('#u_0_3')
    var dropdownOptionSwitchUser = $('.__MenuItem')

    this.presenceOfFacebookButton = function () {
        homePagePo.facebookButton().click();
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]).then(function () {
                browser.waitForAngular();
                expect(browser.getCurrentUrl()).toContain('https://www.facebook.com')
                browser.driver.close();
                browser.switchTo().window(handles[0]);


            })
        })
    }

    this.registerWithFacebook = function (FacebookEmailId) {
        homePagePo.facebookButton().click();
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]).then(function () {
                browser.waitForAngular();
                textBoxFacebookEmail.sendKeys(FacebookEmailId)
                textBoxFacebookPassword.sendKeys(browser.params.FacebookGmailPswd)
                buttonFacebookLogin.click()
                browser.switchTo().window(handles[0])


            })
        })

    }
    this.phoneNumberRequired = function () {
        commonActions.waitElementToBeVisible(userDetailsPo.getPhoneNumberTextBox())
        userDetailsPo.getPhoneNumberTextBox().sendKeys("9896585252")
        expect(userDetailsPasswordPo.getTermsAndConditionCheckBox().isPresent()).toBe(userDetailsPasswordPo.getTermsAndConditionCheckBox().isPresent());
        browser.actions().mouseMove(userDetailsPasswordPo.getTermsAndConditionCheckBox()).doubleClick().perform()
        userDetailsPasswordPo.getBrandSetupButton().click()
        browser.sleep(5000)

    }

    this.phoneAndEmailRequierd = function () {
        userDetailsPo.getEmailTextBox().sendKeys(browser.params.FacebookGmailAddress2)
        userDetailsPo.getPhoneNumberTextBox().sendKeys("9896585252")
        browser.actions().mouseMove(userDetailsPasswordPo.getTermsAndConditionCheckBox()).doubleClick().perform()
        userDetailsPasswordPo.getConfirmEmailButton().click()
        browser.sleep(5000)
    }


}

module.exports = new facebookWindow();