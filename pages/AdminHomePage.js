require('../testCases/AdminLoginPageTest')
var commonActions = require('../Common/CommonActions')

var adminHomePage = {

    PageElements: {
        txt_PageHeading: element(by.xpath('//*[@id="content"]/h1')),
        tble_Element: element.all(by.xpath('//*[@id=\'content-main\']/div[3]/table/caption')),
        tble_campaignrow: element.all(by.xpath('//*[@class="model-campaign"]')),
        tble_rowHeading: element.all(by.xpath('//*[contains(text(),"Campaigns")]'))

    },

    clickCampaignLink: function clickCampaignLink() {
        commonActions.readingTableData(this.PageElements.tble_Element,this.PageElements.tble_campaignrow,this.PageElements.tble_rowHeading)

    }
}



module.exports = adminHomePage
