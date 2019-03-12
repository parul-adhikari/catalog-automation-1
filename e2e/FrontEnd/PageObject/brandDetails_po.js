let dictionary = require ('../../../Utils/DataFile.js');


function brandDetailsPage() {

    this.fillBrandDetails = function (brandName, brandWebsite, brandInstagramHandle) {

        dictionary.signUpPage.nameTextBox.clear();
        dictionary.signUpPage.nameTextBox.sendKeys(brandName);
        dictionary.brandDetails.websiteName.clear();
        dictionary.brandDetails.websiteName.sendKeys(brandWebsite);
        dictionary.brandDetails.brandInstagramHandle.clear();
        dictionary.brandDetails.brandInstagramHandle.sendKeys(brandInstagramHandle);
        dictionary.brandDetails.brandCategory.click();
        dictionary.brandDetails.continueButton.click();
    };


};


module.exports = new brandDetailsPage();
