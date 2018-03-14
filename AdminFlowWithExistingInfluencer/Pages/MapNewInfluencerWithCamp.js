//require('../../AdminFlowWithExistingInfluencer/Test/SelectCampaignPageTest')
//require('../../AdminFlowWithExistingInfluencer/Test/AdminHomePageTest')
var commonActions = require('../../Common/CommonActions')


var addNewInfluencer = {

    PageElements: {

        btn_AddNewInf: element(by.xpath('//*[@href="/admin/influencer/influencer/add/"]')),
        exp_AddInfUrl: element(by.xpath('https://api-staging.unityinfluence.com/admin/influencer/influencer/add/'))


    },

    clickAddInfluencerLink: function clickAddInfluencerLink() {

        this.PageElements.btn_AddNewInf.click()
        commonActions.waitForUrlToChange(this.PageElements.exp_AddInfUrl)

    },


    
}
module.exports = addNewInfluencer