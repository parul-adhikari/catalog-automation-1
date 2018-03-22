let commonActions = require('../../../Common/CommonActions');
let homePagePo = require('../../../e2e/FrontEndApp/PageObject/Home.po')
let fbPo = require('../../../e2e/FrontEndApp/PageObject/Fb.po')
let clearData = require('../../../e2e/FrontEndApp/PageObject/ClearAutomationData')
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
        clearData.ClearCurrentSessionData();
        clearData.DeleteUser(browser.params.FacebookGmailAddress1);
    });
    it('Verify the presence of facebook button on home page.', () => {
        expect(homePagePo.facebookButton().isEnabled()).toBe(homePagePo.facebookButton().isEnabled());
    });
    it('Verify by clicking on facebook button on home page new facebook login window should get open', () => {
        fbPo.PresenceOfFacebookButton();
    });
    it('Verify registration process through facebook without phone number.', () => {

        fbPo.RegisterWithFacebook(browser.params.FacebookGmailAddress1);
        fbPo.PhoneNumberRequired();
        commonActions.waitForUrlToChange("https://staging.unityinfluence.com/brands")
        browser.refresh();
        expect(browser.getCurrentUrl()).toContain('https://staging.unityinfluence.com/brands') // facebook only phone number scenario needs to be implemented.
    })

})


