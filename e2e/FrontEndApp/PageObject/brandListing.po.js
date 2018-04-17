let commonActions = require('../../../Common/CommonActions');

function brandListingPage() {
    this.getAddNewBarndBox = $('.new-item-box > div');
    this.getExistingBrandBox = function (textValue) {

        var existingBrandBox = element(by.cssContainingText('[class*="category image-text"]', textValue));
        commonActions.waitForElement(existingBrandBox);
        return existingBrandBox;

    }
}

module.exports = new brandListingPage();