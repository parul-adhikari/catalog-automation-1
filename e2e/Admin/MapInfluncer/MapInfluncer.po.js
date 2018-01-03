var CommonActions = require('../../../Common/CommonActions');


var MapInfluencer = {


    PageElements: {

        //xpath locators
        lnk_addInfluencer: element(by.xpath('//*[text()="Add another Influencer"]')),
        btn_Save: element(by.xpath('//*[@name="_save"]')),
        notify_SuccMsg: element(by.xpath('//*[@class="success"]')),
        notify_ErrorMsg: element(by.xpath('//*[@class="errornote"]')),
        errorMsg: element(by.xpath('//*[@class="errorlist nonfield"]')),
        lnk_ExistingInfName: element(by.xpath('//*[@class="field-name"]//*[contains(text(),"' + browser.params.InfluencerName + '")]')),
        btn_SaveEditing: element(by.xpath('//*[@value="Save and continue editing"]')),
        rowList : element.all(by.xpath('//tr[starts-with(@id,"campaigninfluencer")]')),

        //id locators

        txbx_InfluencerEmail: element(by.id('id_email')),
        txbx_CmpnBudget: element(by.id('id_campaigninfluencer_set-0-compensation_budget')),
        txbx_PromoBudget: element(by.id('id_campaigninfluencer_set-0-promotion_budget')),
        txtbx_Message: element(by.id('id_campaigninfluencer_set-0-personalized_sentence')),
        txbx_RetailPrice: element(by.id('id_product_retail_price')),


    },

    removeAlreadyExistedInfluencer: function removeAlreadyExistedInfluencer() {

      //  let rowList = element.all(by.xpath('//tr[starts-with(@id,"campaigninfluencer")]'));
        CommonActions.scrollToElement(this.PageElements.rowList);
        CommonActions.waitForElement(this.PageElements.rowList);

        this.PageElements.rowList.count().then(value => {


            if (value > 1) {
                browser.logger.info("Row size is: " + value);
                this.PageElements.rowList.getText().then(function (value) {
                    console.log('Table Rows are:' + value)
                });
                browser.logger.warn("Please  delete the previously added Influcencer to continue...");
                element(by.css('#id_campaigninfluencer_set-0-DELETE')).click().then(function () {
                    browser.logger.info("Delete checkbox clicked to delete the influencer");
                    element(by.xpath('//*[@value="Save and continue editing"]')).click().then(function () {
                        browser.logger.info('Successfully deleted...')
                    })
                })
            }
            else {
                browser.logger.info("No added influencer..");

            }
        })

    },


    selectNewInfluencerName: function selectNewInfluencerName() {

        // let   search_Inf: element(by.id('searchbar'));
        CommonActions.waitElementToBeClickable(this.PageElements.lnk_addInfluencer);
        this.PageElements.lnk_addInfluencer.click().then(function () {
            browser.logger.info('Add Influencer link clicked');

            CommonActions.waitForElement(element(by.id('lookup_id_campaigninfluencer_set-0-influencer')));
            element(by.id('lookup_id_campaigninfluencer_set-0-influencer')).click().then(function () {
                let winHandles = browser.getAllWindowHandles();
                winHandles.then(function (handles) {
                    let parentWindow = handles[0];
                    let popUpWindow = handles[1];
                    browser.switchTo().window(popUpWindow);
                    browser.sleep(2000)
                })
            })
        });

        element(by.id('searchbar')).sendKeys(browser.params.NewInfluencerFirstName);
        element(by.xpath('//*[@type="submit"]')).click().then(function () {


            element(by.xpath('//*[@class="field-name"]//*[contains(text(),"' + browser.params.NewInfluencerFirstName + '")]')).click().then(function () {
                browser.sleep(2000);
                let winHandles = browser.getAllWindowHandles();
                winHandles.then(function (handles) {
                    let parentWindow = handles[0];

                    browser.switchTo().window(parentWindow)
                })
            })

        })
    },

    selectExistingInfluencerName: function selectExistingInfluencerName() {

        CommonActions.waitForElement(this.PageElements.lnk_addInfluencer)
        this.PageElements.lnk_addInfluencer.click().then(function () {
            browser.logger.info('second add Influencer link clicked')
        })


        CommonActions.browserWaitForElement(this.PageElements.img_searchInfluencer)
        this.PageElements.img_searchInfluencer.click()

        var winHandles = browser.getAllWindowHandles();
        winHandles.then(function (handles) {
            var parentWindow = handles[0];
            var popUpWindow = handles[1];
            browser.switchTo().window(popUpWindow)
            // browser.sleep(2000)
            browser.waitForAngular();
        })

        this.PageElements.search_Inf.sendKeys(browser.params.InfluencerName)
        element(by.xpath('//*[@type="submit"]')).click()
        this.PageElements.lnk_ExistingInfName.click().then(function () {
            console.log('Addedddddddddddd')
        })
        //   browser.sleep(2000)
        browser.waitForAngular();

        winHandles.then(function (handles) {
            parentWindow = handles[0];

            browser.switchTo().window(parentWindow)
        })


    },


    saveInfluencer: function saveInfluencer() {
        this.PageElements.txbx_RetailPrice.clear();
        this.PageElements.txbx_RetailPrice.sendKeys(browser.params.RetailPrice);
        this.PageElements.txbx_CmpnBudget.clear();
        this.PageElements.txbx_CmpnBudget.sendKeys(browser.params.InfluencerCompBudget);

        this.PageElements.txbx_PromoBudget.clear().sendKeys(browser.params.InfluencerPromoBudget);
        this.PageElements.txtbx_Message.clear();
        this.PageElements.txtbx_Message.sendKeys(browser.params.PersonalMessage);
        this.PageElements.btn_SaveEditing.click().then(function () {
            browser.logger.info('Influencer details saved...')
        });
        //  browser.sleep(6000)
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


};


module.exports = MapInfluencer;