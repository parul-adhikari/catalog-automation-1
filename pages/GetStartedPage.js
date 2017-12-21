var getStarted = {

        PageElements: {

            btn_GetStarted: element(by.xpath('//a[@class="btn def-button inlineBlock"]')),
            pageTitle: 'Influencer Advertising Simplified',
            urlToBeChanged: 'https://staging.unityinfluence.com/auth/sign-up'

        },


        pageTitle: function pageTitle() {

            browser.logger.info('Page Title Verified as:' + this.PageElements.pageTitle)
            expect(browser.wait(browser.getTitle())).toEqual(this.PageElements.pageTitle)


        },


        clickGetStartedBtn: function clickGetStartedBtn() {

            expect(this.PageElements.btn_GetStarted.isEnabled).toBe(this.PageElements.btn_GetStarted.isEnabled)
            this.PageElements.btn_GetStarted.click().then(function () {

                    browser.logger.info("Clicked Get Started Button");


                }, function (err) {

                    browser.logger.error(" not able to find element" + err)

                }
            );
        },


    }
;
module.exports = getStarted