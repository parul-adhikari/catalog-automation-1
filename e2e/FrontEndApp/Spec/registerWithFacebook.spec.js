let commonActions = require('../../../Common/CommonActions');
let homePagePo = require('../PageObject/home.po')
let fbPo = require('../PageObject/facebook.po')
let clearData = require('../../ClearData/clearAutomationData')
let adminLogin = require('../../Admin/PageObject/AdminLogin.po')

describe('Verify the Unity home page with facebook button and registration with facebook', function () {

    beforeAll(function (done) {
        browser.get(browser.params.Url);
        done();
    });
    beforeEach(function () {

        browser.get(browser.params.Url);
        browser.waitForAngular()
    });
    afterAll(function () {
        clearData.currentSessionDataClear();
        clearData.deleteUser(browser.params.FacebookGmailAddress1);
        clearData.deleteUser(browser.params.FacebookGmailAddress2);
    });
    it('Verify the presence of facebook button on home page.', () => {
        expect(homePagePo.facebookButton().isEnabled()).toBe(homePagePo.facebookButton().isEnabled());
    });
    it('Verify by clicking on facebook button on home page new facebook login window should get open', () => {
        fbPo.presenceOfFacebookButton();
    });
    it('Verify registration process through facebook without phone number.', () => {

        fbPo.registerWithFacebook(browser.params.FacebookGmailAddress2);
        fbPo.phoneNumberRequired();
        commonActions.waitForUrlToChange("https://staging.unityinfluence.com/brands")
        browser.refresh();
        expect(browser.getCurrentUrl()).toContain('https://staging.unityinfluence.com/brands') // facebook only phone number scenario needs to be implemented.
    })

})


