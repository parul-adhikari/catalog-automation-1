let uploadContentPage = require('./uploadContent_po');
let dictionary = require ('../../../Utils/DataFile.js');


 function contentRequestDetail() {

     this.verifyOrderCreated = function () {

         dictionary.dataDictionary.orderLink.click().then(function () {
                browser.getAllWindowHandles().then(function (handles) {
                    browser.switchTo().window(handles[2]).then(function () {
                        dictionary.dataDictionary.waitForElement(dictionary.dataDictionary.orderID);
                        dictionary.dataDictionary.orderID.getText().then(function (value) {
                            browser.logger.info('Order link for this content request: ' + value);
                            return value;
                        })

                         browser.driver.close();
                        browser.switchTo().window(handles[1]);
                        browser.refresh();
                    });
                });
        });
    }

     this.uploadContent = function () {
        //dictionary.dataDictionary.selectRequestedValueInDropDown(dictionary.dataDictionary.shotDropDown,"Product: Flatlay $19");
         dictionary.dataDictionary.uploadLink.click().then(function () {
        // $('#upload_contents').click().then(function () {
            browser.getAllWindowHandles().then(function (handles) {
                browser.switchTo().window(handles[2]).then(function () {
                    browser.waitForAngular();
                    dictionary.dataDictionary.waitForElement(dictionary.dataDictionary.addFileButton);
                    expect(browser.driver.getCurrentUrl()).toContain('content-upload');
                    browser.logger.info("Admin is on content upload screen");
                    uploadContentPage.multipleFileUpload("test1.jpg", "test2.jpg", "test3.jpg", "test4.jpg", "test5.jpg", "test6.jpg");
                    dictionary.dataDictionary.crossIcon.click();
                    uploadContentPage.multipleFileUpload("test1.jpg", "test7.jpg", "test8.jpg", "test9.jpg", "test10.jpg", "test11.jpg");
                    uploadContentPage.afterUploadClick();
                    browser.driver.close();
                    browser.switchTo().window(handles[1]);
                    browser.refresh();
                });
            });
        })
    };

     this.viewContent = function () {

         dictionary.dataDictionary.waitForElement(dictionary.dataDictionary.viewContentLink);
        // dictionary.dataDictionary.selectRequestedValueInDropDown(dictionary.dataDictionary.shotDropDown,"Product: Flatlay $19");
         dictionary.dataDictionary.viewContentLink.click().then(function () {
            browser.getAllWindowHandles().then(function (handles) {
                browser.switchTo().window(handles[2]).then(function () {
                    dictionary.dataDictionary.waitForElement(dictionary.dataDictionary.searchTextBox);
                    expect(browser.driver.getCurrentUrl()).toContain('content/content/?content_request__id__exact=');
                    dictionary.dataDictionary.waitForElement(dictionary.dataDictionary.searchTextBox);
                    browser.logger.info("Admin is on view content screen");
                });
            });
      })

     };


 }

 module.exports = new contentRequestDetail();
