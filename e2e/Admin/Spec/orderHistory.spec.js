let contentLibraryPage = require('../PageObject/contentLibrary_po');
let adminLoginPage = require('../PageObject/adminLogin_po.js');
let dataDictionary = require ('../../../Utils/DataFile.js');
let contentListingPage = require('../PageObject/contentListing_po');
let contentRequestDetailPage = require('../PageObject/contentRequestDetail_po');


   describe('Verify transition to various statuses from admin panel using bulk edit functionality', function () {

       beforeAll(function () {
           expect(browser.getCurrentUrl()).toContain('brands/' + dataDictionary.existingBrandId);
           dataDictionary.orderHistoryOnSidePanel.click();
           dataDictionary.waitForElement((dataDictionary.orderIdOnOrderHistory));
           expect(browser.getCurrentUrl()).toContain(dataDictionary.existingBrandId + "/order-history");
       });


       afterAll(function() {
           browser.getAllWindowHandles().then(function (handles) {
               browser.driver.close();
               browser.switchTo().window(handles[0]);
               browser.driver.close();

           });

       });

       it('Verify download icon on purchased images', function () {
           contentRequestDetailPage.verifyOrderInOrderHistory();
       });

       // it('Verify download icon on purchased images', function () {
       //     contentListingPage.verifyDownloadIcon();
       // });



   });
