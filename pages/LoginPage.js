require('../testCases/WelcomePageTest.js')


var loginPage = {

    PageElements: {
        txbx_Email: element(by.xpath('//input[@formcontrolname="email"]')),
        txbx_Pswd: element(by.xpath('//input[@formcontrolname="password"]')),
        btn_Login: element(by.xpath('//button[@type="submit"]')),
        txt_PageHeading: element(by.xpath('//div[@class="bold text-center login-head"]')),
        txt_expectedPageHeading: 'Log in to your Unity account',
        urlToBeChanged: 'https://staging.unityinfluence.com/brands'

    },


    doLogin: function doLogin() {
        this.PageElements.txbx_Email.sendKeys(browser.params.Email);
        this.PageElements.txbx_Pswd.sendKeys(browser.params.Password);
        this.PageElements.btn_Login.submit().then(function () {

            browser.logger.info('Login successful with following credentials:"\n"' +browser.params.Email + '"\n"' +'Password:'+ browser.params.Password )
        }),function (err) {

            browser.logger.error(" Login button not clicked" +err)

        }
    }

};

module.exports = loginPage