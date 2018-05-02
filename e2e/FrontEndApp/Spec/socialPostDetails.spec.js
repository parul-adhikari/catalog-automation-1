let socialPostDetailsPage = require('../PageObject/socialPostDetails.po')


describe('Verify Social Post Details', function () {

    it('Button Disable in case of no input.', function () {
        expect(socialPostDetailsPage.getNextPlanButton().isEnabled()).toBe(false);
    });
    it('Verify by not filling short description, next button should be disabled.', function () {
        socialPostDetailsPage.fillPostDetails("", browser.params.socialHandles, browser.params.relevantHashTags);

        socialPostDetailsPage.getNextPlanButton().click();
        expect(socialPostDetailsPage.getNextPlanButton().isEnabled()).toBe(false);
    });
    // it('Verify by not filling social handles., next button should be disabled.', function () {
    //     socialPostDetailsPage.fillPostDetails(browser.params.socialPostSuggestionText, "", browser.params.relevantHashTags);
    //     browser.sleep(2000);
    //     socialPostDetailsPage.getNextPlanButton().click();
    //     expect(socialPostDetailsPage.getNextPlanButton().isEnabled()).toBe(false);
    // });
    // it('Verify by not filling relevant hash tags., next button should be disabled.', function () {
    //     socialPostDetailsPage.fillPostDetails(browser.params.socialPostSuggestionText, browser.params.socialHandles, "");
    //     browser.sleep(2000);
    //     socialPostDetailsPage.getNextPlanButton().click();
    //     expect(socialPostDetailsPage.getNextPlanButton().isEnabled()).toBe(false);
    // });
    it('Verify by filling all the values.', function () {
        socialPostDetailsPage.fillPostDetails(browser.params.socialPostSuggestionText, browser.params.socialHandles, browser.params.relevantHashTags);

        socialPostDetailsPage.getNextPlanButton().click();



    });


});