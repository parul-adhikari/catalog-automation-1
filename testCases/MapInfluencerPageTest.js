var mapInfluencerPage = require('../pages/MapInfluencerPage')
var commonActions = require('../Common/CommonActions')
var gmail = require('../testCases/GmailTest')


describe('Verify the mapping of Influencers', function () {


    //Positive flow
    it('Map New Influencer', function () {
        mapInfluencerPage.removeAlreadyExistedInfluencer()

        /*mapInfluencerPage.selectNewInfluencerName()
        mapInfluencerPage.saveInfluencer()
        mapInfluencerPage.confirmSuccessfulNotificationMessage()*/

    })

       /* it('Map Existing Influencer', function () {
            mapInfluencerPage.selectExistingInfluencerName()
            mapInfluencerPage.saveInfluencer()
            mapInfluencerPage.confirmSuccessfulNotificationMessage()
        }),*/

/*
        it('Verify the received email in inbox', function () {
            gmail.gmailSignIn(browser.params.GmailAddress,browser.params.GmailPswd)
            gmail.verifyReceivedEmail()

        })

    it('Verify the collboration',function () {
        gmail.verifyButtonInEmail()


    })*/


})
