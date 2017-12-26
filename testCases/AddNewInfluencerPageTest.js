var addNewInfluencer = require('../pages/AddNewInfluencerPage')


describe('Verify the successful addition of new influencer', function () {


    //Positive flow
    it('Add Influencer successfully', function () {
        addNewInfluencer.AddDetails()
    }),

        it('Verify confirmation message', function () {

            addNewInfluencer.confirmSuccessfulNotificationMessage()
        }),


        it('Go back to campaign listing page', function () {
           addNewInfluencer.goBackToHome()

        })
});
