var acceptCollaboration = require('../pages/AcceptCollaborationPage')


describe('Verify the collaboration acceptance functionality', function () {


    //Positive flow
    it('Verify the successful PayPal Email', function () {

        acceptCollaboration.addPayPalDetails()
    }),

        it('Verify the successful shiipping', function () {

            acceptCollaboration.addShippingAddr()
        }),

        it('Verify the successful Country Details', function () {

            acceptCollaboration.addCountryDetails()
        }),

        it('Verify the New Inluencer collaboration',function () {

            acceptCollaboration.acceptCollaboration()
        })

})