let uploadContentPage = require('./uploadContent_po');
let dataDictionary = require ('../../../Utils/DataFile.js');


 function contentRequestDetail() {

     this.verifyOrderCreated = function () {

         dataDictionary.orderLink.click().then(function () {
                browser.getAllWindowHandles().then(function (handles) {
                    browser.switchTo().window(handles[2]).then(function () {
                        dataDictionary.waitForElement(dataDictionary.orderID);
                        dataDictionary.orderID.getText().then(function (value) {
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
        //dataDictionary.selectRequestedValueInDropDown(dataDictionary.shotDropDown,"Product: Flatlay $19");
        dataDictionary.uploadLink.click().then(function () {
        // $('#upload_contents').click().then(function () {
            browser.getAllWindowHandles().then(function (handles) {
                browser.switchTo().window(handles[2]).then(function () {
                    browser.waitForAngular();
                    dataDictionary.waitForElement(dataDictionary.addFileButton);
                    expect(browser.driver.getCurrentUrl()).toContain('content-upload');
                    browser.logger.info("Admin is on content upload screen");
                    uploadContentPage.multipleFileUpload("test1.jpg", "test2.jpg", "test3.jpg", "test4.jpg", "test5.jpg", "test6.jpg");
                    dataDictionary.crossIcon.click();
                    uploadContentPage.multipleFileUpload("test1.jpg", "test7.jpg", "test8.jpg", "test9.jpg", "test10.jpg", "test11.jpg");
                    uploadContentPage.afterUploadClick();
                    browser.driver.close();
                    browser.switchTo().window(handles[1]);
                    browser.refresh();
                });
            });
        })
    };

     this.viewContent = function (contentRequestId) {

         dataDictionary.waitForElement(dataDictionary.viewContentLink);
        // dataDictionary.selectRequestedValueInDropDown(dataDictionary.shotDropDown,"Product: Flatlay $19");
        dataDictionary.viewContentLink.click().then(function () {
            browser.getAllWindowHandles().then(function (handles) {
                browser.switchTo().window(handles[2]).then(function () {
                    dataDictionary.waitForElement(dataDictionary.searchTextBox);
                    expect(browser.driver.getCurrentUrl()).toContain('content/content/?content_request__id__exact=' + contentRequestId);
                    dataDictionary.waitForElement(dataDictionary.searchTextBox);
                    browser.logger.info("Admin is on view content screen");
                });
            });
      })

     };


 }

 module.exports = new contentRequestDetail();
