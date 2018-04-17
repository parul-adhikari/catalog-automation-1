let commonActions = require('../../../Common/CommonActions');
let campaignDetails = require('../../../e2e/FrontEndApp/PageObject/campaignDetails.po');
let loginPage = require('../PageObject/login.po');
let brandListingPage = require('../PageObject/brandListing.po');
let campaignProductTypeSelectionPage = require('../PageObject/campaignProductTypeSelection.po')
let faker = require('faker');
var campaignName = this.randomFirstName = faker.Name.firstName() + 'automated campaign';


describe('Verify Campaign Details', function () {

    it('Blank fields check', function () {
        // browser.get(browser.params.Url);
        // loginPage.doLogin('vibhor.mathur@quovantis.com', 'Quovantis1')
        // browser.sleep(5000);
        // brandListingPage.getExistingBrandBox("yo").click();
        campaignDetails.fillCampaignDetails(' ');
        expect(campaignDetails.getAlert().isDisplayed()).toBeTruthy();
    });
    // it('Verify alert in case of already existing campaign name.', function () {
    //     browser.refresh();
    //     campaignDetails.fillCampaignDetails(browser.params.stringForExistingCampaignName);
    //     expect(campaignDetails.getAlert().isDisplayed()).toBeTruthy();
    // })

    it('Verify alert in case of already existing campaign name.', function () {
        browser.refresh();
        campaignDetails.fillCampaignDetails(campaignName);
        console.log('random name' + campaignName);
        expect(campaignProductTypeSelectionPage.getProductSelectionTypeHeading().isDisplayed()).toBeTruthy();
    })


})

