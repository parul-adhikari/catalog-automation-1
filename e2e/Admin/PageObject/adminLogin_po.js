let dictionary = require ('../../../Utils/DataFile.js');
let EC = protractor.ExpectedConditions;

function adminLoginPage() {

    this.adminLogin = function () {
        dictionary.dataDictionary.waitForElement(dictionary.dataDictionary.emailTextBox);
        dictionary.dataDictionary.emailTextBox.sendKeys(dictionary.dataDictionary.adminEmail);
        dictionary.dataDictionary.passwordTextBox.sendKeys(dictionary.dataDictionary.adminPassword);
        dictionary.dataDictionary.loginButton.click();
        // expect(this.getContentOnAdminHome().isPresent()).toBe(true);
        browser.logger.info('Admin is successfully logged in through ' + dictionary.dataDictionary.adminEmail + '| ' + dictionary.dataDictionary.adminPassword);
    };
}

module.exports = new adminLoginPage();
