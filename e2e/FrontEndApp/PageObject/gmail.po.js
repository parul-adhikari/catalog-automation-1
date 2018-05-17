let homePagePo = require('./home.po')
let commonActions = require('../../../Common/CommonActions.js');
let userDetailsPagePo = require('./userDetails.po')

function gmailPo() {

    var txbx_Email = $('input[type="email"]')
    var btn_Next = $('#identifierNext')
    var txbx_Password = $('input[type="password"]')
    var btn_PasswordNext = $('#passwordNext')
    this.PresenceOfGmailButton = function () {

        expect(homePagePo.Gmailbutton().isEnabled()).toBe(homePagePo.Gmailbutton().isEnabled());
    }
    this.ClickOnGmailbuttonAndRedirectionOnGmailPage = function () {
        homePagePo.Gmailbutton().click();

    }
    this.RegisterWithGmail = function (GmailId) {
        homePagePo.Gmailbutton().click();
        commonActions.waitElementToBeVisible(txbx_Email);
        txbx_Email.sendKeys(GmailId);
        btn_Next.click();
        commonActions.waitElementToBeVisible(txbx_Password);
        txbx_Password.sendKeys(browser.params.FacebookGmailPswd);
        btn_PasswordNext.click();
        commonActions.waitForUrlToChange(browser.params.Url + 'auth/sign-up/form;access_token')


    }



}

module.exports = new gmailPo();