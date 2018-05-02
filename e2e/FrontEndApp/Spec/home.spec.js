let homePagePo = require('../PageObject/home.po.js');
let commonActions = require('../../../Common/CommonActions');
let changedUrl = browser.params.Url + "auth/sign-up?email="
let fakeData = require('../../../Utils/FakeData.js');


describe('Verify Unity Home page', function () {

    beforeEach(function () {

        browser.get(browser.params.Url);
        browser.waitForAngular()

    })

    it('Verify the successful launching of application', () => {

        homePagePo.CheckUrl(browser.params.Url);
    });

    it('Verify the page title', () => {
        homePagePo.Titleofthepage('Influencer Advertising Simplified');
    });
    it('Verify the presence of register button in disabled state.', () => {
        homePagePo.PresenceOfRegisterButtonAsDisabled();
        browser.logger.info('Register Button is present and it is disabled.');

    });
    it('Verify with wrong formated email id register button should be disabled.', () => {
        homePagePo.WrongFormattedEmail(fakeData.randomFirstName);
        browser.logger.info('In case of wrong email id register button remain disable')

    })

    it('Verify with valid email address and then click on register button user should get redirected to OTP screen.', () => {
        homePagePo.ValidEmailRegister(fakeData.randomFirstName + '@mailinator.com');
        commonActions.waitForUrlToChange(changedUrl)
        expect(browser.getCurrentUrl()).toContain(changedUrl)
        browser.logger.info('User is on the otp screen.')
    })


});











