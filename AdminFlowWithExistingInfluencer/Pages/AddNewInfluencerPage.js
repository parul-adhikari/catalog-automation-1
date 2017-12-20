var addNewInfluencerDetails = {

    PageElements: {

        txbx_FrstName: element(by.id('id_first_name')),
        txbx_LstName: element(by.id('id_last_name')),
        btn_Browse : elemn(by.id('id_profile_picture')),
        txbx_Email: element(by.id('id_email')),
        txbx_Phone: element(by.id('id_phone_number')),
        btn_Save:element(by.xpath('//*[@name="_save"]'))


    },

    AddDetails: function AddDetails() {

        this.PageElements.txbx_FrstName.sendKeys(browser.params.NewInfluencerFirstName)
        this.PageElements.txbx_LstName.sendKeys(browser.params.NewInfluencerSecondName)
        this.PageElements.txbx_Email.sendKeys(browser.params.NewInfluencerEmail)
        var imagePath = 'http://placehold.it/120x120&text=image1';
        element(by.id('fileUpload')).sendKeys(imagePath);


    }

}


module.exports = addNewInfluencerDetails