let userDetailsPasswordPo = require('../../../e2e/FrontEndApp/PageObject/UserDetailsPassword.po')
let fakeData = require('../../../Utils/FakeData.js');
let commonActions = require('../../../Common/CommonActions');

let userDetailsPagePo = require('../../../e2e/FrontEndApp/PageObject/UserDetails.po')


describe('Verify User Details Page', function () {

    beforeAll(function (done) {
        expect(userDetailsPagePo.lbl_OfUserDetailPage().isDisplayed()).toBeTruthy();
        done();
    });
    it('Verify without filling any value in any field next button should be disabled', () => {
        expect(userDetailsPagePo.btn_NextPassowrd().isDisabled).toBe(userDetailsPagePo.btn_NextPassowrd().isDisabled);
    })

    it('Verify without filling first name', () => {

        console.log("data = "+fakeData.randomFirstName, fakeData.randomLastName, fakeData.randomPhoneNumber )

        userDetailsPagePo.FillUserDetail("",fakeData.randomLastName,"9898562596")
        expect(userDetailsPagePo.btn_NextPassowrd().isDisabled).toBe(userDetailsPagePo.btn_NextPassowrd().isDisabled);
    })

    it('Verify with providing all required details', () => {
       userDetailsPagePo.FillUserDetail(fakeData.randomFirstName, fakeData.randomLastName, "7572011110")
        commonActions.waitElementToBeVisible(userDetailsPasswordPo.lbl_OfUserDetailPasswordPage())
        expect(userDetailsPasswordPo.lbl_OfUserDetailPasswordPage().isDisplayed()).toBeTruthy();

    })

})