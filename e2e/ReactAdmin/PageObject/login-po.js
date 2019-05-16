let common = require ('../../../Utils/common.js');
let data = require ('../../../Utils/dataFile_React.js');
let dJangoAdminLogin = require('../../Admin/PageObject/adminLogin_po.js');
let queries = require('../../../Utils/queriesToRun');
let pg = require('../../../Utils/postgresDB.js');


function loginPage() {


    this.loginAdmin =  function (email, password) {
        data.reactLogin.userName.sendKeys(email);
        data.reactLogin.password.sendKeys(password);
        data.reactLogin.logInButton.click().click();
    };

    this.verifyLoggedUser = function() {

       let successCallback2 =  response => {
            browser.logger.info("Result of query 2 is:" + response['fullname']);
            if(expect(data.reactLogin.loggedUser.isDisplayed()).toBeTruthy()) {
                data.reactLogin.loggedUser.getText().then(function (value) {
                    if (value === response['fullname']) {
                        browser.logger.info('Correct user has logged into the platform!');
                        browser.logger.info("Logged in user is: " + value);
                    }
                    else{
                        browser.logger.info('Something went wrong with the login!');
                        browser.logger.info("Logged in user is: " + value);
                    }
                })
            }
        }
          pg.pgAdmin.ExecuteQuery(queries.queries.GET_USER_NAME,  successCallback2);
    }

    this.dJangoLogin = function (email, password) {
        common.commonFunctions.waitForElement((data.reactLogin.analyticsNavigation));
        data.reactLogin.analyticsNavigation.click();
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]);
            dJangoAdminLogin.adminLogin(email, password);
            browser.driver.close();
            browser.switchTo().window(handles[0]);
        });
    };

};

module.exports = new loginPage();
