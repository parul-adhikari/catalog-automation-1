
var adminLoginPage = {

    PageElements: {

        getEmailTextBox: element(by.id('id_username')),
        txbx_Pswd: element(by.id('id_password')),
        btn_Login: element(by.xpath('.//*[@type=\'submit\']')),
        // urlToBeChanged: 'http://localhost:8000/admin/'
       // urlToBeChanged: 'https://api-staging.unityinfluence.com/admin/'


    },

    doAdminLogin: function doAdminLogin() {
        this.PageElements.getEmailTextBox.sendKeys(browser.params.AdminEmail);
        this.PageElements.txbx_Pswd.sendKeys(browser.params.AdminPassword);
        this.PageElements.btn_Login.click().then(function () {
            browser.logger.info('Admin logged in with credentials as:' +browser.params.AdminEmail +'"\n"' +browser.params.AdminPassword)
        })


    }
};

module.exports = adminLoginPage;
