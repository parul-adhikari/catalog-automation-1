let dictionary = require ('../../../Utils/DataFile.js');


function contentRequestListing() {
    
    // this.checkStatusOfRequestInListing = function (contentRequestId) {
    //
    //     if (expect(dictionary.dataDictionary.idOfContentRequest.getText()).toBe(contentRequestId))
    //     {
    //
    //         dictionary.dataDictionary.statusOfContentRequest.getText().then(function (text) {
    //             browser.logger.info("Status of content request " + contentRequestId + "is: " + text);
    //         });
    //     }
    //
    //     dictionary.dataDictionary.idOfContentRequest.getText().then(function (value) {
    //         browser.logger.info('Value of element is: ' + value);
    //         requestID=value;
    //         browser.logger.info("Value of requestID is:" + requestID)
    //     })
    // };

    this.checkStatusOfRequestInListing = function () {

        dictionary.dataDictionary.statusOfContentRequest.getText().then(function (text) {
                browser.logger.info("Status of content request is: " + text);
            });


        dictionary.dataDictionary.idOfContentRequest.getText().then(function (value) {
            browser.logger.info('Value of element is: ' + value);
            requestID=value;
            browser.logger.info("Value of requestID is:" + requestID)
        })
    };
}

module.exports = new contentRequestListing();
