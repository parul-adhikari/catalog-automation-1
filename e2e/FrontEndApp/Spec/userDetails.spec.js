let userDetailsPasswordPo = require('../PageObject/userDetailsPassword.po')
let fakeData = require('../../../Utils/FakeData.js');
let commonActions = require('../../../Common/CommonActions');

let userDetailsPagePo = require('../PageObject/userDetails.po')


describe('Verify User Details Page', function () {

    beforeAll(function (done) {
        expect(userDetailsPagePo.getUserDetailPageLabel().isDisplayed()).toBeTruthy();
        done();
    });
    it('Verify without filling any value in any field next button should be disabled', () => {
        expect(userDetailsPagePo.getNextPasswordButton().isDisabled).toBe(userDetailsPagePo.getNextPasswordButton().isDisabled);
    })

    it('Verify without filling first name', () => {

        console.log("data = "+fakeData.randomFirstName, fakeData.randomLastName, fakeData.randomPhoneNumber)

        userDetailsPagePo.fillUserDetail("",fakeData.randomLastName,"9898562596")
        expect(userDetailsPagePo.getNextPasswordButton().isDisabled).toBe(userDetailsPagePo.getNextPasswordButton().isDisabled);
    })

    it('Verify with providing all required details', () => {
       userDetailsPagePo.fillUserDetail(fakeData.randomFirstName, fakeData.randomLastName, "7572011110")
        commonActions.waitElementToBeVisible(userDetailsPasswordPo.getUserDetailPasswordPageLabel())
        expect(userDetailsPasswordPo.getUserDetailPasswordPageLabel().isDisplayed()).toBeTruthy();

    })

})