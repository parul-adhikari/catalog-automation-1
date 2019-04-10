let brandListingPage = require('../PageObject/brandListing_po.js');
let adminLoginPage = require('../PageObject/adminLogin_po.js');
let dictionary = require ('../../../Utils/DataFile.js');
let fakeData = require('../../../Utils/FakeData.js');


describe('Verify searching on brand listing page and check its linked content requests', function () {


    beforeAll(function (done) {
        dictionary.dataDictionary.getAdminUrl('brands');
        browser.isElementPresent(dictionary.dataDictionary.emailTextBox).then( function (result) {
            if (result) {
                adminLoginPage.adminLogin();
            };
        });
        done();
    });

    it('Verify searching for existing brand and clicking on it', function () {
        brandListingPage.searchForBrandAndClick(fakeData.randomFirstName);
        if (expect(dictionary.dataDictionary.brandName.getAttribute('value')).toEqual(fakeData.randomFirstName))
        {
            browser.logger.info("Admin reached brand detail page")
        }
    });

    it('Verify details of brand on detail page', function () {
        brandListingPage.verifyBrandDetails(fakeData.randomFirstName);
    });

    it('Verify switching to content requests of the test brand', function () {
        brandListingPage.viewOnAdminLink();
    });

});


