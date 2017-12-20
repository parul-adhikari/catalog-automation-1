//require('../testCases/AdminHomePageTest')
require('../testCases/AddNewInfluencerPageTest')
var commonActions = require('../Common/CommonActions')
/*var allCampaignPageTest = require('../testCases/AllCampaignPageTest')
var camp = require('../pages/AllCampaignsPage')*/


var searchCamp = {

    PageElements: {
        txtbx_Search: element(by.id('searchbar')),
        btn_Search: element(by.xpath('//*[@value="Search"]')),
        lnk_expectFirstCamp: element(by.xpath('//*[@class=\'field-name\']//*[text()="'+browser.params.FirstCampName+'"]')),
        lnk_expectedCamp: element(by.xpath('//*[@class=\'field-name\']//*[text()="'+browser.params.Campaign_Name+'"]')),
        //   lnk_expectedCamp: element(by.xpath('//*[@class=\'field-name\']//*[text()="Test Camp"]')),
        expectedUrl_SecondCamp: 'https://api-staging.unityinfluence.com/admin/campaign/campaign/517/change/',
        expectedUrl_FirstCamp: 'https://api-staging.unityinfluence.com/admin/campaign/campaign/544/change/'
        // url_toBeChanged: 'http://localhost:8000/admin/campaign/campaign/26/change'
    },

    searchFirstCampaign: function searchFirstCampaign() {
        browser.logger.info('Searching for the expected active campaign...')
        commonActions.waitForElement(this.PageElements.txtbx_Search)
        //console.log(allCampaignPageTest.camp)

        this.PageElements.txtbx_Search.sendKeys(browser.params.FirstCampName)
        this.PageElements.btn_Search.click()
        commonActions.waitForElement(this.PageElements.lnk_expectFirstCamp)
        browser.logger.info('Expected Campaign found in the search result' + this.PageElements.lnk_expectFirstCamp)
        this.PageElements.lnk_expectFirstCamp.click()
        commonActions.waitForUrlToChange(this.PageElements.expectedUrl_FirstCamp)


    },
    searchSecondCampaign: function searchSecondCampaign() {
        browser.logger.info('Searching for the expected active campaign...')
        commonActions.waitForElement(this.PageElements.txtbx_Search)
        //console.log(allCampaignPageTest.camp)

        this.PageElements.txtbx_Search.sendKeys(browser.params.Campaign_Name)
        this.PageElements.btn_Search.click()
        commonActions.waitForElement(this.PageElements.lnk_expectedCamp)
        browser.logger.info('Expected Campaign found in the search result' + this.PageElements.lnk_expectedCamp)
        this.PageElements.lnk_expectedCamp.click()
        commonActions.waitForUrlToChange(this.PageElements.expectedUrl_SecondCamp)


    }


}


module.exports = searchCamp