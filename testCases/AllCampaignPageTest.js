var allCampaignPage = require('../pages/AllCampaignsPage.js')

var campName
describe('Verify the listing of campaigns', function () {



        //Positive flow
        it('Verify the presence of active campaign', function () {
            allCampaignPage.campaign.checkActiveCampaign
        })

        it('Verify the active campaign Name', function () {

            allCampaignPage.campaign.checkActiveCampaignDetails(function (value) {
                campName = value
                console.log(campName)

            })


        })

    })

