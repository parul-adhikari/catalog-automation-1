let adminLogin = require('../../Admin/PageObject/AdminLogin.po')
let commonActions = require('../../../Common/CommonActions');


function ClearData() {

    var searchField = $("#searchbar")
    var searchButton = $("input[type=\"submit\"]:nth-child(3)")
    var actionCheckBox = $("#action-toggle")
    var actionDropDown = $("select[name*='action']")
    var actionElementInDropDown = $("option:nth-child(2)")
    var goActionButton = $("button[title*=\"Run the selected action\"]")


    this.currentSessionDataClear = function () {
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
        browser.sleep(5000)
        browser.refresh();
    }

    this.deleteUser = function (User) {
        this.adminUrl("/user/user/")

        browser.isElementPresent(adminLogin.txbx_Email()).then(function (result) {
            if (result) {
                adminLogin.doAdminLogin()
            }

        })
        this.deleteData(User);
    }

    this.deleteBrand=function (Brand) {
        this.adminUrl("/brand/brand")
        browser.isElementPresent(adminLogin.txbx_Email()).then(function (result) {
            if (result) {
                adminLogin.doAdminLogin()
            }
        })
        this.deleteData(Brand);
    }

    this.adminUrl = function (RequiredPage) {
        browser.navigate().to("https://api-staging.unityinfluence.com/admin" + RequiredPage)

    }

    this.deleteData=function (dataToBeDeleted) {
        commonActions.waitElementToBeVisible(searchField)
        expect(searchField.isDisplayed()).toBeTruthy();
        searchField.sendKeys(dataToBeDeleted)
        commonActions.waitElementToBeVisible(searchButton)
        expect(searchButton.isDisplayed()).toBeTruthy();
        searchButton.click();
        commonActions.waitElementToBeVisible(actionCheckBox)
        expect(actionCheckBox.isDisplayed()).toBeTruthy();
        actionCheckBox.click();
        commonActions.waitElementToBeVisible(actionDropDown)
        expect(actionDropDown.isDisplayed()).toBeTruthy();
        actionDropDown.click();
        commonActions.waitElementToBeVisible(actionElementInDropDown)
        expect(actionElementInDropDown.isDisplayed()).toBeTruthy();
        actionElementInDropDown.click();
        commonActions.waitElementToBeVisible(goActionButton)
        expect(goActionButton.isDisplayed()).toBeTruthy();
        goActionButton.click();

    }
}

module.exports = new ClearData();