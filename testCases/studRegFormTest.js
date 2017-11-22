var studForm = require('../pages/studentRegForm.js');
var loginPage = require('../testCases/roleSelectionTest.js');


describe('Test Student Registration Form', function () {

    //Test1
    it('Verify Form Title', function () {

        studForm.formTitle()

    })

    //Test2
    it('Verify successful Student Registration', function () {
        studForm.submitStudInfoForm1()
        studForm.submitStudInfoForm2()
     browser.sleep(7000)
    })

    //Test3
    it('Verify Successful Registration Message',function () {

        studForm.successfulMessage()
    })

})