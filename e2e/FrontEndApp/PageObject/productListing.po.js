let commonActions = require('../../../Common/CommonActions');



function productListingPage() {

    var addNewProductButton = $('div.col-lg-3.col-sm-4.col-6.new-item-box > div > div > img');


    this.getAddNewProductButton = function () {
       // commonActions.waitForElement(addNewProductButton);
        return addNewProductButton;

    };

};

module.exports = new productListingPage();