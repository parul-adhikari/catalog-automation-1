require('../testCases/AdminHomePageTest')
var commonActions = require('../Common/CommonActions')

var influencersListingPage = {

    PageElements: {
        btn_AddInfluencer : element(by.xpath('//*[@href="/admin/influencer/influencer/add/"]')),
        expectedUrlToAddInf: 'https://api-staging.unityinfluence.com/admin/influencer/influencer/add/'
    },



    };

    module.exports = influencersListingPage;