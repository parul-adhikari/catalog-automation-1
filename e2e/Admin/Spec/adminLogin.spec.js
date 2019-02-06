let adminLoginPage = require('../PageObject/adminLogin-po.js');
//import * as adminLoginPage from "../PageObject/adminLogin-po.js";
let dataDictionary = require ('../../../Utils/DataFile.js');

describe('Verify Catalog Admin Login', function () {

    beforeAll(function () {
        dataDictionary.getUrl('admin');
    });

    it('Verify Admin successful login', function () {
        adminLoginPage.adminLogin();
    });

    it('Verify browser title after successful login', function () {
        expect(browser.getTitle()).toBe('Site administration | Django site admin');
        browser.logger.info("Admin is on home page!")
    });
});
