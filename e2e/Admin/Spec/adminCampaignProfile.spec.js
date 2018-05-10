let adminCampaignProfilePage = require('../PageObject/adminCampaignProfile.po');


describe('Verify by moving campaign draft to active by marking payment as received from admin ', function () {


    it('Verify clicking on payment received checkbox and then saving the campaign. ', function () {
        adminCampaignProfilePage.markCampaignAsPaymentReceived();
        expect(adminCampaignProfilePage.getStatusOfCampaign().getText()).toBe('Active');

    });
});