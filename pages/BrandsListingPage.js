require('../testCases/LoginPageTest.js')
var CircularJSON = require('circular-json')
var commonActions = require('../Common/CommonActions.js')

var startCount
var firstBrand


var brandsListing = {

    PageElements: {

        brands_List: element(by.xpath('//*[@class="user-listing-block"]')),
        list_NoOfBrands: element.all(by.xpath('//*[@class="user-item"]')),

        firstBrandUrl: 'https://staging.unityinfluence.com/brands/273/campaigns',
        secondBrandUrl: 'https://staging.unityinfluence.com/brands/266/campaigns'

    },

    getBrandsList: function getBrandsList() {

        this.PageElements.brands_List.getText().then(function (value) {
            console.log(value)
        })
    },


    chooseFirstBrand: function chooseFirstBrand() {

        firstBrand = this.PageElements.list_NoOfBrands.get(0)
        expect(firstBrand.getText().then(function (value) {
            browser.logger.info('First brand selected as:' + value + '' +'with which new influencer will be mapped')
            //    console.log(typeof firstBrand)
            firstBrand.click()

        }))
        commonActions.waitForUrlToChange(this.PageElements.firstBrandUrl)

    },

    chooseSecondBrand: function chooseSecondBrand() {
        secondBrand = this.PageElements.list_NoOfBrands.get(1)
        expect(secondBrand.getText().then(function (value) {
            browser.logger.info('Brand selected as:' + value + 'with which existing influencer will be mapped')
            //    console.log(typeof firstBrand)
            secondBrand.click()

        }))

        commonActions.waitForUrlToChange(this.PageElements.secondBrandUrl)
    }
};


module.exports = brandsListing