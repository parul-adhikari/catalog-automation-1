require('../../AdminFlowWithExistingInfluencer/Test/AdminLoginPageTest')
var commonActions = require('../../Common/CommonActions')

var adminHomePage = {

    PageElements: {
        txt_PageHeading: element(by.xpath('//*[@id="content"]/h1')),
        tble_CampElement: element.all(by.xpath('//*[@id="content-main"]/div[3]/table/caption')),
        tble_campaignrow: element.all(by.xpath('//*[@class="model-campaign"]')),
        tble_CampRowHeading: element.all(by.xpath('//*[contains(text(),"Campaigns")]')),

        tble_InfColHeading: element(by.xpath('//*[@href="/admin/influencer/"]')),
        tble_InfluencerRow: element(by.xpath('//tr[@class="model-influencer"]')),
        tble_InfRowHeading: element(by.xpath('//*[contains(text(),"Influencers")]')),
        exp_AddInfUrl: 'https://api-staging.unityinfluence.com/admin/influencer/influencer/'

    },

    clickCampaignLink: function clickCampaignLink() {
        commonActions.readingTableData(this.PageElements.tble_CampElement, this.PageElements.tble_campaignrow, this.PageElements.tble_CampRowHeading)

    },

    clickInfluencerLink: function clickInfluencerLink() {
        commonActions.readingTableData(this.PageElements.tble_InfColHeading, this.PageElements.tble_InfluencerRow, this.PageElements.tble_InfRowHeading)
        commonActions.waitForUrlToChange(this.PageElements.exp_AddInfUrl)
    }
}


module.exports = adminHomePage
