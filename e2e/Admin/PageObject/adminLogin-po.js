let dataDictionary = require ('../../../Utils/DataFile.js');
let EC = protractor.ExpectedConditions;

let adminLoginPage = {

    adminLogin : function () {
        dataDictionary.waitForElement(dataDictionary.emailTextBox);
        dataDictionary.emailTextBox.sendKeys(dataDictionary.adminEmail);
        dataDictionary.passwordTextBox.sendKeys(dataDictionary.adminPassword);
        dataDictionary.loginButton.click();
        // expect(this.getContentOnAdminHome().isPresent()).toBe(true);
        browser.logger.info('Admin is successfully logged in through ' + dataDictionary.adminEmail + '| ' + dataDictionary.adminPassword);
    }
};

module.exports = adminLoginPage;
