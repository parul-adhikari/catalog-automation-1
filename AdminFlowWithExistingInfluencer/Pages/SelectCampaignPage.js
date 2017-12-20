require('../../AdminFlowWithExistingInfluencer/Test/AdminHomePageTest')
var commonActions = require('../../Common/CommonActions')
//var allCampaignPageTest = require('../../testCases/AllCampaignPageTest')
//var camp = require('../../pages/AllCampaignsPage')


var searchCamp = {

    PageElements: {
        txtbx_Search: element(by.id('searchbar')),
        btn_Search: element(by.xpath('//*[@value="Search"]')),
        lnk_expectedCamp: element(by.xpath('//*[@class=\'field-name\']//*[text()="'+browser.params.Campaign_Name+'"]')),
        //   lnk_expectedCamp: element(by.xpath('//*[@class=\'field-name\']//*[text()="Test Camp"]')),
        url_toBeChanged: 'https://api-staging.unityinfluence.com/admin/campaign/campaign/517/change/?_changelist_filters=q%3DAutomation_Camp'
        // url_toBeChanged: 'http://localhost:8000/admin/campaign/campaign/26/change'
    },

    searchCampaign: function searchCampaign() {
        browser.logger.info('Searching for the expected active campaign...')
        commonActions.waitForElement(this.PageElements.txtbx_Search)
        //console.log(allCampaignPageTest.camp)

        this.PageElements.txtbx_Search.sendKeys(browser.params.Campaign_Name)
        this.PageElements.btn_Search.click()
        commonActions.waitForElement(this.PageElements.lnk_expectedCamp)
        browser.logger.info('Expected Campaign found in the search result' + this.PageElements.lnk_expectedCamp.getText())
        this.PageElements.lnk_expectedCamp.click()
        commonActions.waitForUrlToChange(this.PageElements.url_toBeChanged)


    }


}


module.exports = searchCamp