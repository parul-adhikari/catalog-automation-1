var addInfluencerPage = require('../Pages/MapExistingInfluencerWithCamp')
var commonActions = require('../../Common/CommonActions')
var gmail = require('../../AdminFlowWithExistingInfluencer/Test/GmailTest')


describe('Verify the addition of influencer', function () {


    //Positive flow
    it('Select Influencer Name', function () {

        addInfluencerPage.selectInfluencerName()
    }),

        it('Verify Influencer Email', function () {
            addInfluencerPage.verifyInfluencerEmail()
        }),

        it('Saving influencer Details', function () {

            addInfluencerPage.saveInfluencer()

        }),

        it('Verify the notification after saving', function () {

            addInfluencerPage.confirmSuccessfulNotificationMessage()

        }),

        it('Verify the gmail sign in', function () {
          //  commonActions.gmailSignIn("ankita.jangra@quovantis.com", "ankita@123")

            gmail.gmailSignIn(browser.params.GmailAddress,browser.params.GmailPswd)
            gmail.verifyReceivedEmail()
            gmail.verifyButtonInEmail()
        })


})
