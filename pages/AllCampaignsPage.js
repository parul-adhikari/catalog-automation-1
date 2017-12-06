require('../testCases/BrandsListingPageTest.js')
var commonActions = require('../Common/CommonActions.js')


var allCampaignListing = {

    PageElements: {
        sctn_Active: element(by.xpath('//*[contains(text(),"Active")]')),
        active_Camp: element(by.xpath('//h4[@class="heading text-truncate"]')),
        txt_CampName: element(by.xpath('.//*[@id=\'searchbar\']'))
    },


    checkActiveCampaign: function checkActiveCampaign() {

        commonActions.waitForElement(this.PageElements.sctn_Active)

        expect(this.PageElements.sctn_Active.getText()).toEqual('Active'), function (err) {
            browser.logger.info('No Active section is present to list active campaigns..')

        }
    },

    checkActiveCampaignDetails: function checkActiveCampaignDetails(callback) {

        commonActions.waitForElement(this.PageElements.active_Camp)
        this.PageElements.active_Camp.getText().then(function (value) {
            browser.logger.info('Active Campaign Details are as follows:' + value)
            callback(value)

        }), function (err) {

            browser.logger.error('No Active campaign is present' + stackTrace)
        }
    }


    }



module.exports = {campaign: allCampaignListing}