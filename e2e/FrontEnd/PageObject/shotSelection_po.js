let dictionary = require ('../../../Utils/DataFile.js');
let fakeData = require('../../../Utils/FakeData.js');

function shotSelectionPage() {

    this.addProducts = function (name) {

        dictionary.shotScreen.productTextBox.sendKeys(name);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        dictionary.dataDictionary.waitForElement(dictionary.shotScreen.crossOnProductTag);
        dictionary.shotScreen.productTextBox.sendKeys(name + 'Product 2');
        browser.actions().sendKeys(protractor.Key.ENTER).perform();

    };

    this.addShots = function () {

        this.addProducts(fakeData.randomFirstName);
        for(let a = 0; a < 4; a++) {
            dictionary.shotScreen.shotPlus1.click();
        }
        dictionary.shotScreen.shotMinus.click();
        dictionary.shotScreen.shotPlus2.click();

        dictionary.shotScreen.continueOnShots.click();
        browser.sleep(4000);
    };


};


module.exports = new shotSelectionPage();
