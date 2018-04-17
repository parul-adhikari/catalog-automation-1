let commonActions = require('../../../Common/CommonActions');

function campaignDashboard() {
    var addCampaignBox = $('span > a > img');


    this.getAddCampaignBox = function () {
        return addCampaignBox;
    }
}

module.exports = new campaignDashboard();