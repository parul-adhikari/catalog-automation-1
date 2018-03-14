var CommonActions = require('../../../Common/CommonActions');
var fakeData = require('../../../Utils/FakeData.js');


var MapInfluencer = {


    PageElements: {

        //xpath locators & css locators
        lnk_addInfluencer: element(by.css('.add-row>td>a')),
        img_searchInfluencer: element(by.css('#lookup_id_campaigninfluencer_set-1-influencer>img')),
        btn_Save: element(by.xpath('//*[@name="_save"]')),
        notify_SuccMsg: element(by.xpath('//*[@class="success"]')),
        notify_ErrorMsg: element(by.xpath('//*[@class="errornote"]')),
        errorMsg: element(by.xpath('//*[@class="errorlist nonfield"]')),
        lnk_ExistingInfName: element(by.xpath('//*[@class="field-name"]//*[contains(text(),"' + fakeData.randomFirstName + '")]')),
        btn_SaveEditing: element(by.xpath('//*[@value="Save and continue editing"]')),
        rowList: element.all(by.xpath('//tr[starts-with(@id,"campaigninfluencer")]')),
        errorMsgForAllreadymappedinfluencer: element(by.css('.errorlist.nonfield>li')),
        link_UploadContent: element(by.css('.content-upload-url')),

        //id locators

        txbx_InfluencerEmail: element(by.id('id_email')),
        txbx_CmpnBudget: element(by.id('id_campaigninfluencer_set-0-compensation_budget')),
        txbx_PromoBudget: element(by.id('id_campaigninfluencer_set-0-promotion_budget')),
        txtbx_Message: element(by.id('id_campaigninfluencer_set-0-personalized_sentence')),
        txbx_CmpnBudget1: element(by.id('id_campaigninfluencer_set-1-compensation_budget')),
        txbx_PromoBudget1: element(by.id('id_campaigninfluencer_set-1-promotion_budget')),
        txtbx_Message1: element(by.id('id_campaigninfluencer_set-1-personalized_sentence')),
        txbx_RetailPrice: element(by.id('id_product_retail_price')),
        search_Inf: element(by.id('searchbar')),

//Link text locators

        email_Historylink: element(by.linkText('Email history')),
        collaboration_Page: element(by.linkText('Collaboration')),


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

        CommonActions.waitElementToBeClickable(this.PageElements.lnk_addInfluencer)
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
        this.PageElements.btn_SaveEditing.click().then(() => {

            browser.logger.info('Influencer details saved...')


        }, function (err) {

            browser.logger.error("Error occured" + err)
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
    },
    allReadyMappedInfluencer: function allReadyMappedInfluencer() {

        CommonActions.waitElementToBeClickable(this.PageElements.lnk_addInfluencer);
        CommonActions.scrollToElement(this.PageElements.lnk_addInfluencer);

        this.PageElements.lnk_addInfluencer.click();
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

        this.PageElements.search_Inf.sendKeys(fakeData.randomFirstName)
        element(by.xpath('//*[@type="submit"]')).click()
        this.PageElements.lnk_ExistingInfName.click().then(function () {
            console.log('Addedddddddddddd')
        })
        //   browser.sleep(2000)
        browser.waitForAngular();

        winHandles.then(function (handles) {
            parentWindow = handles[0];

            browser.switchTo().window(parentWindow);
        })
        this.PageElements.txbx_RetailPrice.clear();
        this.PageElements.txbx_RetailPrice.sendKeys(browser.params.RetailPrice);
        this.PageElements.txbx_CmpnBudget1.clear();
        this.PageElements.txbx_CmpnBudget1.sendKeys(browser.params.InfluencerCompBudget);

        this.PageElements.txbx_PromoBudget1.clear().sendKeys(browser.params.InfluencerPromoBudget);
        this.PageElements.txtbx_Message1.clear();
        this.PageElements.txtbx_Message1.sendKeys(browser.params.PersonalMessage);

        this.PageElements.btn_SaveEditing.click().then(() => {
            expect(this.PageElements.errorMsgForAllreadymappedinfluencer.getText()).toBe("This influencer has already been mapped to this campaign before.");

            browser.logger.info("Alert for all ready mapped influencer is present test caes passed.............")

        }),
            function (err) {
                browser.logger.error("Error occured while mapping all ready mapped influencer" + err)

            }
    },

    influencerEmail: function influencerEmail() {
        CommonActions.waitForElement(this.PageElements.email_Historylink)
        this.PageElements.email_Historylink.click().then(function () {
            browser.logger.info('Email history link clicked')


        })

        browser.getAllWindowHandles().then(function (handles) {

            browser.switchTo().window(handles[1]).then(function () {
                expect(element(by.css('.field-name')).getText()).toEqual("Collaboration email");
                browser.logger.info('Collaboration Email has been sent to the influncer');
                browser.driver.close();
                browser.switchTo().window(handles[0]);


            });


        })


    },

    UploadcontentLink: function UploadcontentLink() {

     this.PageElements.link_UploadContent.click().then(()  => {
         browser.logger.info('upload content link clicked from admin..');


     })
    }


};


module.exports = MapInfluencer;