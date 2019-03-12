let contentLibraryPage = require('../PageObject/contentLibrary_po.js');
let adminLoginPage = require('../PageObject/adminLogin_po.js');
let dataDictionary = require ('../../../Utils/DataFile.js');
let contentListingPage = require('../PageObject/contentListing_po');
let contentRequestDetailPage = require('../PageObject/contentRequestDetail_po');
//var loginPage = require('../../FrontEnd/PageObject/login_po.js');

describe('Verify transition to various statuses from admin panel using bulk edit functionality', function () {

       beforeAll(function () {

           expect(browser.getCurrentUrl()).toContain('brand/brand/' + dataDictionary.existingBrandId);
           dataDictionary.viewContentLibraryLink.click();
           browser.getAllWindowHandles().then(function (handles) {
               browser.switchTo().window(handles[1]);
               // loginPage.doLogin();
               browser.sleep(5000);
               contentLibraryPage.brandOnFrontEnd();
           });
       });

       afterEach(function () {

           dataDictionary.closeIconOnLightbox.click();
       });

       // afterAll(function() {
       //     browser.getAllWindowHandles().then(function (handles) {
       //         browser.driver.close();
       //         browser.switchTo().window(handles[0]);
       //         browser.driver.close();
       //
       //     });
       //
       // });

       it('Verify free tag on free images', function () {
           contentListingPage.verifyFreeTag();
       });

       it('Verify download icon on purchased images', function () {
           contentListingPage.verifyDownloadIcon();
       });

       // it('Verify add to cart button on available images', function () {
       //     contentListingPage.verifyAddToCartButton();
       // });
   });
