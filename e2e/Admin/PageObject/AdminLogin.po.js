function adminLoginPage() {
    let emailTextBox= element(by.id('id_username'))
    let passwordTextBox= element(by.id('id_password'))
    let loginButton= element(by.xpath('.//*[@type=\'submit\']'))

    let urlToBeChanged= 'https://api-staging.unityinfluence.com/admin/'

    this.doAdminLogin = function () {
        emailTextBox.sendKeys(browser.params.AdminEmail)
        passwordTextBox.sendKeys(browser.params.AdminPassword)
        loginButton.click()
        browser.logger.info('Admin is going to login with credentials as:' +browser.params.AdminEmail +'"\n"' +browser.params.AdminPassword)
    }
    this.getEmailTextBox=function () {

        return emailTextBox;

    }

}










module.exports = new adminLoginPage();
