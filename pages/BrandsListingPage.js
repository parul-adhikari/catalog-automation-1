require('../testCases/LoginPageTest.js')
var commonActions = require('../Common/CommonActions.js')

var startCount
var firstBrand


var brandsListing = {

    PageElements: {

        list_NoOfBrands: element.all(by.xpath('//*[@class="user-item"]')),
        urlToBeChanged: 'https://staging.unityinfluence.com/brands/237/onboarding'

    },

    checkExistingBrands: function checkExistingBrands() {
      //  browser.sleep(4000)
        commonActions.waitForElement( this.PageElements.list_NoOfBrands)

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
        firstBrand.click().then(function () {
            browser.logger.info('Brand selected..' +firstBrand)

        })


    }

};


module.exports = brandsListing