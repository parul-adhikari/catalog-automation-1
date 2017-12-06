require('../testCases/AdminLoginPageTest')
var commonActions = require('../Common/CommonActions')

var adminHomePage = {

    PageElements: {
        txt_PageHeading: element(by.xpath('//*[@id="content"]/h1')),
        tble_Campaign: element.all(by.xpath('//*[@id=\'content-main\']/div[3]/table/caption')),
        tble_campaignrow: element(by.xpath('//*[@class="model-campaign"]'))

    },

    clickCampaignLink: function clickCampaignLink() {
        commonActions.readingTableData()

    }
}



module.exports = adminHomePage
