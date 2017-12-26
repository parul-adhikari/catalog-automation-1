//require('../testCases/AdminHomePageTest')
var commonActions = require('../Common/CommonActions')
var inlfuencerListingPage = require('../pages/SelectInfluencerPage')
var homePage = require('../pages/AdminHomePage')
var addNewInfluencerDetails = {

    PageElements: {

        //  txbx_FrstName: element(by.id('id_first_name')),
        txbx_FrstName: element(by.xpath('//*[@name="first_name"]')),
        txbx_LstName: element(by.id('id_last_name')),
        btn_Browse: element(by.id('id_profile_picture')),
        txbx_Email: element(by.id('id_email')),
        txbx_Phone: element(by.id('id_phone_number')),
        btn_Save: element(by.xpath('//*[@name="_save"]')),
        notify_SuccMsg: element(by.xpath('//*[@class="success"]')),
        notify_ErrorMsg: element(by.xpath('//*[@class="errornote"]')),
        errorMsg: element(by.xpath('//*[@class="errorlist"]')),
        logo_Link: element(by.id('site-name')),
        home_Url: 'https://api-staging.unityinfluence.com/admin/'

    },

    AddDetails: function AddDetails() {
        inlfuencerListingPage.clickAddInfluencerBtn()
        this.PageElements.txbx_FrstName.sendKeys(browser.params.NewInfluencerFirstName)
        this.PageElements.txbx_LstName.sendKeys(browser.params.NewInfluencerSecondName)
        this.PageElements.txbx_Email.sendKeys(browser.params.NewInfluencerEmail)
        this.PageElements.btn_Save.click()


    },

    confirmSuccessfulNotificationMessage: function confirmSuccessfulNotificationMessage() {


        browser.isElementPresent(this.PageElements.notify_SuccMsg).then(function (result) {

            if (result) {
                browser.logger.info("Influencer added successfully")
            }
            else {
              browser.logger.error("Error occured")

                }
            })



    },

    goBackToHome: function goBackToHome() {
        this.PageElements.logo_Link.click()
        commonActions.waitForUrlToChange(this.PageElements.home_Url)
        homePage.clickCampaignLink()


    }
}


module.exports = addNewInfluencerDetails