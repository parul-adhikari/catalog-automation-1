var adminCampaignListingPage = require('../PageObject/adminCampaignListing.po');
let adminLogin = require('../PageObject/AdminLogin.po');
let fakeDataForCampaign = require('../../../e2e/Data/dataForCampaign');


describe('Verify Campaign search and clicking on the link', function () {

    beforeAll(function (done) {
        browser.get(browser.params.adminUrlForCampaignListing);
        browser.isElementPresent(adminLogin.getEmailTextBox()).then(function (result) {
            if (result) {
                adminLogin.doAdminLogin();
            }

        });
        done();
    });
    it('Verify the automated campaign in campaign listing.', function () {
        adminCampaignListingPage.searchForCampaignAndClick(fakeDataForCampaign.randomFirstName);
        expect(adminCampaignListingPage.getCampaignName().getAttribute('value')).toEqual(fakeDataForCampaign.randomFirstName);
        browser.sleep(10000);
    });
});