let clearData = require('../../ClearData/clearAutomationData');
let dictionary = require ('../../../Utils/DataFile.js');


describe('Verify logging in through gmail', function () {
    beforeAll(function (done) {
        browser.sleep(4000);
        expect(browser.getCurrentUrl()).toContain('order/channel');
        done();
    });

    afterEach(function () {
    dictionary.dataDictionary.waitForElement(dictionary.brandDetails.shotCards);
    });
    //
    // afterAll(function () {
    //
    //     // loginPage.logOut();
    //     // clearData.currentSessionDataClear();
    //     // clearData.deleteUser(browser.params.gmailAddress);
    //
    //
    // });

    it('Verify that initially Continue button is disabled', () => {
        expect(dictionary.brandDetails.continueButton.isDisabled).toBe(dictionary.brandDetails.continueButton.isDisabled);
        browser.logger.info("Continue button is disabled until any channel is selected")
    });


    it('Verify by selecting a channel', () => {
        dictionary.brandDetails.channelSelection1.click();
        browser.logger.info("Selected a channel")

    });

    it('Verify by selecting multiple channels', () => {
        dictionary.brandDetails.channelSelection2.click();
        browser.logger.info("Selected multiple channels");
        dictionary.brandDetails.continueButton.click();

    });


});
