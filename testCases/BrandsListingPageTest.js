var brandListPage = require('../pages/BrandsListingPage.js')
var commonActions = require('../Common/CommonActions.js')


describe('Brand Listing Page Verification', function () {

    it('Verify the list of existing Brands', function () {
        brandListPage.getBrandsList()
    })

    it('Choose the first brand to set campaign for', function () {

        brandListPage.chooseFirstBrand()


    })

   /* it('Choose the second brand to set campaign for', function () {

        brandListPage.chooseSecondBrand()


    })*/

  /*  it('Verify the url after brand selection', function () {



    })*/

});






