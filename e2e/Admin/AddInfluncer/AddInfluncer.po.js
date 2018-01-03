var CommonActions = require('../../../Common/CommonActions');
var HomePage = require('../AdminHome/Home.po');


var AddNewInfluencer = {

    PageElements: {
        //xpath locators
        txbx_FrstName: element(by.xpath('//*[@name="first_name"]')),
        btn_Save: element(by.xpath('//*[@name="_save"]')),
        notify_SuccMsg: element(by.xpath('//*[@class="success"]')),
        notify_ErrorMsg: element(by.xpath('//*[@class="errornote"]')),
        errorMsg: element(by.xpath('//*[@class="errorlist"]')),
        btn_AddInfluencer: element(by.xpath('//*[@href="/admin/influencer/influencer/add/"]')),


        //id locators
        txbx_LstName: element(by.id('id_last_name')),
        btn_Browse: element(by.id('id_profile_picture')),
        txbx_Email: element(by.id('id_email')),
        txbx_Phone: element(by.id('id_phone_number')),
        logo_Link: element(by.id('site-name')),

        //text to be matched
        home_Url: 'https://api-staging.unityinfluence.com/admin/',
        expectedUrlToAddInf: 'https://api-staging.unityinfluence.com/admin/influencer/influencer/add/'

    },

    clickInfluncerLink: function clickInfluncerLink() {

        HomePage.clickInfluencerLink();
        browser.logger.info('Influencer Link clicked on Home page')
    },

    clickAddInfluencerBtn: function clickAddInfluencerBtn() {
        CommonActions.waitElementToBeClickable(this.PageElements.btn_AddInfluencer);
        this.PageElements.btn_AddInfluencer.click().then(function () {
            browser.logger.info('Add influencer button clicked')
        })

    },

    AddDetails: function AddDetails() {
        //this.clickAddInfluencerBtn();
        this.PageElements.txbx_FrstName.sendKeys(browser.params.NewInfluencerFirstName);
        this.PageElements.txbx_LstName.sendKeys(browser.params.NewInfluencerSecondName);
        this.PageElements.txbx_Email.sendKeys(browser.params.NewInfluencerEmail);
        this.PageElements.btn_Save.click().then(function () {
            browser.logger.info('Save button clicked..')
        })


    },

    confirmSuccessfulNotificationMessage: function confirmSuccessfulNotificationMessage() {


        browser.isElementPresent(this.PageElements.notify_SuccMsg).then(function (result) {

            if (result) {
                let firstName = browser.params.NewInfluencerFirstName;
                let secondName = browser.params.NewInfluencerSecondName;

                browser.logger.info("Influencer added successfully",firstName+secondName)
            }
            else {
                browser.logger.error("Error occured")

            }
        })


    },

    goToCampaignListingPage: function goToCampaignListingPage() {
        this.PageElements.logo_Link.click();
        CommonActions.waitForUrlToChange(this.PageElements.home_Url);
        HomePage.clickCampaignLink()


    }

}


module.exports = AddNewInfluencer;