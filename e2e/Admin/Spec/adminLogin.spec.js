let adminLoginPage = require('../PageObject/adminLogin_po.js');
let dictionary = require ('../../../Utils/DataFile.js');

describe('Verify Catalog Admin Login', function () {

    beforeAll(function () {
        dictionary.dataDictionary.getAdminUrl('admin');
    });

    it('Verify Admin successful login', function () {
        adminLoginPage.adminLogin();
    });

    it('Verify browser title after successful login', function () {
        expect(browser.getTitle()).toBe('Site administration | Django site admin');
        browser.logger.info("Admin is on home page!")
    });
});
