var mapNewInfluencerPage = require('../../AdminFlowWithExistingInfluencer/Pages/MapNewInfluencerWithCamp')
var homePage = require('../../AdminFlowWithExistingInfluencer/Pages/AdminHomePage')
var commonActions = require('../../Common/CommonActions')
var gmail = require('../../AdminFlowWithExistingInfluencer/Test/GmailTest')


describe('Verify the Add New Influencer', function () {


    //Positive flow
    it('Verify the Influencer Link on Home Page', function () {
        homePage.clickInfluencerLink()

    }),

        it('Verify the Influencer Link on Home Page', function () {
            mapNewInfluencerPage.clickAddInfluencerLink()

        })


})
