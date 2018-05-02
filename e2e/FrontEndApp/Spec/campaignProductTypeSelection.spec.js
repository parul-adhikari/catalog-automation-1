let campaignProductTypeSelectionPo = require('../PageObject/campaignProductTypeSelection.po');


describe('Verify physical product type selection', function () {


    it('Verify Product selection screen heading', () => {
        expect(campaignProductTypeSelectionPo.getProductSelectionTypeHeading().isDisplayed()).toBeTruthy();

    });

    it('Verify Product selection screen sub-heading', () => {
        expect(campaignProductTypeSelectionPo.getProductSelectionTypeSubHeading().isDisplayed()).toBeTruthy();

    });

    it('Verify Physical Product Selection', () => {

        campaignProductTypeSelectionPo.getPhysicalProductTypeSelectionBox().click();

    });


});