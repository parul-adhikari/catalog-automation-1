let EC = protractor.ExpectedConditions;
let dataDictionary = require ('../../../Utils/DataFile.js');
let freeContent = [];
var availableContent = [];
var purchasedWithRequestContent = [];
var unPublishedContent = [];

function contentListing() {

    this.errorStateAfterPurchased = function () {

        dataDictionary.selectMultipleChecks(['1']);
        dataDictionary.selectDropdownbyNum(dataDictionary.action,2);
        dataDictionary.goButton.click();
        dataDictionary.waitForElement(dataDictionary.error);
    };

    this.deleteContentFromListing = function () {

        dataDictionary.selectMultipleChecks(['1']);
        dataDictionary.selectDropdownbyNum(dataDictionary.action,1);
        dataDictionary.goButton.click().then(function(){
            dataDictionary.waitForElement(dataDictionary.deleteButton);
            dataDictionary.deleteButton.click();
            dataDictionary.waitForElement(dataDictionary.successMessage);
        });

    };

    this.bulkEditOptions = function () {

        // //Change status to Un-published
        dataDictionary.selectMultipleChecks(['1','2','3','4']);
        dataDictionary.selectDropdownbyNum(dataDictionary.action,3);
        dataDictionary.goButton.click();
        dataDictionary.waitForElement(dataDictionary.statusColumn);

        //Change status to Free
        dataDictionary.selectMultipleChecks(['3','4','5','6']);
        dataDictionary.selectDropdownbyNum(dataDictionary.action,5);
        dataDictionary.goButton.click();
        dataDictionary.waitForElement(dataDictionary.statusColumn);

        //Change status to Purchased with request
        dataDictionary.selectMultipleChecks(['5','6']);
        dataDictionary.selectDropdownbyNum(dataDictionary.action,4);
        dataDictionary.goButton.click();
        dataDictionary.waitForElement(dataDictionary.statusColumn);

        //Change status to Available
        dataDictionary.selectMultipleChecks(['5','6','9','10']);
        dataDictionary.selectDropdownbyNum(dataDictionary.action,2);
        dataDictionary.goButton.click();
        dataDictionary.waitForElement(dataDictionary.warning);


    };

    this.allBulkEdit = function () {

        dataDictionary.selectAll.click();
        dataDictionary.selectDropdownbyNum(dataDictionary.action,2);
        dataDictionary.goButton.click();
        //dataDictionary.waitForElement(dataDictionary.warning);
    };

    this.checkAllPossibleTransitions = function () {

        dataDictionary.firstEditLink.click().then(function () {
            browser.getAllWindowHandles().then(function (handles) {
                browser.switchTo().window(handles[3]).then(function () {
                    browser.waitForAngular();
                    dataDictionary.waitForElement(dataDictionary.statusDropDown);
                    expect(browser.driver.getCurrentUrl()).toContain('content/content/');
                    browser.logger.info("Admin is on content detail screen");
                    dataDictionary.getDropDownValues(dataDictionary.statusDropDown, 'option');
                    browser.sleep(1000);
                    browser.driver.close();
                    browser.switchTo().window(handles[2]);
                    browser.driver.close();
                    browser.switchTo().window(handles[1]);
                    browser.refresh();
                });
            });
        });


    };

    this.getContent = function (status) {

        dataDictionary.selectRequestedValueInDropDown(dataDictionary.status, status);

        for (i=1;; i++) {
            if (i >= 3) break;
            if(status === 'Free') {
                $('tr:nth-child(' + i + ') > th > a').getText().then(function (text) {

                    freeContent.push(text);
                    browser.logger.info('Element pushed into free content array is: ' + freeContent);

                })
            }
            else if(status === 'Available'){
                $('tr:nth-child(' + i + ') > th > a').getText().then(function (text) {

                    availableContent.push(text);
                    browser.logger.info('Element pushed into available content array is: ' + availableContent);

                })
            }

            else if(status === 'Purchased with the request'){
                $('tr:nth-child(' + i + ') > th > a').getText().then(function (text) {

                    purchasedWithRequestContent.push(text);
                    browser.logger.info('Element pushed into purchased with request array is: ' + purchasedWithRequestContent);

                })
            }

            else if(status === 'Un-published') {
                $('tr:nth-child(' + i + ') > th > a').getText().then(function (text) {

                    unPublishedContent.push(text);
                    browser.logger.info('Element pushed into unpublished is: ' + unPublishedContent);

                })
            }

        }

    };

    this.printMessages = function () {

        browser.logger.info("Free: " + freeContent);
        browser.logger.info("Available: " + availableContent);
        browser.logger.info("Purchased with request: " + purchasedWithRequestContent);
        browser.logger.info("Un-published: " + unPublishedContent);
    };

    this.verifyFreeTag = function () {

        if (dataDictionary.freeTag.isDisplayed())
        {
            dataDictionary.freeTag.click();
            dataDictionary.waitForElement((dataDictionary.freeOnLightbox));
            dataDictionary.freeOnLightbox.click();
            dataDictionary.idOnLightbox.getText().then(function(text) {
                if(text === '#'+freeContent[0]) {

                    browser.logger.info("Free image has free tag on it!!");
                }

                else if(text === '#'+freeContent[1]) {
                    browser.logger.info("Free image has free tag on it!!");
                }

                else{
                    browser.logger.info("IDs didnt' match!");
                }

            })

        }
    };

    this.verifyDownloadIcon = function () {
        if (dataDictionary.downloadButton.isDisplayed())
        {
            dataDictionary.tappableAreaOnthumbnail.click();
            dataDictionary.waitForElement((dataDictionary.downloadOnLightbox));
            dataDictionary.idOnLightbox.getText().then(function(text) {
                if(text === '#'+purchasedWithRequestContent[0]) {

                    browser.logger.info("available image has download tag on it!!");
                }

                else if(text === '#'+purchasedWithRequestContent[1]) {
                    browser.logger.info("available image has download tag on it!!");
                }

                else{
                    browser.logger.info("IDs didnt' match!");
                }

            })

        }

    };

    this.verifyAddToCartButton = function () {
        if (dataDictionary.addToCart.isDisplayed())
        {
            //dataDictionary.tappableAreaOnThumbnailAvailable.click();

            browser.actions().mouseMove((dataDictionary.addToCart), -20, -20).click().perform();
            dataDictionary.waitForElement((dataDictionary.addToCart));
            dataDictionary.idOnLightbox.getText().then(function(text) {
                if(text === '#'+availableContent[0]) {

                    browser.logger.info("available image has download tag on it!!");
                }

                else if(text === '#'+availableContent[1]) {
                    browser.logger.info("available image has download tag on it!!");
                }

                else{
                    browser.logger.info("IDs didnt' match!");
                }

            })

        }

    };

}


module.exports = new contentListing();
