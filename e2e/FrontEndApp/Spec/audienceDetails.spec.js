let audienceDetailsPage = require('../PageObject/audienceDetails.po');
let socialPostDetailsPage = require('../PageObject/socialPostDetails.po');


describe('Verify Audience Details', function () {

    it('Button Disable in case of no input.', function () {
        expect(audienceDetailsPage.getNextPostSettingButton().isEnabled()).toBe(false);
    });
    it('Verify by filling audience information form ', function () {
        audienceDetailsPage.fillAudienceDetails();
        audienceDetailsPage.getNextPostSettingButton().click();
        browser.sleep(2000);
        expect(socialPostDetailsPage.getPageHeading().isDisplayed()).toBeTruthy();

    });


});