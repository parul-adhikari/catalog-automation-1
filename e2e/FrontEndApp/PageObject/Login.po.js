let commonActions = require('../../../Common/CommonActions.js');


function LoginPage() {


    //xpath locators


    var txt_PageHeading = element(by.xpath('//div[@class="bold text-center login-head"]'))
    var alert = element(by.xpath('/html/body/app-root/app-success-dialog/div/div[2]/div'))

    //css locators
    var txbx_Email = $("div:nth-child(1) > div > input")
    var txbx_Pswd = $("input[formcontrolname*='password']")
    var btn_Login = $("button[type*='submit']")
    var mybrands_Btn = element(by.css('#secondaryMenuButton'))
    var signout_optn = element(by.css('.sign-out'))
    var google_Login_Btn = element(by.css('.google-btn'))
    var btn_UnityLogin = element(by.css('.btn.btn-primary.home-screen-mod.def-button.nav-link'))
    var errMsg = element(by.css('.msg.fixed.row.align-items-center.error'))


    //text to be matched
    var alertMessage = 'Sorry! The login credentials are not valid.'
    var pageTitleAfterLogout = 'Influencer Advertising Simplified'
    var PageTitleAfterLogin = 'Unity Influence'
    var txt_expectedPageHeading = 'Log in to your Unity account'
    var urlToBeChanged = 'https://staging.unityinfluence.com/brands'


    this.blankLoginCheck = function () {
        commonActions.waitElementToBeClickable(txbx_Email);
        txbx_Email.clear();
        txbx_Pswd.clear();
        browser.logger.info('Blank check verified tried clicking on Login button without filling any value in username and password')
    },

        this.wrongCredentials = function () {
            txbx_Email.clear();
            txbx_Pswd.clear();
            txbx_Email.sendKeys(browser.params.WrongEmail);
            txbx_Pswd.sendKeys(browser.params.Password);
            btn_Login.click().then(function () {

                commonActions.waitElementToBeVisible(element(by.css('.msg.fixed.row.align-items-center.error')));
                browser.logger.info('Wrong credentials check verified using following +"\n"' + browser.params.WrongEmail + '"\n"' + '"Password:"' + browser.params.Password)
            })
        }


    this.doLogin = function (UserEmail, Password) {
        btn_UnityLogin.click()
        commonActions.waitForUrlToChange('https://staging.unityinfluence.com/auth/login')
        commonActions.waitElementToBeClickable(txbx_Email)
        txbx_Email.sendKeys(UserEmail);
        txbx_Pswd.sendKeys(Password);
        expect(btn_Login.isEnabled).toBe(btn_Login.isEnabled)
        btn_Login.click();


    }


    this.Logout = function () {

        commonActions.waitElementToBeClickable(mybrands_Btn);
        mybrands_Btn.click();
        commonActions.browserWaitForElement(signout_optn);
        signout_optn.click().then(function () {
            commonActions.waitForUrlToChange(browser.params.Url + '/')
            browser.logger.info('Logout functionality verified')
        })
    }


    this.loginwithGmail = function () {
        commonActions.waitElementToBeClickable(google_Login_Btn);
        google_Login_Btn.click().then(function () {
            commonActions.waitElementToBeVisible(element(by.css('input[type="email"]')));
            element(by.css('input[type="email"]')).sendKeys(browser.params.GmailAddress);
            element(by.css('#identifierNext')).click().then(function () {
                // browser.sleep(6000)
                commonActions.waitElementToBeClickable(element(by.css('input[type="password"]')));
                element(by.css('input[type="password"]')).sendKeys(browser.params.GmailPswd);
                commonActions.waitElementToBeClickable(element(by.css('#passwordNext')));
                element(by.css('#passwordNext')).click().then(function () {
                    browser.logger.info('Login with google verified');
                    commonActions.waitForUrlToChange('https://staging.unityinfluence.com/brands')

                });
            })
        })


    }

    this.pageTitleAfterLogout = function () {

        return pageTitleAfterLogout;
    }

};

module.exports = new LoginPage();