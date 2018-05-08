let planeSelection = require('../PageObject/planSelection.po');
let clearData = require('../../ClearData/clearAutomationData');


describe('Verify Plan Selection', function () {
    afterAll(function (done) {
        //browser.manage().deleteAllCookies();
        clearData.currentSessionDataClear();
        done();
    });

    it('Verify visibility of plans.', () => {
        expect(planeSelection.getTabForPhotoContentSelection().isDisplayed()).toBe(true);
    });
    it('Verify selection of the one time plan selection. ', () => {

        planeSelection.getOneTimePlanSelection().click();
        browser.sleep(2000);
    });


});
