let AcceptCollaboration = require('./AcceptCollaboration.po');


describe('Verify the collaboration acceptance functionality', function () {


    //Positive flow
    it('Verify the successful PayPal Email', function () {

        AcceptCollaboration.addPayPalDetails();
        let list = element.all(by.css('.small-text.done'));
        expect(list.getText()).toBe('Payment information submitted')
    });

        it('Verify the successful shippping', function () {

            AcceptCollaboration.addShippingAddr();
            expect(list.get(0).getText()).toBe('Shipping information submitted')
        });

        it('Verify the successful Country Details', function () {

            AcceptCollaboration.addCountryDetails()
        });

        it('Verify the accept collaboration',function () {

            AcceptCollaboration.acceptCollaboration()
        });

        it('Verify the details on Colloaboration page', () => {

        })

});