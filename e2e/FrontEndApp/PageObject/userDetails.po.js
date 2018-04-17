let userDetailsPasswordPo = require('./userDetailsPassword.po')
let commonActions = require('../../../Common/CommonActions');
let userDetailsPagePo = require('../../../e2e/FrontEndApp/PageObject/userDetails.po')


function userDetailsPage() {


    var btn_NextPassowrd = $('button[type*="submit"]')
    var txt_Firstname = $('#first_name')
    var txt_Lastname = $('#last_name')
    var txt_PhoneNumber = $('#phone_number')
    var lnk_ToUploadPic = element(by.cssContainingText('.link-button', 'Upload a profile picture'))
    var lbl_OfUserDetailPage = element(by.cssContainingText('.sub-info-text', 'Thank you for confirming your account with Unity. Just a few details and you’re ready to go.'))
    var txt_Email = $("#email")

    this.FillUserDetail = function (FirstName, LastName, PhoneNumber) {
        commonActions.waitElementToBeVisible(txt_Firstname)
        txt_Firstname.clear()
        txt_Firstname.sendKeys(FirstName)
        commonActions.waitElementToBeVisible(txt_Lastname)
        txt_Lastname.clear()
        txt_Lastname.sendKeys(LastName)
        commonActions.waitElementToBeVisible(txt_PhoneNumber)
        txt_PhoneNumber.clear()
        txt_PhoneNumber.sendKeys(PhoneNumber)//todo(to genrate number between 0 to 9 by using faker)
        btn_NextPassowrd.click();
    }

    this.lbl_OfUserDetailPage = function () {
        commonActions.waitElementToBeVisible(lbl_OfUserDetailPage)
        return lbl_OfUserDetailPage;

    }
    this.btn_NextPassowrd = function () {
        commonActions.waitElementToBeVisible(btn_NextPassowrd)
        return btn_NextPassowrd;
    }
    this.txt_PhoneNumber = function () {
        commonActions.waitElementToBeVisible(txt_PhoneNumber)
        return txt_PhoneNumber;
    }
    this.lnk_ToUploadPic = function () {
        commonActions.waitElementToBeVisible(lnk_ToUploadPic)
        return lnk_ToUploadPic;
    }

    this.txt_Email= function () {
        commonActions.waitElementToBeVisible(txt_Email)
        return txt_Email;

    }


}

module.exports = new userDetailsPage();