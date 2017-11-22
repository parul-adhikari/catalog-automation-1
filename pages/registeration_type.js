require('jasmine2-custom-message');

var RegTypeForm = {

    PageElements: {
        btnAcadRegType: element(by.id('academicsBtn')),
        btnCounsRegType: element(by.id('counsellingBtn'))
    },


    chooseAcadBtn: function chooseAcadBtn() {

        since('Academics Type button not available').expect(this.PageElements.btnAcadRegType.getAttribute('value')).toEqual('Academics');
        this.PageElements.btnAcadRegType.click()


    },

    chooseCounsBtn: function chooseCounsBtn() {
    this.PageElements.btnCounsRegType.click()
}

}

module.exports = RegTypeForm;