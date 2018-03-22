
function BrandListingPage() {
    this.box_AddNewBarnd = $('.new-item-box > div')
    this.box_ExistingBrand =function (TextValue){
      return element(by.cssContainingText('.image-text.semi-bold', TextValue)
      )}
}

module.exports=new BrandListingPage();