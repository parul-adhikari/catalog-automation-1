var allCampaignPage = require('../pages/AllCampaignsPage.js')


describe('Verify the listing of campaigns', function () {



        //Positive flow
        it('Verify the presence of active campaign', function () {
            allCampaignPage.campaign.checkActiveCampaign
            allCampaignPage.campaign.checkActiveCampaignPresence()
        })

        it('Verify the active campaign Name', function () {

            allCampaignPage.campaign.checkActiveCampaignDetails(function (value) {
             var campName = value

            })


        })

    })
