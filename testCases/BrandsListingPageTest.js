var brandListPage = require('../pages/BrandsListingPage.js')
var commonActions = require('../Common/CommonActions.js')


describe('Brand Listing Page Verification', function () {

    it('Verify the existing Brands', function () {
        brandListPage.checkExistingBrands()
    })

    it('Choose the first brand to set campaign for', function () {

        brandListPage.chooseFirstBrand()


    })

    it('Verify the url after brand selection', function () {

        commonActions.waitForUrlToChange(brandListPage.PageElements.urlToBeChanged)

    })

});






