let contentRequestListingPage = require('../PageObject/contentRequestListing_po');
let dictionary = require ('../../../Utils/DataFile.js');
let contentRequestDetailPage = require('../PageObject/contentRequestDetail_po');
let contentListingPage = require('../PageObject/contentListing_po');
let fakeData = require('../../../Utils/FakeData.js');


describe('Verify opening content requests for which payment has/ has not been made', function () {

    beforeAll(function (done) {

        if(expect(browser.getCurrentUrl()).toContain("brand_id=")){
            browser.logger.info("Admin is on brand specific content request listing")

        }
        // dictionary.dataDictionary.getAdminUrl('content requests' + "?brand_id=" + fakeData.randomFirstName);
        // // browser.isElementPresent(dictionary.dataDictionary.emailTextBox).then( function (result) {
        // //     if (result) {
        // //         adminLoginPage.adminLogin();
        // //     };
        // // });
        done();
    });

    beforeEach(function () {

        dictionary.dataDictionary.getAdminUrl('content requests');
        dictionary.dataDictionary.selectRequestedValueInDropDown(dictionary.dataDictionary.brandDropDown, fakeData.randomFirstName);
        expect(browser.getCurrentUrl()).toContain(fakeData.randomFirstName);

    });


    // it('Go to content request payment for which has not been received and verify its details', function () {
    //     expect(browser.getCurrentUrl()).toContain('=Automation');
    //     dictionary.dataDictionary.selectDropdownbyNum(dictionary.dataDictionary.paymentDropDown, 2);
    //     expect(browser.getCurrentUrl()).toContain('order_type=' + dictionary.dataDictionary.orderTypeForPaymentNotReceived);
    //     contentRequestListingPage.checkStatusOfRequestInListing(dictionary.dataDictionary.unPaidContentRequest);
    //     dictionary.dataDictionary.editButton.click();
    //     expect(browser.getCurrentUrl()).toContain('contentrequest/' + dictionary.dataDictionary.unPaidContentRequest + '/change/');
    //     contentRequestDetailPage.uploadContent();
    //     expect(browser.getCurrentUrl()).toContain('contentrequest/' + dictionary.dataDictionary.unPaidContentRequest + '/change/');
    //     contentRequestDetailPage.viewContent(dictionary.dataDictionary.unPaidContentRequest);
    //     browser.logger.info("--------------Possible transitions from unpublished state when payment has not been received--------------");
    //     expect(browser.getCurrentUrl()).toContain('content/content/?content_request__id__exact=');
    //     contentListingPage.checkAllPossibleTransitions();
    // });

    it('Mark payment received as true for content requested created from front end', function () {

        dictionary.dataDictionary.editButton.click();
        dictionary.dataDictionary.paymentReceivedFlag.click();
        dictionary.dataDictionary.saveAndContinueButton.click();
        browser.sleep(2000);
    });

    it('Go to content request payment for which has been received and verify its details', function () {
        dictionary.dataDictionary.selectDropdownbyNum(dictionary.dataDictionary.paymentDropDown, 1);
        expect(browser.getCurrentUrl()).toContain('order_type=' + dictionary.dataDictionary.orderTypeForPaymentReceived);
        // contentRequestListingPage.checkStatusOfRequestInListing(dictionary.dataDictionary.paidContentRequest);
        contentRequestListingPage.checkStatusOfRequestInListing();
        dictionary.dataDictionary.editButton.click();
        expect(browser.getCurrentUrl()).toContain('contentrequest/');
        // contentRequestDetailPage.uploadContent();
        // expect(browser.getCurrentUrl()).toContain('contentrequest/');
        // //Get ID of pre-paid order
        // contentRequestDetailPage.verifyOrderCreated();
        // expect(browser.getCurrentUrl()).toContain('contentrequest/');
        // contentRequestDetailPage.viewContent();
        // browser.logger.info("--------------Possible transitions from unpublished state when payment has been received--------------");
        // expect(browser.getCurrentUrl()).toContain('content/content/?content_request__id__exact=');
        // contentListingPage.checkAllPossibleTransitions();

    });

});

