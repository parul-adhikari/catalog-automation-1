let planeSelection = require('../PageObject/planSelection.po');


describe('Verify Plan Selection', function () {
    it('Verify visibility of plans.', () => {
        expect(planeSelection.getTabForPhotoContentSelection().isDisplayed()).toBe(true);
    });
    it('Verify selection of the one time plan selection. ', () => {

        planeSelection.getOneTimePlanSelection().click();

    });


});
