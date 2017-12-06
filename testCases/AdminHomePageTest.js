var adminHomePage = require('../pages/AdminHomePage')


describe('Verify the Admin Home Page', function () {


    //Positive flow
    it('Verify the presence of active campaign', function () {
        adminHomePage.clickCampaignLink()

    })


});
