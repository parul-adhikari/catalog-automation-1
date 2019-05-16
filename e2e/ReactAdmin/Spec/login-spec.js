let loginPage = require('../PageObject/login-po.js');
let fakeData = require('../../../Utils/FakeData.js');
let common = require ('../../../Utils/common.js');
let data = require ('../../../Utils/dataFile_React.js');
let pg = require('../../../Utils/postgresDB.js');
let queries = require('../../../Utils/queriesToRun');

const password = data.reactLogin.validPassword;

describe('Verify Login functionality', function () {

    beforeAll(function () {
        browser.get(common.commonFunctions.getAdminUrl('admin-home'));
        common.commonFunctions.waitForElement(data.reactLogin.logInButton);
        browser.logger.info('Login Page successfully loaded!');
    });

    // beforeEach(function () {
    //     browser.refresh();
    // });

    // it('Login button should be initially disabled!', function () {
    //     common.commonFunctions.waitForElement(data.reactLogin.logInButton);
    //     if(expect(data.reactLogin.logInButton).toBe(data.reactLogin.logInButton.isDisabled)){
    //         browser.logger.info("Login button is disabled");
    //     }else{
    //         browser.logger.info("Login button is enabled!")
    //     }
    // });
    //
    // it('Wrong credentials check', function () {
    //     loginPage.loginAdmin(fakeData.randomFirstName + "@mailinator.com", password);
    //     common.commonFunctions.waitForElement(data.reactLogin.errorOnLogin);
    //     if(expect(data.reactLogin.errorOnLogin.isDisplayed()).toBeTruthy()){
    //         browser.logger.info('User entered wrong login credentials!');
    //     }
    // });

    it('Verify successful login', function () {
        function  hello (response) {
            browser.logger.info("Result of query 1 is:" + response['username']);
            loginPage.loginAdmin(response['username'], password);
            browser.sleep(5000);
            // loginPage.loginAdmin(data.reactLogin.validUser, data.reactLogin.validPassword);
            common.commonFunctions.waitForElement(data.reactLogin.loggedUser);
            if(expect(data.reactLogin.loggedUser.isDisplayed()).toBeTruthy()){
                browser.logger.info('User was successfully logged in!');
                // loginPage.verifyLoggedUser();
            }
        };

        pg.pgAdmin.ExecuteQuery(queries.queries.SELECT_USER_QUERY, hello);
    });

    // it('Verify Django login and its impact on React logged in user', function () {
    //
    //     loginPage.dJangoLogin(data.reactLogin.validUser, password);
    //     browser.logger.info('User is still logged in on React!');
    // });


});
