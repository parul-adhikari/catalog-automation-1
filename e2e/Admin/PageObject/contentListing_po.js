let EC = protractor.ExpectedConditions;
let dictionary = require ('../../../Utils/DataFile.js');
let freeContent = [];
var availableContent = [];
var purchasedWithRequestContent = [];
var unPublishedContent = [];

function contentListing() {


    this.errorStateAfterPurchased = function () {

        dictionary.dataDictionary.selectMultipleChecks(['1']);
        dictionary.dataDictionary.selectDropdownbyNum(dictionary.dataDictionary.action,2);
        dictionary.dataDictionary.goButton.click();
        dictionary.dataDictionary.waitForElement(dictionary.dataDictionary.error);
    };

    this.deleteContentFromListing = function () {

        dictionary.dataDictionary.selectMultipleChecks(['1']);
        dictionary.dataDictionary.selectDropdownbyNum(dictionary.dataDictionary.action,1);
        dictionary.dataDictionary.goButton.click().then(function(){
            dictionary.dataDictionary.waitForElement(dictionary.dataDictionary.deleteButton);
            dictionary.dataDictionary.deleteButton.click();
            dictionary.dataDictionary.waitForElement(dictionary.dataDictionary.successMessage);
        });

    };

    this.bulkEditOptions = function () {

        // //Change status to Un-published
        dictionary.dataDictionary.selectMultipleChecks(['1','2','3','4']);
        dictionary.dataDictionary.selectDropdownbyNum(dictionary.dataDictionary.action,3);
        dictionary.dataDictionary.goButton.click();
        dictionary.dataDictionary.waitForElement(dictionary.dataDictionary.statusColumn);

        //Change status to Free
        dictionary.dataDictionary.selectMultipleChecks(['3','4','5','6']);
        dictionary.dataDictionary.selectDropdownbyNum(dictionary.dataDictionary.action,5);
        dictionary.dataDictionary.goButton.click();
        dictionary.dataDictionary.waitForElement(dictionary.dataDictionary.statusColumn);

        //Change status to Purchased with request
        dictionary.dataDictionary.selectMultipleChecks(['5','6']);
        dictionary.dataDictionary.selectDropdownbyNum(dictionary.dataDictionary.action,4);
        dictionary.dataDictionary.goButton.click();
        dictionary.dataDictionary.waitForElement(dictionary.dataDictionary.statusColumn);

        //Change status to Available
        dictionary.dataDictionary.selectMultipleChecks(['5','6','9','10']);
        dictionary.dataDictionary.selectDropdownbyNum(dictionary.dataDictionary.action,2);
        dictionary.dataDictionary.goButton.click();
        dictionary.dataDictionary.waitForElement(dictionary.dataDictionary.warning);


    };

    this.allBulkEdit = function () {

        dictionary.dataDictionary.selectAll.click();
        dictionary.dataDictionary.selectDropdownbyNum(dictionary.dataDictionary.action,2);
        dictionary.dataDictionary.goButton.click();
        //dictionary.dataDictionary.waitForElement(dictionary.dataDictionary.warning);
    };

    this.checkAllPossibleTransitions = function () {

        dictionary.dataDictionary.firstEditLink.click().then(function () {
            browser.getAllWindowHandles().then(function (handles) {
                browser.switchTo().window(handles[3]).then(function () {
                    browser.waitForAngular();
                    dictionary.dataDictionary.waitForElement(dictionary.dataDictionary.statusDropDown);
                    expect(browser.driver.getCurrentUrl()).toContain('content/content/');
                    browser.logger.info("Admin is on content detail screen");
                    dictionary.dataDictionary.getDropDownValues(dictionary.dataDictionary.statusDropDown, 'option');
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

        dictionary.dataDictionary.selectRequestedValueInDropDown(dictionary.dataDictionary.status, status);

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

        if (dictionary.dataDictionary.freeTag.isDisplayed())
        {
            dictionary.dataDictionary.freeTag.click();
            dictionary.dataDictionary.waitForElement((dictionary.dataDictionary.freeOnLightbox));
            dictionary.dataDictionary.idOnLightbox.getText().then(function(text) {
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
        if (dictionary.dataDictionary.downloadButton.isDisplayed())
        {
            dictionary.dataDictionary.tappableAreaOnthumbnail.click();
            dictionary.dataDictionary.waitForElement((dictionary.dataDictionary.downloadOnLightbox));
            dictionary.dataDictionary.idOnLightbox.getText().then(function(text) {
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
        if (dictionary.dataDictionary.addToCart.isDisplayed())
        {
            //dictionary.dataDictionary.tappableAreaOnThumbnailAvailable.click();

            browser.actions().mouseMove((dictionary.dataDictionary.addToCart), -20, -20).click().perform();
            dictionary.dataDictionary.waitForElement((dictionary.dataDictionary.addToCart));
            dictionary.dataDictionary.idOnLightbox.getText().then(function(text) {
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
