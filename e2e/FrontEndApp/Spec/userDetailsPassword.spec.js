let userDetailsPasswordPo = require('../PageObject/userDetailsPassword.po')
let commonActions = require('../../../Common/CommonActions');
let fakeData = require('../../../Utils/FakeData.js');
let adminLogin = require('../../Admin/PageObject/AdminLogin.po')

describe('Verify User Details Password Page', function () {
    beforeAll(function (done) {
        expect(userDetailsPasswordPo.getUserDetailPasswordPageLabel().isDisplayed()).toBeTruthy();
        done();
    });

    it('Verify by filling the wrong formatted password in password field and trying to click on next button next.', () => {
        userDetailsPasswordPo.setPassword("123456")
        expect(userDetailsPasswordPo.getWrongFormattedPasswordAlert().isDisplayed()).toBeTruthy();
    })
    it('Verify by filling the right formatted password then clicking on next button.', () => {
        userDetailsPasswordPo.getPasswordTextBox().clear();
        userDetailsPasswordPo.setPassword(browser.params.ValidPasswordForCustomSignup)
        browser.actions().mouseMove(userDetailsPasswordPo.getTermsAndConditionCheckBox()).doubleClick().perform()
        userDetailsPasswordPo.getBrandSetupButton().click()
        commonActions.waitForUrlToChange(browser.params.Url+"brands")
        browser.sleep(1000)
        expect(browser.getCurrentUrl()).toContain(browser.params.Url+"brands")
    })
})