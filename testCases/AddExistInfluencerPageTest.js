var addInfluencerPage = require('../../Admin/Pages/AddInfluencerPage')
var commonActions = require('../../Common/CommonActions')
var gmail = require('../../Admin/Test/GmailTest')


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

            gmail.gmailSignIn("ankita.jangra@quovantis.com", "ankita@123")
            gmail.verifyReceivedEmail()
            gmail.verifyButtonInEmail()
        })


})
