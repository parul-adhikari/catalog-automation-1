require('../testCases/LoginPageTest.js')
var CircularJSON = require('circular-json')
var commonActions = require('../Common/CommonActions.js')

var startCount
var firstBrand


var brandsListing = {

    PageElements: {

        list_NoOfBrands: element.all(by.xpath('//*[@class="user-item"]')),

       urlToBeChanged: 'https://staging.unityinfluence.com/brands/266/campaigns'
       // urlToBeChanged: 'http://localhost:4200/brands/9/campaigns'


    },

    checkExistingBrands: function checkExistingBrands() {


        commonActions.waitForElement(this.PageElements.list_NoOfBrands)

        this.PageElements.list_NoOfBrands.count().then(function (originalCount) {
            if (originalCount > 0) {
                startCount = originalCount;
                browser.logger.info('No.of listed Brands:' + startCount)
            }
            else {
                browser.logger.info('No Brands exists' + startCount)
            }
        }), function (err) {
            browser.logger.error('Getting error in fetching brands list' + err)

        }


    },

    chooseFirstBrand: function chooseFirstBrand() {

        firstBrand = this.PageElements.list_NoOfBrands.get(0)
        expect(firstBrand.getText().then(function (value) {
            browser.logger.info('First brand selected as:' +value  )
            //    console.log(typeof firstBrand)
            firstBrand.click()
        }))





    }

};


module.exports = brandsListing