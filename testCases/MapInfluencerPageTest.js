var mapInfluencerPage = require('../pages/MapInfluencerPage')
var commonActions = require('../Common/CommonActions')
var gmail = require('../testCases/GmailTest')


describe('Verify the addition of influencer', function () {


    //Positive flow
    it('Select New Influencer Name', function () {

        mapInfluencerPage.selectNewInfluencerName()
    })

       /*it('Verify Influencer Email', function () {
            mapInfluencerPage.verifyInfluencerEmail()
        }),*/

        it('Saving influencer Details', function () {

            mapInfluencerPage.saveInfluencer()

        }),

        it('Verify the notification after saving', function () {

            mapInfluencerPage.confirmSuccessfulNotificationMessage()

        }),

        it('Verify the received email in inbox', function () {
            gmail.gmailSignIn(browser.params.GmailAddress,browser.params.GmailPswd)
            gmail.verifyReceivedEmail()

        })

    it('Verify the collboration',function () {
        gmail.verifyButtonInEmail()


    })


})
