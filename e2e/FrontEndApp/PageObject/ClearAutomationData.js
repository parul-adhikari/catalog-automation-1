let adminLogin = require('../../Admin/PageObject/AdminLogin.po')
let commonActions = require('../../../Common/CommonActions');


function ClearData() {

    var fld_Search = $("#searchbar")
    var btn_Search = $("input[type=\"submit\"]:nth-child(3)")
    var chk_Action = $("#action-toggle")
    var drp_Action = $("select[name*='action']")
    var drp_ActionElement = $("option:nth-child(2)")
    var btn_GoAction = $("button[title*=\"Run the selected action\"]")


    this.ClearCurrentSessionData = function () {
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
        browser.sleep(5000)
        browser.refresh();
    }

    this.DeleteUser = function (User) {
        this.AdminUrl("/user/user/")

        browser.isElementPresent(adminLogin.txbx_Email()).then(function (result) {
            if (result) {
                adminLogin.doAdminLogin()
            }

        })
        this.DeleteData(User);
    }

    this.DeleteBrand=function (Brand) {
        this.AdminUrl("/brand/brand")
        browser.isElementPresent(adminLogin.txbx_Email()).then(function (result) {
            if (result) {
                adminLogin.doAdminLogin()
            }
        })
        this.DeleteData(Brand);
    }

    this.AdminUrl = function (RequiredPage) {
        browser.navigate().to("https://api-staging.unityinfluence.com/admin" + RequiredPage)

    }

    this.DeleteData=function (DatatobeDeleted) {
        commonActions.waitElementToBeVisible(fld_Search)
        expect(fld_Search.isDisplayed()).toBeTruthy();
        fld_Search.sendKeys(DatatobeDeleted)
        commonActions.waitElementToBeVisible(btn_Search)
        expect(btn_Search.isDisplayed()).toBeTruthy();
        btn_Search.click();
        commonActions.waitElementToBeVisible(chk_Action)
        expect(chk_Action.isDisplayed()).toBeTruthy();
        chk_Action.click();
        commonActions.waitElementToBeVisible(drp_Action)
        expect(drp_Action.isDisplayed()).toBeTruthy();
        drp_Action.click();
        commonActions.waitElementToBeVisible(drp_ActionElement)
        expect(drp_ActionElement.isDisplayed()).toBeTruthy();
        drp_ActionElement.click();
        commonActions.waitElementToBeVisible(btn_GoAction)
        expect(btn_GoAction.isDisplayed()).toBeTruthy();
        btn_GoAction.click();

    }
}

module.exports = new ClearData();