let contentRequestListingPage = require('../PageObject/contentRequestListing_po');
let dataDictionary = require ('../../../Utils/DataFile.js');
let contentRequestDetailPage = require('../PageObject/contentRequestDetail_po');
let contentListingPage = require('../PageObject/contentListing_po');

describe('Verify opening content requests for which payment has/ has not been made', function () {

    beforeAll(function (done) {

        if(expect(browser.getCurrentUrl()).toContain("brand_id=")){
            browser.logger.info("Admin is on brand specific content request listing")

        }
        // dataDictionary.getAdminUrl('content requests' + "?brand_id=" + dataDictionary.existingBrandId);
        // // browser.isElementPresent(dataDictionary.emailTextBox).then( function (result) {
        // //     if (result) {
        // //         adminLoginPage.adminLogin();
        // //     };
        // // });
        done();
    });

    beforeEach(function () {

        dataDictionary.getAdminUrl('content requests');
        dataDictionary.selectRequestedValueInDropDown(dataDictionary.brandDropDown, dataDictionary.existingBrand);
    });


    // it('Go to content request payment for which has not been received and verify its details', function () {
    //     expect(browser.getCurrentUrl()).toContain('=Automation');
    //     dataDictionary.selectDropdownbyNum(dataDictionary.paymentDropDown, 2);
    //     expect(browser.getCurrentUrl()).toContain('order_type=' + dataDictionary.orderTypeForPaymentNotReceived);
    //     contentRequestListingPage.checkStatusOfRequestInListing(dataDictionary.unPaidContentRequest);
    //     dataDictionary.editButton.click();
    //     expect(browser.getCurrentUrl()).toContain('contentrequest/' + dataDictionary.unPaidContentRequest + '/change/');
    //     contentRequestDetailPage.uploadContent();
    //     expect(browser.getCurrentUrl()).toContain('contentrequest/' + dataDictionary.unPaidContentRequest + '/change/');
    //     contentRequestDetailPage.viewContent(dataDictionary.unPaidContentRequest);
    //     browser.logger.info("--------------Possible transitions from unpublished state when payment has not been received--------------");
    //     expect(browser.getCurrentUrl()).toContain('content/content/?content_request__id__exact=');
    //     contentListingPage.checkAllPossibleTransitions();
    // });

    it('Go to content request payment for which has been received and verify its details', function () {
        expect(browser.getCurrentUrl()).toContain('=Automation');
        dataDictionary.selectDropdownbyNum(dataDictionary.paymentDropDown, 1);
        expect(browser.getCurrentUrl()).toContain('order_type=' + dataDictionary.orderTypeForPaymentReceived);
        contentRequestListingPage.checkStatusOfRequestInListing(dataDictionary.paidContentRequest);
        dataDictionary.editButton.click();
        expect(browser.getCurrentUrl()).toContain('contentrequest/' + dataDictionary.paidContentRequest + '/change/');
        contentRequestDetailPage.uploadContent();
        expect(browser.getCurrentUrl()).toContain('contentrequest/' + dataDictionary.paidContentRequest + '/change/');
        //Get ID of pre-paid order
        contentRequestDetailPage.verifyOrderCreated();
        expect(browser.getCurrentUrl()).toContain('contentrequest/' + dataDictionary.paidContentRequest + '/change/');
        contentRequestDetailPage.viewContent(dataDictionary.paidContentRequest);
        browser.logger.info("--------------Possible transitions from unpublished state when payment has been received--------------");
        expect(browser.getCurrentUrl()).toContain('content/content/?content_request__id__exact=');
        contentListingPage.checkAllPossibleTransitions();

    });

});

