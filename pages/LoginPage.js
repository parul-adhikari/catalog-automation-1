require('../testCases/WelcomePageTest')
var welcome_Page = require('../pages/WelcomePage.js')


var commonActions = require('../Common/CommonActions')
var alertMessage = 'Sorry! The login credentials are not valid.'
var pageTitleAfterLogout = 'Influencer Advertising Simplified'
var PageTitleAfterLogin = 'Unity Influence'


var loginPage = {

    PageElements: {
        txbx_Email: element(by.xpath('//input[@formcontrolname="email"]')),
        txbx_Pswd: element(by.xpath('//input[@formcontrolname="password"]')),
        btn_Login: element(by.xpath('//button[@type="submit"]')),
        txt_PageHeading: element(by.xpath('//div[@class="bold text-center login-head"]')),
        txt_expectedPageHeading: 'Log in to your Unity account',
        urlToBeChanged: 'https://staging.unityinfluence.com/brands',
        alert: element(by.xpath('/html/body/app-root/app-success-dialog/div/div[2]/div')),
        mybrands_Btn: element(by.css('#secondaryMenuButton')),
        signout_optn: element(by.css('.sign-out')),
        google_Login_Btn: element(by.css('.google-btn')),
        btn_UnityLogin: element(by.css('.btn.btn-primary.home-screen-mod.def-button.nav-link'))


    },
    blankLoginCheck: function blankLoginCheck() {
        commonActions.waitForElement(this.PageElements.txbx_Email)
        this.PageElements.txbx_Email.clear();
        this.PageElements.txbx_Pswd.clear();
        expect(this.PageElements.btn_Login.isDisabled).toBe(this.PageElements.btn_Login.isDisabled);
        browser.logger.info('Blank check verified tried clicking on Login button without filling any value in username and password')
    },


    wrongCredentials: function wrongCredentials() {

        this.PageElements.txbx_Email.clear();
        this.PageElements.txbx_Pswd.clear();
        this.PageElements.txbx_Email.sendKeys(browser.params.WrongEmail);
        this.PageElements.txbx_Pswd.sendKeys(browser.params.Password);
        this.PageElements.btn_Login.click()
        commonActions.waitForElement(this.PageElements.alert)
        var alertStr = this.PageElements.alert.getText();
        expect(alertStr).toEqual(alertMessage);
        browser.sleep(6000)
        browser.logger.info('Wrong credentials check verified using following +"\n"' + browser.params.WrongEmail + '"\n"' + 'Password:' + browser.params.Password)
    },

    doLogin: function doLogin() {
        this.PageElements.btn_UnityLogin.click()
        commonActions.waitForElement(this.PageElements.txbx_Email)
        this.PageElements.txbx_Email.sendKeys(browser.params.Email);
        this.PageElements.txbx_Pswd.sendKeys(browser.params.Password);
        this.PageElements.btn_Login.click().then(function () {
            commonActions.waitForUrlToChange('https://staging.unityinfluence.com/brands')
            expect(browser.getCurrentUrl()).toBe('https://staging.unityinfluence.com/brands')

            browser.logger.info('Login successful with following credentials:"\n"' + browser.params.Email + '"\n"' + 'Password:' + browser.params.Password)
        }), function (err) {

            browser.logger.error(" Login button not clicked" + err)

        }
        browser.sleep(2000)


    },
    Logout: function Logout() {
        commonActions.waitForElement(this.PageElements.mybrands_Btn);

        this.PageElements.mybrands_Btn.click();
        commonActions.waitForElement(this.PageElements.signout_optn);
        this.PageElements.signout_optn.click();
        browser.sleep(6000)
        expect(browser.getTitle()).toBe(pageTitleAfterLogout);

        browser.logger.info('Logout functionality verified')


    },

    loginwithGmail: function loginwithGmail() {

     //  welcome_Page.PageElements.lnk_Login.click();
        this.PageElements.google_Login_Btn.click();
        commonActions.waitForElement(element(by.css('input[type="email"]')))
        element(by.css('input[type="email"]')).sendKeys(browser.params.GmailAddress);
        element(by.css('#identifierNext')).click();
        browser.sleep(6000)
        commonActions.waitForElement(element(by.css('input[type="email"]')))
        element(by.css('input[type="password"]')).sendKeys(browser.params.GmailPswd);
        commonActions.waitForElement(element(by.css('#passwordNext')))
        element(by.css('#passwordNext')).click();
        commonActions.waitForUrlToChange('https://staging.unityinfluence.com/brands')

       expect(browser.getTitle()).toEqual(PageTitleAfterLogin)

        browser.logger.info('Login with google verified')
        browser.driver.manage().deleteAllCookies();


    },

};

module.exports = loginPage