let adminCampaignProfilePage = require('../PageObject/adminCampaignProfile.po');
let fakeDataForInfluencer = require('../../../e2e/Data/dataForInfluencer');

describe('Verify by moving campaign draft to active by marking payment as received from admin ', function () {


    it('Verify clicking on payment received checkbox and then saving the campaign. ', function () {
        adminCampaignProfilePage.markCampaignAsPaymentReceived();
        expect(adminCampaignProfilePage.getStatusOfCampaign().getText()).toBe('Active');

    });
});

describe('Verify all ready existing influencer being added to the matched section of the automated campaign and then clicking on invite button.', function () {

    beforeAll(function (done) {

        browser.executeScript("arguments[0].scrollIntoView();", adminCampaignProfilePage.getAddPotentialInfluencerLink().getWebElement());
        adminCampaignProfilePage.getAddPotentialInfluencerLink().click();
        browser.executeScript("arguments[0].scrollIntoView();", adminCampaignProfilePage.getSearchInfluencerLink(0).getWebElement());
        adminCampaignProfilePage.getSearchInfluencerLink(0).click();
        adminCampaignProfilePage.switchToInfluencerListingAndSelectFirstInfluencer(browser.params.searchExistingInfluencer);
        done();

    });


    it('Verify that compensation budget for an influencer in potential matches is a mandatory field', function () {
        adminCampaignProfilePage.addPotentialInfluencerToCampaign('0', '0', '', browser.params.promotionBudgetForInfluencers);
        expect(adminCampaignProfilePage.getErrMessageForMandatoryCompensationBudget().getText()).toBe("This field is required.");
    });

    it('Verify that budget for a single influencer that cannot be more than the campaign usable budget', function () {
        adminCampaignProfilePage.addPotentialInfluencerToCampaign('0', '0', '10000', browser.params.promotionBudgetForInfluencers);
        expect(adminCampaignProfilePage.getErrMessageWhenBudgetMoreThanUsableBudget().isDisplayed()).toBeTruthy();
    });

    it('Verify influencer is added in potential matches successfully', function () {
        adminCampaignProfilePage.addPotentialInfluencerToCampaign('0', '0', browser.params.compensationBudgetForInfluencers, browser.params.promotionBudgetForInfluencers);
        expect(adminCampaignProfilePage.getSuccessMessage().isDisplayed()).toBeTruthy();
        expect(adminCampaignProfilePage.getInviteButton().isDisplayed()).toBeTruthy();
        browser.logger.info("Influencer added successfully");

    });

    it('Verify influencer is invited to campaign successfully', function () {
        adminCampaignProfilePage.getInvitedButtonInMatchedSection(0).click();
        expect(adminCampaignProfilePage.getInvitedInfluencerNameInInviteSection(0).getText()).toBe(browser.params.searchExistingInfluencer);


    });
    describe('Verify newly added influencer being added to the matched section of the automated campaign and then clicking on invite button.', function () {


        it('Search and map new influencer to automated campaign and then clicking on invite buttton. ', function () {
            browser.executeScript("arguments[0].scrollIntoView();", adminCampaignProfilePage.getAddPotentialInfluencerLink().getWebElement());
            adminCampaignProfilePage.getAddPotentialInfluencerLink().click();
            browser.executeScript("arguments[0].scrollIntoView();", adminCampaignProfilePage.getSearchInfluencerLink(0).getWebElement());
            adminCampaignProfilePage.getSearchInfluencerLink(0).click();
            adminCampaignProfilePage.switchToInfluencerListingAndSelectFirstInfluencer(fakeDataForInfluencer.randomFirstName + ' Automation Influencer');
            adminCampaignProfilePage.addPotentialInfluencerToCampaign('0', '0',
                browser.params.compensationBudgetForInfluencers, browser.params.promotionBudgetForInfluencers);
            adminCampaignProfilePage.getInvitedButtonInMatchedSection(0).click();
            expect(adminCampaignProfilePage.getInvitedInfluencerNameInInviteSection(1).getText()).toBe(fakeDataForInfluencer.randomFirstName + ' Automation Influencer');


        });
    });
});