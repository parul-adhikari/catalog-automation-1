let campaignDetailsPagePo = require('../PageObject/campaignDetails.po');
let campaignProductTypeSelectionPo = require('../PageObject/campaignProductTypeSelection.po');
let clearData =require('../PageObject/clearAutomationData')

describe('Verify physical product type selection', function () {



    afterAll(function () {
        clearData.currentSessionDataClear();
    });



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