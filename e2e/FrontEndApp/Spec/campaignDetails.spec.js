let campaignDetails = require('../../../e2e/FrontEndApp/PageObject/campaignDetails.po');
let campaignProductTypeSelectionPage = require('../PageObject/campaignProductTypeSelection.po')
let fakeDataForCampaign = require('../../../e2e/Data/dataForCampaign');
let loginPage = require('../PageObject/login.po');
let brandListingPage = require('../PageObject/brandListing.po');
//let campaignName = this.randomFirstName = faker.Name.firstName() + 'automated campaign';


describe('Verify Campaign Details', function () {

    it('Blank fields check', function () {
        // browser.get(browser.params.Url);
        // loginPage.doLogin('vibhor.mathur@quovantis.com', 'Quovantis1')
        // browser.sleep(5000);
        // brandListingPage.getExistingBrandBox("yo").click();
        campaignDetails.fillCampaignDetails(' ');
        expect(campaignDetails.getAlert().isDisplayed()).toBeTruthy();
    });
    it('Verify campaign creation.', function () {
        browser.refresh();
        campaignDetails.fillCampaignDetails(fakeDataForCampaign.randomFirstName);
        console.log('random name' + fakeDataForCampaign.randomFirstName);
        expect(campaignProductTypeSelectionPage.getProductSelectionTypeHeading().isDisplayed()).toBeTruthy();
    });


});

