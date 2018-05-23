let adminInfluencerListingPage = require('../PageObject/adminInfluencerListing.po');
let createInfluencerPage = require('../PageObject/createNewinfluencer.po')
let adminLogin = require('../PageObject/adminLogin.po');
let fakeDataForInfluencer = require('../../../e2e/Data/dataForInfluencer');


describe('Verify Campaign search and clicking on the link', function () {

    beforeAll(function (done) {
        browser.get(browser.params.adminUrlForInfluencerListing);
        browser.isElementPresent(adminLogin.getEmailTextBox()).then(function (result) {
            if (result) {
                adminLogin.doAdminLogin();
            }

        });
        done();
    });
    it('Verify creating a new influencer.', function () {
        adminInfluencerListingPage.getAddNewInfluencerButton().click();
        createInfluencerPage.fillDetailsAndClickOnSaveButton(fakeDataForInfluencer.randomFirstName + ' Automation Influencer', fakeDataForInfluencer.randomFirstName + '@mailinator.com');
        expect(createInfluencerPage.getSuccessMessageAfterAddingInfluencer().isPresent()).toBe(true);
        expect(createInfluencerPage.getSuccessMessageAfterAddingInfluencer().getText()).toContain(fakeDataForInfluencer.randomFirstName + ' Automation Influencer');

    });
});