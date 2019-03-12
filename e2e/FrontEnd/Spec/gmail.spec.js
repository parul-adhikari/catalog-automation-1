let gmailPage = require('../PageObject/gmail_po');
let commonActions = require('../../../Common/CommonActions');
let clearData = require('../../ClearData/clearAutomationData');
let dictionary = require ('../../../Utils/DataFile.js');
let loginPage = require('../PageObject/login_po');



describe('Verify logging in through gmail', function () {
    beforeAll(function (done) {
        dictionary.loginPage.loginOnHome.click();
        done();
    });
    // beforeEach(function () {
    //     browser.get(browser.params.Url);
    //     browser.waitForAngular()
    //
    // });

    afterAll(function () {

        loginPage.logOut();
        // clearData.currentSessionDataClear();
        // clearData.deleteUser(browser.params.gmailAddress);


    });

    it('Verify the presence of gmail button on login screen screen.', () => {
        gmailPage.presenceOfGmailButton();
        browser.logger.info("Gmail button is present on login screen")
    });


    it('Verify by registering a user using gmail', () => {
        gmailPage.registerWithGmail(dictionary.gmail.gmailEmail, dictionary.gmail.gmailPassword);

    });


});
