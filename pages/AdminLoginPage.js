require('../testCases/AllCampaignPageTest')

var adminLoginPage = {

    PageElements: {

        txbx_Email: element(by.id('id_username')),
        txbx_Pswd: element(by.id('id_password')),
        btn_Login: element(by.xpath('.//*[@type=\'submit\']')),
        urlToBeChanged: 'https://api-staging.unityinfluence.com/admin'


    },

    doAdminLogin: function doAdminLogin() {
        this.PageElements.txbx_Email.sendKeys(browser.params.AdminEmail)
        this.PageElements.txbx_Pswd.sendKeys(browser.params.AdminPassword)
        this.PageElements.btn_Login.click()
        browser.logger.info('Admin is going to login with credentials as:' +browser.params.AdminEmail +'"\n"' +browser.params.AdminPassword)

    }
};

module.exports = adminLoginPage
