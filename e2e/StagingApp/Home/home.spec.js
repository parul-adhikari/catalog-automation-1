var HomePage = require('./home.po');

describe('Verify the Unity home page', function () {

    beforeAll(function (done) {

        //Url to load
        browser.get(browser.params.Url)
        done();
    });

    //Positive flow
    it('Verify the successful launching of application', function () {

        expect(browser.getCurrentUrl()).toBe('https://staging.unityinfluence.com/home')

    });

        it('Verify the page title', function () {
            expect(browser.getTitle()).toEqual(HomePage.PageElements.pageTitle)
        }),

            it('Verify login button',function () {
                HomePage.PageElements.btn_Login.click().then(function () {
                    browser.logger.info('Login button clicked')
                })
            })

});