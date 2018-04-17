let commonActions = require('../../../Common/CommonActions');
let brandListingPagePo = require('./brandListing.po');

function createBrandPage() {

    var brandNameTextBox = $("input[formcontrolname*='name']")
    var websiteUrlTextBox = $("input[formcontrolname*='website']")
    var branDescriptionTextBox = $("textarea[formcontrolname*='description']")
    var uploadBrandPhotoLink = element(by.cssContainingText('.link-text', 'Upload logo'))
    var nextCategoriesButton = $('.custom-submit.next-button')
    var brandPageLabelText = $('h2 > strong')
    var errorDialog = $("div[class*='error-dialog']")

    this.brandSetup = function (BrandName, URL, BrandDescription) {
       // browser.sleep(5000)

        browser.isElementPresent(brandListingPagePo.getAddNewBarndBox).then(function (result) {
            if (result) {
                commonActions.waitElementToBeVisible(brandListingPagePo.getAddNewBarndBox)
                brandListingPagePo.getAddNewBarndBox.click();
            }
        })
        commonActions.waitElementToBeVisible(brandNameTextBox)
        brandNameTextBox.clear()
        brandNameTextBox.sendKeys(BrandName)
        commonActions.waitElementToBeVisible(websiteUrlTextBox)
        websiteUrlTextBox.clear()
        websiteUrlTextBox.sendKeys(URL)
        commonActions.waitElementToBeVisible(branDescriptionTextBox)
        branDescriptionTextBox.clear()
        branDescriptionTextBox.sendKeys(BrandDescription)
        commonActions.waitElementToBeClickable(nextCategoriesButton)
        nextCategoriesButton.click()
    }

    this.getErrorDialog = function () {
        commonActions.waitElementToBeVisible(errorDialog)
        return errorDialog;

    }
    this.getBrandPageLabelText = function () {
        commonActions.waitElementToBeVisible(brandPageLabelText)
        return brandPageLabelText;

    }
}

module.exports = new createBrandPage();