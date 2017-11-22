require('jasmine2-custom-message')


var studRegForm = function () {

    var formTitle = element(by.xpath('//span[.="Register as a Student"]'))
    var txbx_firstName = element(by.xpath('.//*[@id=\'firstName\']'))
    var txbx_lastName = element(by.xpath('//input[@id="lastName"]'))
    var txbx_emailId = element(by.xpath('//input[@id="email"]'))
    var txbx_userId = element(by.xpath('//input[@id="userName"]'))
    var txbx_pswd = element(by.xpath('//input[@id="password"]'))
    var dropdown_gradeSelection = element(by.id('gradeId'))
    var dob = element(by.xpath('//*[@id="dob"]'))
    var nextBtn = element(by.xpath('//*[@id="nextAddressInfo"]'))
    var txbx_StreetAdd = element(by.id('studentDetail.streetAddress'))
    var slct_City = element(by.xpath('//*[@data-id="city"]'))
    var txbx_City = element(by.xpath('//*[@id="addressInfo"]/div[2]/div[1]/div/div[1]/div/div/input'))
    var slct_ZipCode = element(by.xpath('.//*[@id="zip_chosen"]/a'))
    var txbx_ZipCodeValue = element(by.xpath('//*[@id=\'zip_chosen\']/div/div/input'))
    var slct_School = element(by.xpath('//*[@data-id="school"]'))
    var txbx_SchoolValue = element(by.xpath('//*[@id="schoolDiv"]/div/div[1]/div/div/input'))
    var btn_Submit = element(by.id('submitBtn'))
    var notify_msg = element(by.id('regSuccessDiv'))
    var notify2 = element(by.css('div#regSuccessDiv>span'))
    var assert = require('assert')


    this.formTitle = function () {

        var EC = protractor.ExpectedConditions;
        browser.wait(EC.presenceOf(formTitle), 80000);
        expect(formTitle.getText().then(function (value) {
            console.log(value)
        }))
    }


    this.selectGradebyNum = function (cssElement, cssValue, cssText) {
        //  var optionNum = Grade
        expect(cssElement.isElementPresent)
        //     var options = dropdown_gradeSelection.$('[value = "2"]').click()
        dropdown_gradeSelection.$('[value = "' + cssText + '"]').click()
        //element(by.cssContainingText(cssValue, cssText)).click();

    }


    this.selectDOB = function () {
        dob.sendKeys(browser.params.randomDOB)

    };

    this.submitStudInfoForm1 = function () {
        txbx_firstName.sendKeys(browser.params.randomFirstName)
       txbx_lastName.sendKeys(browser.params.randomLastName)
        txbx_emailId.sendKeys(browser.params.randomEmail)
        txbx_pswd.sendKeys(browser.params.randomPassword)
        this.selectGradebyNum(dropdown_gradeSelection, 'option', browser.params.Grade)
        this.selectDOB()
        nextBtn.click()
        this.formTitle()
    }


    this.selectDropDownWithValue = function (dropDownElement, TimeInMilliseconds, inputValueField, inputValue) {

        browser.waitForAngularEnabled(false);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(dropDownElement), TimeInMilliseconds, "City Element Not Found" + element)
        dropDownElement.click()
        if (inputValueField.isEnabled()) {
            inputValueField.click()
            inputValueField.sendKeys(inputValue)
            browser.actions().sendKeys(protractor.Key.ENTER).perform();

        }

    }


    this.submitStudInfoForm2 = function () {
        browser.driver.sleep(1000);
        txbx_StreetAdd.sendKeys(browser.params.randomStreetAddress)

        this.selectDropDownWithValue(slct_City, 1000, txbx_City, browser.params.randomCity)
        browser.driver.sleep(2000);
        this.selectDropDownWithValue(slct_ZipCode, 4000, txbx_ZipCodeValue, browser.params.randomZipCode)
        browser.driver.sleep(2000);
        this.selectDropDownWithValue(slct_School, 1000, txbx_SchoolValue, browser.params.randomSchool)
        btn_Submit.click()
    }


    this.successfulMessage = function () {
        var EC = protractor.ExpectedConditions
       // browser.wait(protractor.ExpectedConditions.visibilityOf(notify_msg), 5000); //If the error span takes time to be visible, use wait() function
      //expect(notify_msg.isDisplayed()).toBe(true); //Checks if span error is displayed

        browser.wait(EC.textToBePresentInElement((notify_msg), 'User Created Successfully. Please wait for the approval of your account. You can also contact @ +1(888) 295-3916'), 5000)
    }
}
module.exports = new studRegForm()