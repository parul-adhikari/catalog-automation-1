let mailinatorPagePo = require('../PageObject/mailinator.po')
let otpPagePo = require('../PageObject/otp.po')
let fakeData = require('../../../Utils/FakeData.js');
let commonActions = require('../../../Common/CommonActions');
let userDetailsPagePo = require('../PageObject/userDetails.po')

describe('Verify OTP page', function () {

    beforeAll(function (done) {
        expect(browser.getCurrentUrl()).toContain(browser.params.Url+'auth/sign-up?email=');
        done();
    });


    it('Verify confirm account button is disabled', () => {

        otpPagePo.disabledConfirmAccount();
        browser.logger.info('confirm account button is disabled')
    })

    it('Verify mail get triggered on the email id and error dialog for wrong otp', () => {
        otpPagePo.emailVerifyForOtpAndCopyPasteOtp(fakeData.randomFirstName);
        otpPagePo.getClickHereLink().click();
        otpPagePo.getConfirmAccountButton().click();
        expect(otpPagePo.getErrorDialog().isDisplayed()).toBeTruthy();
        //expect(userDetailsPagePo.getUserDetailPageLabel.isDisplayed()).toBeTruthy();
    })

    it('Verify by filling the valid otp by using click here link', () => {
        otpPagePo.emailVerifyForOtpAndCopyPasteOtp(fakeData.randomFirstName);
        otpPagePo.getConfirmAccountButton().click();
    })


})