let brandListingPage = require('../PageObject/brandListing.po.js');
let adminLoginPage = require('../PageObject/adminLogin.po.js');
let dataDictionary = require ('../../../Utils/DataFile.js');

describe('Verify searching on brand listing page and check its linked content requests', function () {


    beforeAll(function (done) {
        dataDictionary.getUrl('brands');
        browser.isElementPresent(dataDictionary.emailTextBox).then( function (result) {
            if (result) {
                adminLoginPage.adminLogin();
            };
        });
        done();
    });

    it('Verify searching for existing brand and clicking on it', function () {
        brandListingPage.searchForBrandAndClick(dataDictionary.existingBrand);
        if (expect(dataDictionary.brandName.getAttribute('value')).toEqual(dataDictionary.existingBrand))
        {
            browser.logger.info("Admin reached brand detail page")
        }
    });

    it('Verify details of brand on detail page', function () {
        brandListingPage.verifyBrandDetails();
    });

    it('Verify switching to content requests of the test brand', function () {
        brandListingPage.viewOnAdminLink();
    });

});


