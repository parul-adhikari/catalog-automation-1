let fakeData = require('../../../Utils/FakeData.js');
let mailinatorPagePo = require('../../../e2e/FrontEndApp/PageObject/Mailinator.po')
let commonActions = require('../../../Common/CommonActions');

function otpPage() {
    var txbx_firstColumn = element(by.id('otp'))
    var btn_confirmAccount = $("button[class*='next-button'][type='button']")
    var lnk_clickHere = element(by.cssContainingText('.link-text', 'click here.'))
    var err_dialog = $("div[class*='dialogue-bottom']")

    this.DisabledConfirmAccount = function () {
        expect(btn_confirmAccount.isDisabled).toBe(btn_confirmAccount.isDisabled);
    }
    this.EmailVerifyForOtpAndCopyPasteOtp = function () {

        let mailinator_URL = 'https://www.mailinator.com/v2/inbox.jsp?zone=public&query=' + fakeData.randomFirstName


        browser.executeScript("return window.open(arguments[0], '_blank')", mailinator_URL);

        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]).then(function () {
                browser.waitForAngular();
                browser.sleep(3000)
                expect(mailinatorPagePo.our_Mail_locator.isDisplayed()).toBeTruthy();
                mailinatorPagePo.our_Mail_locator.click()
                browser.sleep(3000)
                browser.switchTo().frame('msg_body')
                mailinatorPagePo.otp_Code_Loctor.getText().then((value) => {
                    browser.sleep(3000)
                    browser.driver.close();
                    browser.switchTo().window(handles[0]);
                    // txbx_firstColumn.clear();

                    browser.refresh();
                    txbx_firstColumn.sendKeys(value)
                })
            })
        })
    }
    this.lnk_clickHere = function () {
        commonActions.waitElementToBeVisible(lnk_clickHere)
        return lnk_clickHere;
    }
    this.btn_confirmAccount = function () {
        commonActions.waitElementToBeVisible(btn_confirmAccount)
        return btn_confirmAccount;
    }
    this.err_dialog = function () {
        commonActions.waitElementToBeVisible(err_dialog)
        return err_dialog;
    }

};


module.exports = new otpPage();