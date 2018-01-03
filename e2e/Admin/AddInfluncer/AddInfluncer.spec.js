var addNewInfluencer = require('../AddInfluncer/AddInfluncer.po');



describe('Verify the successful addition of new influencer', function () {


    //Positive flow
    it('Add Influencer successfully', function () {
        var firstName = browser.params.NewInfluencerFirstName;
        var secondName = browser.params.NewInfluencerSecondName;
        addNewInfluencer.clickInfluncerLink();
        expect(browser.getTitle()).toBe('Select influencer to change | Django site admin');
        addNewInfluencer.AddDetails();
        expect(addNewInfluencer.PageElements.notify_SuccMsg.isPresent()).toBe(true);
        browser.logger.info("Influencer added successfully", firstName + secondName)


    });
    /*
        it('Verify confirmation message', function () {




            // addNewInfluencer.confirmSuccessfulNotificationMessage()
        });*/


    it('Go back to campaign listing page', function () {
        addNewInfluencer.goToCampaignListingPage()

    })
});
