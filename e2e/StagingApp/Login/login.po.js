var CommonActions = require('../../../Common/CommonActions.js');


var LoginPage = {


    PageElements: {

        //xpath locators
        txbx_Email: element(by.xpath('//input[@formcontrolname="email"]')),
        txbx_Pswd: element(by.xpath('//input[@formcontrolname="password"]')),
        btn_Login: element(by.xpath('//button[@type="submit"]')),
        txt_PageHeading: element(by.xpath('//div[@class="bold text-center login-head"]')),
        alert: element(by.xpath('/html/body/app-root/app-success-dialog/div/div[2]/div')),

        //css locators
        mybrands_Btn: element(by.css('#secondaryMenuButton')),
        signout_optn: element(by.css('.sign-out')),
        google_Login_Btn: element(by.css('.google-btn')),
        btn_UnityLogin: element(by.css('.btn.btn-primary.home-screen-mod.def-button.nav-link')),
        errMsg: element(by.css('.msg.fixed.row.align-items-center.error')),


        //text to be matched
        alertMessage: 'Sorry! The login credentials are not valid.',
        pageTitleAfterLogout: 'Influencer Advertising Simplified',
        PageTitleAfterLogin: 'Unity Influence',
        txt_expectedPageHeading: 'Log in to your Unity account',
        urlToBeChanged: 'https://staging.unityinfluence.com/brands'


    },


    blankLoginCheck: function blankLoginCheck() {
        CommonActions.waitElementToBeClickable(this.PageElements.txbx_Email);
        this.PageElements.txbx_Email.clear();
        this.PageElements.txbx_Pswd.clear();
        browser.logger.info('Blank check verified tried clicking on Login button without filling any value in username and password')
    },


    wrongCredentials: function wrongCredentials() {


        this.PageElements.txbx_Email.clear();
        this.PageElements.txbx_Pswd.clear();
        this.PageElements.txbx_Email.sendKeys(browser.params.WrongEmail);
        this.PageElements.txbx_Pswd.sendKeys(browser.params.Password);
        this.PageElements.btn_Login.click().then(function () {

            // browser.sleep(6000)
            CommonActions.waitElementToBeVisible(element(by.css('.msg.fixed.row.align-items-center.error')));
            browser.logger.info('Wrong credentials check verified using following +"\n"' + browser.params.WrongEmail + '"\n"' + '"Password:"' + browser.params.Password)


        })


    },

    doLogin: function doLogin() {
        this.PageElements.btn_UnityLogin.click()
        CommonActions.waitElementToBeClickable(this.PageElements.txbx_Email)
        this.PageElements.txbx_Email.sendKeys(browser.params.Email);
        this.PageElements.txbx_Pswd.sendKeys(browser.params.Password);
        expect(this.PageElements.btn_Login.isEnabled).toBe(this.PageElements.btn_Login.isEnabled)
        this.PageElements.btn_Login.click().then(function () {
            CommonActions.waitForUrlToChange('https://staging.unityinfluence.com/brands')
            browser.logger.info('Login successful with following credentials:"\n"' + browser.params.Email + '"\n"' + 'Password:' + browser.params.Password)
        })


    },

    Logout: function Logout() {

        CommonActions.waitElementToBeClickable(this.PageElements.mybrands_Btn);
        this.PageElements.mybrands_Btn.click();
        CommonActions.browserWaitForElement(this.PageElements.signout_optn);
        this.PageElements.signout_optn.click().then(function () {


            CommonActions.waitForUrlToChange('https://staging.unityinfluence.com/')
           /* browser.ignoreSynchronization = false;
            browser.waitForAngular()*/

            browser.logger.info('Logout functionality verified')

        })
    },

    loginwithGmail: function loginwithGmail() {
        CommonActions.waitElementToBeClickable(this.PageElements.google_Login_Btn);
        this.PageElements.google_Login_Btn.click().then(function () {
            CommonActions.waitElementToBeVisible(element(by.css('input[type="email"]')));
            element(by.css('input[type="email"]')).sendKeys(browser.params.GmailAddress);
            element(by.css('#identifierNext')).click().then(function () {
                // browser.sleep(6000)
                CommonActions.waitElementToBeClickable(element(by.css('input[type="password"]')));
                element(by.css('input[type="password"]')).sendKeys(browser.params.GmailPswd);
                CommonActions.waitElementToBeClickable(element(by.css('#passwordNext')));
                element(by.css('#passwordNext')).click().then(function () {
                    browser.logger.info('Login with google verified');
                    CommonActions.waitForUrlToChange('https://staging.unityinfluence.com/brands')

                });
            })
        })


    }

};

module.exports = LoginPage;