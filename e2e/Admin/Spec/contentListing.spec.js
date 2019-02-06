let contentDetailPage = require('../PageObject/contentDetail-po');
let dataDictionary = require ('../../../Utils/DataFile.js');
let adminLoginPage = require('../PageObject/adminLogin-po.js');


describe('Verify transition to various statuses from admin panel', function () {

    beforeAll(function () {

        //Normal flow
        dataDictionary.waitForElement(dataDictionary.viewContentLink);
        expect(browser.getCurrentUrl()).toContain('content/contentrequest/' + dataDictionary.paidContentRequest + "/change/");

        // dataDictionary.getUrl('content requests');
        // browser.isElementPresent(dataDictionary.emailTextBox).then( function (result) {
        //     if (result) {
        //         adminLoginPage.adminLogin();
        //     };
        // });
        // dataDictionary.selectRequestedValueInDropDown(dataDictionary.brandDropDown, dataDictionary.existingBrand);
        // dataDictionary.selectDropdownbyNum(dataDictionary.paymentDropDown, 1);
        // dataDictionary.editButton.click();

        dataDictionary.viewContentLink.click().then(function () {
            browser.getAllWindowHandles().then(function (handles) {
                browser.switchTo().window(handles[2]).then(function () {
                    browser.waitForAngular();
                });
            });
        });
    });

    beforeEach(function () {
        dataDictionary.waitForElement(dataDictionary.firstEditLink);
        expect(browser.getCurrentUrl()).toContain('content/content/?content_request__id__exact=');
        dataDictionary.firstEditLink.click().then(function () {
            browser.getAllWindowHandles().then(function (handles) {
                browser.switchTo().window(handles[3]).then(function () {
                    dataDictionary.waitForElement(dataDictionary.statusDropDown);
                    browser.waitForAngular();
                    expect(browser.driver.getCurrentUrl()).toContain('content/content/');
                });
            });
        });

    });

    afterEach(function () {
        browser.getAllWindowHandles().then(function (handles) {
            browser.driver.close();
            browser.switchTo().window(handles[2]);
            //browser.switchTo().window(handles[1]);
            browser.refresh();

        });
    });

    it('Verify default status of images', function () {
        contentDetailPage.checkDefaultStatusOfImage();
    });

    it('Verify setting status to FREE and allowed states from FREE', function () {
        contentDetailPage.setStatusAsFree();
        contentDetailPage.checkTransitionFromFree();
    });

    it('Verify setting status to AVAILABLE and allowed states from AVAILABLE', function () {
        contentDetailPage.setStatusAsAvailable();
        contentDetailPage.checkTransitionFromAvailable();

    });

    it('Verify setting status back to PURCHASED WITH REQUEST and allowed states from PURCHASED WITH REQUEST', function () {
        contentDetailPage.setStatusAsPurchasedWithRequest();
        contentDetailPage.checkTransitionFromPurchasedWithRequest();

    });


});
