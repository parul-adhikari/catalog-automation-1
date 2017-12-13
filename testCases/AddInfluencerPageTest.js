var addInfluencerPage = require('../pages/AddInfluencerPage')


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
            //addInfluencerPage.verifyEmailReceived()
        })


})
