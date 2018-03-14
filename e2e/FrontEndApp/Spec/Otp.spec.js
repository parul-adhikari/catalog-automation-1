let mailinatorPagePo = require('../../../e2e/FrontEndApp/PageObject/Mailinator.po')
let otpPagePo = require('../../../e2e/FrontEndApp/PageObject/Otp.po')
let fakeData = require('../../../Utils/FakeData.js');
let commonActions = require('../../../Common/CommonActions');
let userDetailsPagePo = require('../../../e2e/FrontEndApp/PageObject/UserDetails.po')

describe('Verify OTP page', function () {

    beforeAll(function (done) {
        expect(browser.getCurrentUrl()).toContain('https://staging.unityinfluence.com/auth/sign-up?email=')
        done();
    });


    it('Verify confirm account button is disabled', () => {

        otpPagePo.DisabledConfirmAccount();
        browser.logger.info('confirm account button is disabled')
    })

    it('Verify mail get triggered on the email id and error dialog for wrong otp', () => {
        otpPagePo.EmailVerifyForOtpAndCopyPasteOtp();
        otpPagePo.lnk_clickHere().click();
        otpPagePo.btn_confirmAccount().click();
        expect(otpPagePo.err_dialog().isDisplayed()).toBeTruthy();
        //expect(userDetailsPagePo.lbl_OfUserDetailPage.isDisplayed()).toBeTruthy();
    })

    it('Verify by filling the valid otp by using click here link', () => {
        otpPagePo.EmailVerifyForOtpAndCopyPasteOtp();
        otpPagePo.btn_confirmAccount().click();
    })


})