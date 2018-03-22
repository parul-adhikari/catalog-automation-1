let gmailPo = require('../../../e2e/FrontEndApp/PageObject/Gmail.po')
let userDetailsPagePo = require('../../../e2e/FrontEndApp/PageObject/UserDetails.po')
let userDetailsPasswordPo = require('../../../e2e/FrontEndApp/PageObject/UserDetailsPassword.po')
let commonActions = require('../../../Common/CommonActions');
let clearData = require('../../../e2e/FrontEndApp/PageObject/ClearAutomationData')


describe('Verify the Unity home page with gmail button and registration with gmail', function () {
    beforeAll(function (done) {
        browser.get(browser.params.Url);
        done();
    });
    beforeEach(function () {

        browser.get(browser.params.Url);
        browser.waitForAngular()

    })

    afterAll(function(){

        clearData.ClearCurrentSessionData();
        clearData.DeleteUser(browser.params.FacebookGmailAddress1);

    })


    it('Verify the presence of gmail button on home page.', () => {
        gmailPo.PresenceOfGmailButton();

    });

    it('Verify by clicking on gmail button user should get redirected to gmail page.', () => {
        gmailPo.ClickOnGmailbuttonAndRedirectionOnGmailPage();
        expect(browser.getCurrentUrl()).toContain('https://accounts.google.com')
    })
    it('Verify by registering a user using gmail', () => {
        gmailPo.RegisterWithGmail(browser.params.FacebookGmailAddress1);
        expect(browser.getCurrentUrl()).toContain(browser.params.Url+'/auth/sign-up/form;access_token')
        userDetailsPagePo.txt_PhoneNumber().sendKeys('7895912123')
        browser.actions().mouseMove(userDetailsPasswordPo.chk_TermsAndCondition()).doubleClick().perform()
        userDetailsPasswordPo.btn_BrandSetup().click();
        commonActions.waitForUrlToChange(browser.params.Url+'/brands')
        browser.refresh();
        expect(browser.getCurrentUrl()).toContain(browser.params.Url+'/brands')// check button enable with out phone number.



    })


});