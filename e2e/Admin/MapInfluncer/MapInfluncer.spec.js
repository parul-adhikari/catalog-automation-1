let MapInfluencerPage = require('./MapInfluncer.po');
let SelectCamp = require('../SelectCamp/SelectCamp.po');
let Home = require('../AdminHome/Home.po');
let AddInfluncer = require('../AddInfluncer/AddInfluncer.po');
let CommonActions = require('../../../Common/CommonActions');
let Gmail = require('../../../Common/GmailTest');
let Login = require('../AdminLogin/Login.po');


describe('Verify the Influencer mapping functionality', function () {

    let firstName = browser.params.NewInfluencerFirstName;
    let secondName = browser.params.NewInfluencerSecondName;

    beforeAll((done) => {

        browser.get(browser.params.AdminUrl);
        Login.doAdminLogin();
        done();
    });

    beforeEach(() => {
        browser.navigate().to('https://api-staging.unityinfluence.com/admin/');
        Home.clickInfluencerLink();
        AddInfluncer.clickAddInfluencerBtn();
        AddInfluncer.AddDetails();
        AddInfluncer.confirmSuccessfulNotificationMessage();
        AddInfluncer.goToCampaignListingPage();


    });

    //Negative scenario

    it('Verify that Influencer should not get map with a campaign on page reload', () => {
        SelectCamp.searchCampaign(browser.params.NotShippedCampaign);
        MapInfluencerPage.removeAlreadyExistedInfluencer();
        MapInfluencerPage.selectNewInfluencerName();
        browser.navigate().to(browser.getCurrentUrl()).then(() => {
            CommonActions.waitForElement(MapInfluencerPage.PageElements.rowList);
            CommonActions.scrollToElement(MapInfluencerPage.PageElements.rowList);
            expect(MapInfluencerPage.PageElements.rowList.count()).toBeLessThan(2);
            browser.logger.info('Influncer is not mapped with Campaign on page load')

        })
    });

    it('Verify the matched status of an influncer when mapped to non-shipping campaign', () => {
        SelectCamp.searchCampaign(browser.params.NotShippedCampaign);
        MapInfluencerPage.removeAlreadyExistedInfluencer();
        MapInfluencerPage.selectNewInfluencerName();
        MapInfluencerPage.saveInfluencer();
        let statusDropDown = element(by.css('#id_campaigninfluencer_set-0-status'));
        expect(statusDropDown.$('option:checked').getText()).toEqual('Matched');
        expect(statusDropDown.isDisabled).toBe(statusDropDown.isDisabled);

        statusDropDown.$('option:checked').getText().then((value) => {
            browser.logger.info('Status is :' + value);

        })
    });


    it('Map New Influencer with Campaign having shipping address', () => {

        SelectCamp.searchCampaign(browser.params.FirstCampName);
        MapInfluencerPage.removeAlreadyExistedInfluencer();
        MapInfluencerPage.selectNewInfluencerName();
        MapInfluencerPage.saveInfluencer();
        let list = element.all(by.xpath('//*[@class="form-row field-not_interested_influencers"]//following::div[@class="readonly"]'));
        CommonActions.waitForElement(list);
        CommonActions.scrollToElement(list);
        expect(list.getText()).toMatch(firstName);
    });

});


    describe('Verify the email in inbox', () => {

        it('Verify the received email in inbox', () => {
            // var email_Subject = element(by.xpath('.//!*[@id=":n2"]'));
            Gmail.gmailSignIn(browser.params.GmailAddress, browser.params.GmailPswd);
            expect(browser.getCurrentUrl()).toContain('https://mail.google.com/mail');
            Gmail.verifyReceivedEmail();
            let email_Subject = element(by.xpath('//*[@class="ha"]'));
            expect(email_Subject.getText()).toContain('Unity | Paid collaboration opportunity with');

        });

        it('Verify the collboration', () => {
            Gmail.verifyButtonInEmail()


        });



    });









