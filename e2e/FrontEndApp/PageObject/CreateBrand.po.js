let commonActions = require('../../../Common/CommonActions');
let brandListingPagePo = require('../../../e2e/FrontEndApp/PageObject/BrandListing.po');

function CreateBrandPage() {

    var txt_BrandName = $("input[formcontrolname*='name']")
    var txt_WebsiteUrl = $("input[formcontrolname*='website']")
    var txt_BranDescription = $("textarea[formcontrolname*='description']")
    var lnk_UploadBrandPhoto = element(by.cssContainingText('.link-text', 'Upload logo'))
    var btn_NextCategories = $('.custom-submit.next-button')
    var lbl_BrandPageText = $('h2 > strong')
    var err_Dailog = $("div[class*='error-dialog']")

    this.BrandSetup = function (BrandName, URL, BrandDescription) {
        browser.sleep(5000)

        browser.isElementPresent(brandListingPagePo.box_AddNewBarnd).then(function (result) {
            if (result) {
                commonActions.waitElementToBeVisible(brandListingPagePo.box_AddNewBarnd)
                brandListingPagePo.box_AddNewBarnd.click();
            }

            commonActions.waitElementToBeVisible(txt_BrandName)
            txt_BrandName.clear()
            txt_BrandName.sendKeys(BrandName)
            commonActions.waitElementToBeVisible(txt_WebsiteUrl)
            txt_WebsiteUrl.clear()
            txt_WebsiteUrl.sendKeys(URL)
            commonActions.waitElementToBeVisible(txt_BranDescription)
            txt_BranDescription.clear()
            txt_BranDescription.sendKeys(BrandDescription)
            commonActions.waitElementToBeClickable(btn_NextCategories)
            btn_NextCategories.click()
        })
    }

    this.err_Dailog = function () {
        commonActions.waitElementToBeVisible(err_Dailog)
        return err_Dailog;

    }
    this.lbl_BrandPageText = function () {
        commonActions.waitElementToBeVisible(lbl_BrandPageText)
        return lbl_BrandPageText;

    }
}

module.exports = new CreateBrandPage();