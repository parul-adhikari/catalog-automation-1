let dictionary = require ('../../../Utils/DataFile.js');


function contentDetail() {


    this.checkDefaultStatusOfImage = function () {

        dictionary.dataDictionary.statusDropDown.$('option:checked').getText().then(function (text) {
            expect(text).toEqual(dictionary.dataDictionary.status1);
            browser.logger.info("Default status of image is: " + text);
        });

    };

    this.setStatusAsFree = function () {
        dictionary.dataDictionary.selectDropdownbyNum(dictionary.dataDictionary.statusDropDown,1);
        dictionary.dataDictionary.saveButton.click();
        expect(dictionary.dataDictionary.successMessage.isDisplayed());
        expect(dictionary.dataDictionary.statusDropDown.$('option:checked').getText()).toBe("Free");
        browser.logger.info("Status successfully set to FREE");
    };

    this.checkTransitionFromFree = function () {
        // browser.logger.info("All possible transitions from FREE are: ");
        // dictionary.dataDictionary.getDropDownValues(dictionary.dataDictionary.statusDropDown, 'option').then(function(values){
        //     expect(values).toEqual(['UN_PUBLISHED', 'FREE', 'AVAILABLE', 'PURCHASED_VIA_REQUEST']);
        //     browser.logger.info("All possible transitions from FREE are: " + values);
        //
        // });

        var values = element(by.id('id_status')).all(by.tagName('option')).getAttribute('value').then(function (values)
        {
            expect(values).toEqual(['UN_PUBLISHED', 'FREE', 'AVAILABLE', 'PURCHASED_VIA_REQUEST']);
            browser.logger.info("All possible transitions from FREE are: " + values);
        });
    };

    this.setStatusAsAvailable = function () {

        dictionary.dataDictionary.selectDropdownbyNum(dictionary.dataDictionary.statusDropDown,2);
        dictionary.dataDictionary.saveButton.click();
        expect(dictionary.dataDictionary.successMessage.isDisplayed());
        expect(dictionary.dataDictionary.statusDropDown.$('option:checked').getText()).toBe("Available");
        browser.logger.info("Status successfully set to AVAILABLE");

    };

    this.checkTransitionFromAvailable = function () {
        // browser.logger.info("All possible transitions from AVAILABLE are: ");
        // dictionary.dataDictionary.getDropDownValues(dictionary.dataDictionary.statusDropDown, 'option').then(function(values){
        //     expect(values).toEqual(['UN_PUBLISHED', 'FREE', 'AVAILABLE', 'PURCHASED_VIA_REQUEST']);
        //     browser.logger.info("All possible transitions from AVAILABLE are: " + values);
        //
        // });

        var values = element(by.id('id_status')).all(by.tagName('option')).getAttribute('value').then(function (values)
        {
            expect(values).toEqual(['UN_PUBLISHED', 'FREE', 'AVAILABLE', 'PURCHASED_VIA_REQUEST']);
            browser.logger.info("All possible transitions from AVAILABLE are: " + values);
        });

    };

    this.setStatusAsPurchasedWithRequest = function () {

        dictionary.dataDictionary.selectDropdownbyNum(dictionary.dataDictionary.statusDropDown,3);
        dictionary.dataDictionary.saveButton.click();
        expect(dictionary.dataDictionary.successMessage.isDisplayed());
        expect(dictionary.dataDictionary.statusDropDown.$('option:checked').getText()).toBe("Purchased with the request");
        browser.logger.info("Status successfully set to PURCHASED WITH REQUEST");

    };

    this.checkTransitionFromPurchasedWithRequest = function () {

        // browser.logger.info("All possible transitions from PURCHASED WITH REQUEST are: ");
        // dictionary.dataDictionary.getDropDownValues(dictionary.dataDictionary.statusDropDown, 'option').then(function(values){
        //     expect(values).toEqual(['FREE', 'AVAILABLE', 'PURCHASED_VIA_REQUEST']);
        //     browser.logger.info("All possible transitions from PURCHASED WITH REQUEST are: " + values);
        //
        // });

        var values = element(by.id('id_status')).all(by.tagName('option')).getAttribute('value').then(function (values)
        {
            expect(values).toEqual(['FREE', 'AVAILABLE', 'PURCHASED_VIA_REQUEST']);
            browser.logger.info("All possible transitions from PURCHASED WITH REQUEST are: " + values);
        });

    };





}


module.exports = new contentDetail();
