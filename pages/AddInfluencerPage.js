require('../testCases/SelectCampaignPageTest')
var commonActions = require('../Common/CommonActions')
/*var toastMsg = require('../Common/ToastMessagesTest')
var toast = new toastMsg()*/


var addInfluencer = {

    PageElements: {
        lnk_addInfluencer: element(by.xpath('//*[text()="Add another Influencer"]')),
        slctbx_Influencer: element(by.id('id_campaigninfluencer_set-0-influencer')),
        icon_Edit: element(by.id('change_id_campaigninfluencer_set-0-influencer')),
        txbx_InfluencerEmail: element(by.id('id_email')),
        txbx_CmpnBudget: element(by.id('id_campaigninfluencer_set-0-compensation_budget')),
        txbx_PromoBudget: element(by.id('id_campaigninfluencer_set-0-promotion_budget')),
        txtbx_Message: element(by.id('id_campaigninfluencer_set-0-personalized_sentence')),
        btn_Save: element(by.xpath('//*[@name="_save"]')),
        notify_SuccMsg: element(by.xpath('//*[@class="success"]')),
        notify_ErrorMsg: element(by.xpath('//*[@class="errornote"]')),
        errorMsg: element(by.xpath('//*[@class="errorlist nonfield"]'))
    },

    selectInfluencerName: function selectInfluencerName() {

        commonActions.waitForElement(this.PageElements.lnk_addInfluencer)

        this.PageElements.lnk_addInfluencer.click()
        this.PageElements.slctbx_Influencer.click()
        element(by.cssContainingText('option', browser.params.InfluencerName)).click();


    },

    verifyInfluencerEmail: function verifyInfluencerEmail() {

        this.PageElements.icon_Edit.click()
        browser.logger.info('Verifying the selected influencer Email address as: ')
        commonActions.switchToChildWindow(this.PageElements.txbx_InfluencerEmail)
    },

    saveInfluencer: function saveInfluencer() {
        this.PageElements.txbx_CmpnBudget.clear()
        this.PageElements.txbx_CmpnBudget.sendKeys(browser.params.InfluencerCompBudget)

        this.PageElements.txbx_PromoBudget.clear().sendKeys(browser.params.InfluencerPromoBudget)
        this.PageElements.txtbx_Message.clear()
        this.PageElements.txtbx_Message.sendKeys(browser.params.PersonalMessage)
        this.PageElements.btn_Save.submit().then(function () {
            browser.logger.info('Influencer details saved...')
        })

    },

    confirmSuccessfulNotificationMessage: function confirmSuccessfulNotificationMessage() {
        /*        toast.successAlert(function (toast) {
                    expect(toast.isDisplayed()).toBe(true);
                })*/


        browser.sleep(2000)


        if (this.PageElements.notify_SuccMsg = 1) {
            this.PageElements.notify_SuccMsg.getText().then(function (value) {
                expect(value.toBe("The campaign" + browser.params.Campaign_Name + "was changed successfully."))
            })
        } else {
            this.PageElements.notify_ErrorMsg.getText().then(function (value) {
                browser.logger.error("Error Encountered" + "\t"  +value)
                this.PageElements.errorMsg.getText()

            })


        }
    }
}





module.exports = addInfluencer