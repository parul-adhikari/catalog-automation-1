var AdminLoginPage = require('./Login.po');

describe('Verify Unity Admin Login', function () {

    beforeAll(function (done) {

        //Admin Url to load
        browser.get(browser.params.adminUrl).then(function () {
            browser.logger.info('Launching Unity Admin Page...')

        });
        done();
    });

    it('Verify Admin successful login', function () {

        AdminLoginPage.doAdminLogin();
        expect(browser.getTitle()).toBe('Site administration | Django site admin')

    });


});
