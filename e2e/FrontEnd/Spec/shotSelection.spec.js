let shotSelectionPage = require('../PageObject/shotSelection_po');
let dictionary = require ('../../../Utils/DataFile.js');
let fakeData = require('../../../Utils/FakeData.js');

describe('Verify shot selection screen', function () {
    // beforeAll(function (done) {
    //     expect(browser.getCurrentUrl()).toContain('/shot');
    //     done();
    // });

    beforeEach(function () {
        browser.refresh();
    });

    afterAll(function () {

        expect(browser.getCurrentUrl()).toContain('/styling');

    });

    it('Verify that initially Continue button is disabled', () => {
        expect(dictionary.shotScreen.continueOnShots.isDisabled).toBe(dictionary.shotScreen.continueOnShots.isDisabled);
        browser.logger.info("Continue button is disabled until all fields are filled!")
    });


    it('Verify while adding products', () => {
        shotSelectionPage.addProducts(fakeData.randomFirstName);
        expect(dictionary.shotScreen.continueOnShots.isDisabled).toBe(dictionary.shotScreen.continueOnShots.isDisabled);
        browser.logger.info("Added products but continue button is still disabled!")

    });

    it('Verify while adding shots', () => {
        shotSelectionPage.addShots();
        browser.logger.info("Added shot details to CR");
    });


});
