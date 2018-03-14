let fakeData = require('../../../Utils/FakeData.js');
let commonActions = require('../../../Common/CommonActions');

function HomePage() {

    var btn_Login = $('.btn.btn-primary.home-screen-mod.def-button.nav-link')
    var btn_Register = $('button[type="submit"]')
    var txbx_RegEmail = $('input[formcontrolname="email"]')
    var facebookButton = $("button[class*='facebook-btn']")
    var gmailButton = $('button[class*="google-btn"]')

    //text to be matched
    var urlToBeChanged = 'https://staging.unityinfluence.com/home'


    this.CheckUrl = function (Url) {
        expect(browser.getCurrentUrl()).toBe(Url)
    }
    this.Titleofthepage = function (Title) {
        expect(browser.getTitle()).toEqual(Title)
    }
    this.PresenceOfRegisterButtonAsDisabled = function () {
        expect(btn_Register.isDisplayed()).toBeTruthy();
        expect(btn_Register.isDisabled).toBe(btn_Register.isDisabled);

    }

    this.WrongFormattedEmail = function (name) {
        txbx_RegEmail.sendKeys(name);
        this.PresenceOfRegisterButtonAsDisabled();
    }

    this.ValidEmailRegister = function (email) {
        txbx_RegEmail.clear();
        txbx_RegEmail.sendKeys(email);
        btn_Register.click();
    }

    this.Gmailbutton = function () {
        commonActions.waitElementToBeVisible(gmailButton)
        return gmailButton;
    }
    this.facebookButton = function () {
        commonActions.waitElementToBeVisible(facebookButton)
        return facebookButton;
    }
};


module.exports = new HomePage();