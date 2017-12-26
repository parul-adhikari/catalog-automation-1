require('../testCases/AddNewInfluencerPageTest')
require('../testCases/SelectCampaignPageTest')
var commonActions = require('../Common/CommonActions')
/*var toastMsg = require('../Common/ToastMessagesTest')
var toast = new toastMsg()*/


var addInfluencer = {

    PageElements: {
        lnk_addInfluencer: element(by.xpath('//*[text()="Add another Influencer"]')),
        img_searchInfluencer: element(by.id('lookup_id_campaigninfluencer_set-0-influencer')),
        icon_Edit: element(by.id('change_id_campaigninfluencer_set-0-influencer')),
        txbx_InfluencerEmail: element(by.id('id_email')),


        txbx_CmpnBudget: element(by.id('id_campaigninfluencer_set-0-compensation_budget')),
        txbx_PromoBudget: element(by.id('id_campaigninfluencer_set-0-promotion_budget')),
        txtbx_Message: element(by.id('id_campaigninfluencer_set-0-personalized_sentence')),
        btn_Save: element(by.xpath('//*[@name="_save"]')),
        notify_SuccMsg: element(by.xpath('//*[@class="success"]')),
        notify_ErrorMsg: element(by.xpath('//*[@class="errornote"]')),
        errorMsg: element(by.xpath('//*[@class="errorlist nonfield"]')),
        txbx_RetailPrice: element(by.id('id_product_retail_price')),
        search_Inf: element(by.id('searchbar')),
        lnk_NewInfName: element(by.xpath('//*[@class="field-name"]//*[contains(text(),"' + browser.params.NewInfluencerFirstName + '")]')),
        lnk_ExistingInfName: element(by.xpath('//*[@class="field-name"]//*[contains(text(),"' + browser.params.InfluencerName + '")]')),
        btn_SaveEditing: element(by.xpath('//*[@value="Save and continue editing"]'))
    },

    selectNewInfluencerName: function selectNewInfluencerName(influencerName) {


        commonActions.waitForElement(this.PageElements.lnk_addInfluencer)
        this.PageElements.lnk_addInfluencer.click().then(function () {
            browser.logger.info('Add Influencer link clicked')
        })

        commonActions.waitForElement(this.PageElements.img_searchInfluencer)
        this.PageElements.img_searchInfluencer.click()

        var winHandles = browser.getAllWindowHandles();
        winHandles.then(function (handles) {
            var parentWindow = handles[0];
            var popUpWindow = handles[1];
            browser.switchTo().window(popUpWindow)
            browser.sleep(2000)
        })

        // this.PageElements.search_Inf.sendKeys(browser.params.NewInfluencerFirstName)
        this.PageElements.search_Inf.sendKeys(browser.params.NewInfluencerFirstName)
        element(by.xpath('//*[@type="submit"]')).click()
        this.PageElements.lnk_NewInfName.click()
        browser.sleep(2000)

        winHandles.then(function (handles) {
            parentWindow = handles[0];

            browser.switchTo().window(parentWindow)
        })


    },

    selectExistingInfluencerName: function selectExistingInfluencerName() {

        commonActions.waitForElement(this.PageElements.lnk_addInfluencer)
        this.PageElements.lnk_addInfluencer.click().then(function () {
            browser.logger.info('second add Influencer link clicked')
        })


        commonActions.waitForElement(this.PageElements.img_searchInfluencer)
        this.PageElements.img_searchInfluencer.click()

        var winHandles = browser.getAllWindowHandles();
        winHandles.then(function (handles) {
            var parentWindow = handles[0];
            var popUpWindow = handles[1];
            browser.switchTo().window(popUpWindow)
            browser.sleep(2000)
        })

        this.PageElements.search_Inf.sendKeys(browser.params.InfluencerName)
        element(by.xpath('//*[@type="submit"]')).click()
        this.PageElements.lnk_ExistingInfName.click().then(function () {
            console.log('Addedddddddddddd')
        })
        browser.sleep(2000)

        winHandles.then(function (handles) {
            parentWindow = handles[0];

            browser.switchTo().window(parentWindow)
        })


    },

    /* verifyInfluencerEmail: function verifyInfluencerEmail() {

         this.PageElements.icon_Edit.click()
         browser.logger.info('Verifying the selected influencer Email address as: ')
         commonActions.switchToChildWindow(this.PageElements.txbx_InfluencerEmail)
     },*/

    saveInfluencer: function saveInfluencer() {
        this.PageElements.txbx_RetailPrice.clear()
        this.PageElements.txbx_RetailPrice.sendKeys(browser.params.RetailPrice)
        this.PageElements.txbx_CmpnBudget.clear()
        this.PageElements.txbx_CmpnBudget.sendKeys(browser.params.InfluencerCompBudget)

        this.PageElements.txbx_PromoBudget.clear().sendKeys(browser.params.InfluencerPromoBudget)
        this.PageElements.txtbx_Message.clear()
        this.PageElements.txtbx_Message.sendKeys(browser.params.PersonalMessage)
        this.PageElements.btn_SaveEditing.submit().then(function () {
            browser.logger.info('Influencer details saved...')
        })
        browser.sleep(6000)
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
    }


}


module.exports = addInfluencer