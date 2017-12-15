var adminHomePage = require('../../AdminFlowWithExistingInfluencer/Pages/AdminHomePage')


describe('Verify the Admin Home Page', function () {


    //Positive flow


    it('Verify the presence of Active Campaign Link', function () {
            adminHomePage.clickCampaignLink()

        })

});
