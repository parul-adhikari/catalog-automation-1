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
        commonActions.browserWaitForElement(this.PageElements.getEmailTextBox)
        this.PageElements.getEmailTextBox.clear();
        this.PageElements.txbx_Pswd.clear();
        expect(this.PageElements.btn_Login.isDisabled).toBe(this.PageElements.btn_Login.isDisabled);
        browser.logger.info('Blank check verified tried clicking on Login button without filling any value in username and password')
    },


    wrongCredentials: function wrongCredentials() {

        this.PageElements.getEmailTextBox.clear();
        this.PageElements.txbx_Pswd.clear();
        this.PageElements.getEmailTextBox.sendKeys(browser.params.WrongEmail);
        this.PageElements.txbx_Pswd.sendKeys(browser.params.Password);
        this.PageElements.btn_Login.click().then(function () {

            browser.sleep(6000)
            commonActions.browserWaitForElement(element(by.css('.msg.fixed.row.align-items-center.error')))
        })

        var alertStr = element(by.css('.msg.fixed.row.align-items-center.error')).getText();
        expect(alertStr).toContain(alertMessage)
        browser.waitForAngular().then(function () {
            browser.logger.info('Wrong credentials check verified using following +"\n"' + browser.params.WrongEmail + '"\n"' + '"Password:"' + browser.params.Password)
        })

    },

    doLogin: function doLogin() {
        this.PageElements.btn_UnityLogin.click()
        commonActions.browserWaitForElement(this.PageElements.getEmailTextBox)
        this.PageElements.getEmailTextBox.sendKeys(browser.params.Email);
        this.PageElements.txbx_Pswd.sendKeys(browser.params.Password);
        this.PageElements.btn_Login.click().then(function () {
            commonActions.waitForUrlToChange('https://staging.unityinfluence.com/brands')
            expect(browser.getCurrentUrl()).toBe('https://staging.unityinfluence.com/brands')
            browser.logger.info('Login successful with following credentials:"\n"' + browser.params.Email + '"\n"' + 'Password:' + browser.params.Password)
        })


    },

    Logout: function Logout() {
        browser.sleep(1000)
        commonActions.waitForElement(this.PageElements.mybrands_Btn);

        this.PageElements.mybrands_Btn.click();
        commonActions.browserWaitForElement(this.PageElements.signout_optn);
        this.PageElements.signout_optn.click();
        //  commonActions.browserWaitForElement(browser.getTitle()).toBe(getPageTitleAfterLogout)
        // browser.sleep(6000)
        commonActions.waitForUrlToChange('https://staging.unityinfluence.com/')
        browser.ignoreSynchronization = false;
        browser.waitForAngular()
        expect(browser.getTitle()).toBe(pageTitleAfterLogout);
        browser.logger.info('logOut functionality verified')


    },

    loginWithGmail: function loginwithGmail() {
        commonActions.browserWaitForElement(this.PageElements.google_Login_Btn)
        this.PageElements.google_Login_Btn.click()
        commonActions.browserWaitForElement(element(by.css('input[type="email"]')))
        element(by.css('input[type="email"]')).sendKeys(browser.params.GmailAddress);
        element(by.css('#identifierNext')).click();
        browser.sleep(6000)
        commonActions.browserWaitForElement(element(by.css('input[type="password"]')))
        element(by.css('input[type="password"]')).sendKeys(browser.params.GmailPswd);
        commonActions.browserWaitForElement(element(by.css('#passwordNext')))
        element(by.css('#passwordNext')).click().then(function () {
            browser.logger.info('Login with google verified')
            commonActions.waitForUrlToChange('https://staging.unityinfluence.com/brands')

        })
        expect(browser.getTitle()).toEqual(PageTitleAfterLogin)


    },

};

module.exports = loginPage