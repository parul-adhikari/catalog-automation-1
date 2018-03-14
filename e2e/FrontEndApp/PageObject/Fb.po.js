let commonActions = require('../../../Common/CommonActions');
let userDetailsPasswordPo = require('../../../e2e/FrontEndApp/PageObject/UserDetailsPassword.po')
let userDetailsPo = require('../../../e2e/FrontEndApp/PageObject/UserDetails.po')
let homePagePo = require('../../../e2e/FrontEndApp/PageObject/Home.po')


function fbPopup() {

    var txt_FbEmail = $('#email')
    var txt_FbPassword = $('#pass')
    var btn_FbLogin = $('#u_0_0')
    var btn_CancelPermission = element(by.name('__CANCEL__'))
    var btn_Continue = element(by.name('__CONFIRM__'))
    var drp_SwitchUser = $('#u_0_3')
    var drpopt_switchUser = $('.__MenuItem')

    this.PresenceOfFacebookButton = function () {
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

    this.RegisterWithFacebook = function (FacebookEmailId) {
        homePagePo.facebookButton().click();
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]).then(function () {
                browser.waitForAngular();
                txt_FbEmail.sendKeys(FacebookEmailId)
                txt_FbPassword.sendKeys(browser.params.FacebookGmailPswd)
                btn_FbLogin.click()
                browser.switchTo().window(handles[0])


            })
        })

    }
    this.PhoneNumberRequired = function () {
        commonActions.waitElementToBeVisible(userDetailsPo.txt_PhoneNumber())
        userDetailsPo.txt_PhoneNumber().sendKeys("9896585252")
        expect(userDetailsPasswordPo.chk_TermsAndCondition().isPresent()).toBe(userDetailsPasswordPo.chk_TermsAndCondition().isPresent());
        browser.actions().mouseMove(userDetailsPasswordPo.chk_TermsAndCondition()).doubleClick().perform()
        userDetailsPasswordPo.btn_BrandSetup().click()
        browser.sleep(5000)

    }

    this.PhoneAndEmailRequierd = function () {
        userDetailsPo.txt_Email().sendKeys(browser.params.FacebookGmailAddress2)
        userDetailsPo.txt_PhoneNumber().sendKeys("9896585252")
        browser.actions().mouseMove(userDetailsPasswordPo.chk_TermsAndCondition()).doubleClick().perform()
        userDetailsPasswordPo.btn_ConfirmEmail().click()
        browser.sleep(5000)
    }


}

module.exports = new fbPopup();