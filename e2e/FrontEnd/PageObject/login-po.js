let dataDictionary = require ('../../../Utils/DataFile.js');
let EC = protractor.ExpectedConditions;

let loginPage = {
    doLogin : function () {
        dataDictionary.emailTextField.sendKeys(dataDictionary.emailFE);
        dataDictionary.passwordField.sendKeys(dataDictionary.passwordFE);
        dataDictionary.loginAction.click();
    }
};

module.exports = loginPage;
