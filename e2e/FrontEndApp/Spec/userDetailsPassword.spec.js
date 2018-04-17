let userDetailsPasswordPo = require('../PageObject/userDetailsPassword.po')
let commonActions = require('../../../Common/CommonActions');
let fakeData = require('../../../Utils/FakeData.js');
let adminLogin = require('../../Admin/PageObject/AdminLogin.po')

describe('Verify User Details Password Page', function () {
    beforeAll(function (done) {
        expect(userDetailsPasswordPo.lbl_OfUserDetailPasswordPage().isDisplayed()).toBeTruthy();
        done();
    });

    it('Verify by filling the wrong formatted password in password field and trying to click on next button next.', () => {
        userDetailsPasswordPo.SetPassword("123456")
        expect(userDetailsPasswordPo.alert_WrongFormattedPassword().isDisplayed()).toBeTruthy();
    })
    it('Verify by filling the right formatted password then clicking on next button.', () => {
        userDetailsPasswordPo.txt_Password().clear();
        userDetailsPasswordPo.SetPassword(browser.params.ValidPasswordForCustomSignup)
        browser.actions().mouseMove(userDetailsPasswordPo.chk_TermsAndCondition()).doubleClick().perform()
        userDetailsPasswordPo.btn_BrandSetup().click()
        commonActions.waitForUrlToChange(browser.params.Url+"/brands")
        browser.sleep(1000)
        expect(browser.getCurrentUrl()).toContain(browser.params.Url+"/brands")
    })
})