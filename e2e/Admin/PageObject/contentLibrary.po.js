let dataDictionary = require ('../../../Utils/DataFile.js');

function contentLibrary() {


    this.brandOnFrontEnd = function() {
        browser.waitForAngular();
        dataDictionary.brandDropDownOnFrontEnd.getText().then(function (text) {
            expect(text).toEqual(dataDictionary.existingBrand);
            browser.logger.info("Selected brand on front end is: " + text);
        });
    };

    this.hoverState = function () {

        browser.waitForAngular();
        //browser.actions().mouseMove($('ngx-masonry > ngxmasonryitem:nth-child(1) > div')).perform();
        browser.actions().mouseMove(dataDictionary.contentCategory).perform();
        expect((dataDictionary.contentId).isDisplayed()).toBeTruthy();
    };


}


module.exports = new contentLibrary();
