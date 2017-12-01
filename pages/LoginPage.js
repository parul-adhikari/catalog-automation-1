require('../testCases/WelcomePageTest.js')


var loginPage = {

    PageElements: {
        txbx_Email: element(by.xpath('//input[@formcontrolname="email"]')),
        txbx_Pswd: element(by.xpath('//input[@formcontrolname="password"]')),
        btn_Login: element(by.xpath('//button[@type="submit"]')),
        txt_PageHeading: element(by.xpath('//div[@class="bold text-center login-head"]')),
        txt_expectedPageHeading: 'Log in to your Unity account',
        urlToBeChanged: 'https://staging.unityinfluence.com/brands',
        alert: element(by.xpath('//*[@class="msg fixed row align-items-center error"]'))

    },
Wrongredentials:function Wrongredentials() {
    this.PageElements.txbx_Email.sendKeys(browser.params.Wrongemail);
    this.PageElements.txbx_Pswd.sendKeys(browser.params.Password);
    this.PageElements.btn_Login.submit().then(function (){

        browser.sleep(2000)
        alert.getText().then(function (text) {
            console.log(text)
            browser.logger.info(text)

        })

        //element(by.class('fixed'))


    })
},

    doLogin: function doLogin() {
        this.PageElements.txbx_Email.sendKeys(browser.params.Email);
        this.PageElements.txbx_Pswd.sendKeys(browser.params.Password);
        this.PageElements.btn_Login.click().then(function () {

            browser.logger.info('Login successful with following credentials:"\n"' +browser.params.Email + '"\n"' +'Password:'+ browser.params.Password )
        }),function (err) {

            browser.logger.error(" Login button not clicked" +err)

        }
    }

};

module.exports = loginPage