let contentListingPage = require('../PageObject/contentListing_po');
let adminLoginPage = require('../PageObject/adminLogin_po.js');
let dataDictionary = require ('../../../Utils/DataFile.js');

describe('Verify transition to various statuses from admin panel using bulk edit functionality', function () {

       beforeAll(function () {
           // dataDictionary.waitForElement(dataDictionary.action);
           // expect(browser.getCurrentUrl()).toContain('content/content/?content_request__id__exact=' + dataDictionary.paidContentRequest);
           browser.get('https://api-staging.unityinfluence.com/admin/content/content/?content_request__id__exact=997&content_category__id__exact=1');
           browser.isElementPresent(dataDictionary.emailTextBox).then( function (result) {
               if (result) {
                   adminLoginPage.adminLogin();
               };
           });
       });

       afterAll(function() {
           // browser.getAllWindowHandles().then(function (handles) {
           //     browser.driver.close();
           //     browser.switchTo().window(handles[1]);
           //     browser.driver.close();
           //     browser.switchTo().window(handles[0]);
           //
           // });

           browser.get("https://api-staging.unityinfluence.com/admin/brand/brand/401/change/?_changelist_filters=q%3Dautomation");

               //browser.driver.close();

       });

       // it('Verify error on changing status from Purchased from request from action drop down', function () {
       //     contentListingPage.errorStateAfterPurchased();
       //     browser.logger.info("Cannot change to any state from Purchased from request");
       // });
       //
       // it('Verify deleting content from listing', function () {
       //     contentListingPage.deleteContentFromListing();
       //     browser.logger.info("Content successfully deleted!");
       // });
       //
       // it('Verify all possible bulk edit options while selecting all content pieces', function () {
       //     contentListingPage.allBulkEdit();
       //     browser.logger.info("Verified bulk change statuses for all content piece");
       // });
       //
       // it('Verify all possible bulk edit options only for a single content piece', function () {
       //     contentListingPage.bulkEditOptions();
       //     browser.logger.info("Verified all possible transitions for a single content piece");
       // });

       it('Get ID of free content', function () {
           contentListingPage.getContent(dataDictionary.status2);
       });

       it('Get ID of available content', function () {
           contentListingPage.getContent(dataDictionary.status3);
       });

       it('Get ID of purchased with request content', function () {
           contentListingPage.getContent(dataDictionary.status4);
       });

       it('Get ID of un-published content', function () {
           contentListingPage.getContent(dataDictionary.status1);
       });

       it('Print all 4 arrays based on content status', function () {
           contentListingPage.printMessages();

       });

 });
