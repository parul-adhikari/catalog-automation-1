function AdminloginPage() {
    var txbx_Email= element(by.id('id_username'))
    var txbx_Pswd= element(by.id('id_password'))
    var btn_Login= element(by.xpath('.//*[@type=\'submit\']'))
    // urlToBeChanged: 'http://localhost:8000/admin/'
    var urlToBeChanged= 'https://api-staging.unityinfluence.com/admin/'

    this.doAdminLogin = function () {
        txbx_Email.sendKeys(browser.params.AdminEmail)
        txbx_Pswd.sendKeys(browser.params.AdminPassword)
        btn_Login.click()
        browser.logger.info('Admin is going to login with credentials as:' +browser.params.AdminEmail +'"\n"' +browser.params.AdminPassword)
    }
    this.txbx_Email=function () {

        return txbx_Email;

    }

}










module.exports = new AdminloginPage();
