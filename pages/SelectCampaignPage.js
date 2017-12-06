require('../testCases/AdminHomePageTest')
var commonActions = require('../Common/CommonActions')
var allCampaignPageTest = require('../testCases/AllCampaignPageTest')


var searchCamp = {

    PageElements: {
        txtbx_Search: element(by.id('searchbar')),
        btn_Search: element(by.xpath('//*[@value="Search"]'))
    },

    searchCampaign: function searchCampaign() {
        browser.logger.info('Searching for the expected active campaign...')
        commonActions.waitForElement(this.PageElements.txtbx_Search)
        console.log(allCampaignPageTest.campName)
        this.PageElements.txtbx_Search.sendKeys(allCampaignPageTest.camp)

    }



    }


module.exports = searchCamp