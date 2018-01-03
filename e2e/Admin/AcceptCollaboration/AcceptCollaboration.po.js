var CommonActions = require('../../../Common/CommonActions');
var LoginPage = require('../../StagingApp/Login/login.po');


var AcceptCollaboration = {

        PageElements: {

            //xpath locators
            txt_PageHeading: element(by.xpath('//*[@class="heading-text text-center"]')),
            btn_PaymentSubmit: element(by.xpath('//*[@class="btn def-button small-text ml-auto mr-0 submit"]')),
            txbx_PaypalEmail: element(by.xpath('//*[@formcontrolname="email"]')),
            txbx_ShippingAdd: element(by.xpath('//*[@placeholder="Street"]')),
            dropdown_Country: element(by.xpath('//*[@class="single"]//*[contains(text(),\'Select country\')]')),
            dropdown_State: element(by.xpath('//div[@class="single"]//*[contains(text(),"Select state")]')),
            txbx_City: element(by.xpath('//*[@placeholder="City"]')),
            txbx_Zipcode: element(by.xpath('//*[@placeholder="XXXXX"]')),
            radiobtn_delivery: element(by.xpath('//*[@class="custom-control common-small-font custom-radio"]')),
            txt_PaymentDone: element(by.xpath('//*[@class="small-text done"]')),

            //css locators
            txbx_CountryValue: element.all(by.css('.highlighted')),
            txt_StateValue: element.all(by.css('.highlighted')),
            btn_Accept: element(by.css('.btn.def-button.text-align-center.d-inline-block.gene.small-text')),
            btn_ShippingAdd: element(by.css('.btn.def-button.small-text.ml-auto.mr-0.mt-0.submit'))


        },


        addPayPalDetails: function addPayPalDetails() {
            //  browser.sleep(6000)
            expect(browser.getTitle()).toEqual(LoginPage.PageElements.PageTitleAfterLogin);
            CommonActions.waitForElement(
                this.PageElements.txt_PageHeading);
            //  var pageHeading = this.PageElements.txt_PageHeading.getText();
            expect(this.PageElements.txt_PageHeading.getText()).toContain(browser.params.NewInfluencerFirstName);
            expect(this.PageElements.btn_PaymentSubmit.isDisabled).toBe(this.PageElements.btn_PaymentSubmit.isDisabled);
            this.PageElements.txbx_PaypalEmail.click().sendKeys(browser.params.PayPal_Email);
            //   this.PageElements.txbx_PaypalEmail.sendKeys(browser.params.PayPal_Email)
            expect(this.PageElements.btn_PaymentSubmit.isEnabled).toBe(this.PageElements.btn_PaymentSubmit.isEnabled);

            this.PageElements.btn_PaymentSubmit.click().then( value => {

                browser.logger.info("Submitted PayPal Email")

            })
        },

        addShippingAddr: function addShippingAddr() {

            commonActions.waitForElement(this.PageElements.txt_PaymentDone)
            var text = this.PageElements.txt_PaymentDone.getText()
            expect(text).toBe("Payment information submitted")

            expect(this.PageElements.btn_ShippingAdd.isDisabled).toBe(this.PageElements.btn_ShippingAdd.isDisabled)
            expect(this.PageElements.btn_Accept.isDisabled).toBe(this.PageElements.btn_Accept.isDisabled)
            commonActions.waitForElement(this.PageElements.txbx_ShippingAdd)
            this.PageElements.txbx_ShippingAdd.sendKeys("abcd").then(function (value) {
                browser.logger.info("added shipping address")
            })
        },

        addCountryDetails: function addCountryDetails() {


            commonActions.waitForElement(this.PageElements.dropdown_Country);


            this.PageElements.dropdown_Country.click();
            this.PageElements.txbx_CountryValue.first().click().then(function () {
                console.log("Entered Country")
            });

            browser.sleep(2000);
            this.PageElements.dropdown_State.click();
            this.PageElements.txt_StateValue.first().click().then(function (value) {
                browser.logger.info("Entered State")
            })
            this.PageElements.txbx_City.click().sendKeys("Delhi").then(function (value) {
                browser.logger.info('City Entered')
            })
            this.PageElements.txbx_Zipcode.click().sendKeys("346464").then(function () {
                browser.logger.info('Zipcode Entered')
            })

            this.PageElements.radiobtn_delivery.click().then(function () {
                browser.logger.info('Weekend Delivery selected')
            })
            commonActions.waitForElement(this.PageElements.btn_ShippingAdd)
            expect(this.PageElements.btn_ShippingAdd.isEnabled).toBe(this.PageElements.btn_ShippingAdd.isEnabled)
            this.PageElements.btn_ShippingAdd.click().then(function () {
                browser.logger.info('Shipping Details submitted...')
            })
        },


        acceptCollaboration: function acceptCollaboration() {

            commonActions.waitForElement(this.PageElements.btn_Accept)
            expect(this.PageElements.btn_Accept.isEnabled).toBe(this.PageElements.btn_Accept.isEnabled)
            this.PageElements.btn_Accept.click().then(function () {

                browser.logger.info("Accepted the collaboration successfully.............")

            }), function (err) {
                browser.logger.error("Error occured while accepting the collboration" + err)

            }

            expect(this.PageElements.btn_Accept.isDisabled).toBe(this.PageElements.btn_Accept.isDisabled)

        },




    }
;

module.exports = AcceptCollaboration;