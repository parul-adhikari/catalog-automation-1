let dictionary = require ('../../../Utils/DataFile.js');
let fakeData = require('../../../Utils/FakeData.js');


function contentLibrary() {


    this.brandOnFrontEnd = function() {
        browser.waitForAngular();
        dictionary.dataDictionary.brandDropDownOnFrontEnd.getText().then(function (text) {
            expect(text).toEqual(fakeData.randomFirstName);
            browser.logger.info("Selected brand on front end is: " + text);
        });
    };

    this.hoverState = function () {

        browser.waitForAngular();
        //browser.actions().mouseMove($('ngx-masonry > ngxmasonryitem:nth-child(1) > div')).perform();
        browser.actions().mouseMove(dictionary.dataDictionary.contentCategory).perform();
        expect((dictionary.dataDictionary.contentId).isDisplayed()).toBeTruthy();
    };


}


module.exports = new contentLibrary();
