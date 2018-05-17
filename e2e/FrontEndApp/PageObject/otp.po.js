let fakeData = require('../../../Utils/FakeData.js');
let mailinatorPagePo = require('./mailinator.po')
let commonActions = require('../../../Common/CommonActions');

function otpPage() {
    let firstColumnTextBox = element(by.id('otp'));
    let confirmAccountButton = $("button[class*='next-button'][type='button']");
    let clickHereLink = element(by.cssContainingText('.link-text', 'click here.'));
    let errorDialog = $("div[class*='dialogue-bottom']");

    this.disabledConfirmAccount = function () {
        expect(confirmAccountButton.isDisabled).toBe(confirmAccountButton.isDisabled);
    }
    this.emailVerifyForOtpAndCopyPasteOtp = function (extendedUrl) {

        let mailinatorUrl = 'https://www.mailinator.com/v2/inbox.jsp?zone=public&query=' + extendedUrl


        browser.executeScript("return window.open(arguments[0], '_blank')", mailinatorUrl);

        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]).then(function () {
                browser.waitForAngular();
                browser.sleep(5000);
                expect(mailinatorPagePo.unityMailLoactor.isDisplayed()).toBe(true);
                mailinatorPagePo.unityMailLoactor.click();
                // browser.sleep(5000);
                // mailinatorPagePo.unityMailLoactor.click();
                // browser.actions().mouseMove(mailinatorPagePo.unityMailLoactor).doubleClick().perform();
                browser.sleep(4000);
                browser.switchTo().frame('msg_body');
                mailinatorPagePo.otpMailLocator.getText().then((value) => {
                    browser.sleep(3000);
                    browser.driver.close();
                    browser.switchTo().window(handles[0]);
                    // firstColumnTextBox.clear();

                    browser.refresh();
                    firstColumnTextBox.sendKeys(value)
                });
            });
        });
    };
    this.getClickHereLink = function () {
        commonActions.waitElementToBeVisible(clickHereLink)
        return clickHereLink;
    }
    this.getConfirmAccountButton = function () {
        commonActions.waitElementToBeVisible(confirmAccountButton)
        return confirmAccountButton;
    }
    this.getErrorDialog = function () {
        commonActions.waitElementToBeVisible(errorDialog)
        return errorDialog;
    }

};


module.exports = new otpPage();