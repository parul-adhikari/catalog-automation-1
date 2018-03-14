var CommonActions = require('../../../Common/CommonActions');


var SelectCamp = {

    PageElements: {

        //id locators
        txtbx_Search: element(by.id('searchbar')),

        //xpath locators
        btn_Search: element(by.xpath('//*[@value="Search"]')),
        lnk_expectFirstCamp: element(by.xpath('//*[@class=\'field-name\']//*[text()="' + browser.params.FirstCampName + '"]')),
        lnk_expectedCamp: element(by.xpath('//*[@class=\'field-name\']//*[text()="' + browser.params.Campaign_Name + '"]')),


        //Text to be Matched
        expectedUrl_SecondCamp: 'https://api-staging.unityinfluence.com/admin/campaign/campaign/517/change/',
        expectedUrl_FirstCamp: 'https://api-staging.unityinfluence.com/admin/campaign/campaign/544/change/'

    },

    searchCampaign: function searchCampaign(CampName) {
        browser.logger.info('Searching for the expected active campaign...');
        CommonActions.waitElementToBeClickable(this.PageElements.txtbx_Search);
        this.PageElements.txtbx_Search.sendKeys(CampName);
        console.log("hello i am here");
        this.PageElements.btn_Search.click();
        CommonActions.waitElementToBeVisible(element(by.xpath('//*[@class=\'field-name\']//*[text()="' + CampName + '"]')));
        element(by.xpath('//*[@class=\'field-name\']//*[text()="' + CampName + '"]')).click();
        browser.logger.info('Campaign' + '\n' + CampName + '\n' + 'is clicked from search result')


    }


};


module.exports = SelectCamp;