var Common = require('../Common/CommonActions');

var Gmail = {

    gmailSignIn: function gmailSignIn(usrEmail, usrPswd) {
        browser.get('https://accounts.google.com');
        browser.driver.manage().window().setSize(420,600);
        browser.sleep(2000);
        var link_Gmail = element(by.xpath('//*[@href="https://mail.google.com"]'));

        link_Gmail.isPresent().then(function (isPresent) {
            if (isPresent) {

                Common.waitElementToBeClickable(link_Gmail);

                link_Gmail.click().then(function () {
                    browser.logger.info('Directly accessing the gmail account from cache...')

                });

            } else {
                Common.waitElementToBeClickable(element(by.xpath('//*[@type="email"]')));
                element(by.xpath('//*[@type="email"]')).sendKeys(usrEmail);
                element(by.id('identifierNext')).click().then(function () {
                    //browser.sleep(6000);
                    Common.waitElementToBeClickable(element(by.xpath('//*[@type="password"]')));
                    element(by.xpath('//*[@type="password"]')).sendKeys(usrPswd);
                    element(by.id('passwordNext')).click().then(function () {
                        Common.waitForUrlToChange('https://myaccount.google.com');
                        element(by.xpath('//*[@href="https://mail.google.com"]')).click().then(function () {
                            Common.waitForUrlToChange('https://mail.google.com/mail')
                        })
                    })
                })
            }
        });


        //browser.sleep(2000);

        // common.waitForUrlToChange('https://mail.google.com/mail')
    },


    verifyReceivedEmail: function verifyReceivedEmail() {
        // browser.sleep(2000);
        Common.waitForElement(element.all(by.xpath('//*[@name="Chloe Van Patten"]')));
        var emailList = element.all(by.xpath('//*[@name="Chloe Van Patten"]'));

        var myMailerName = "Chloe Van Patten";

        emailList.count().then(function (originalCount) {
            if (originalCount >= 0) {
                startCount = originalCount;
                browser.logger.info('No.of Emails:' + startCount)

            }
            else {
                browser.logger.info('Error in fetching email count' + startCount)
            }


            var first = emailList.get(0);
            first.getText().then(function (value) {
                browser.logger.info('First Email selected from:' + value);
                //    console.log(typeof firstBrand)
                Common.waitElementToBeClickable(first);
                first.click().then(function () {
                    browser.logger.info('Email clicked');


                })


            })


        })
    },

    verifyButtonInEmail: function verifyButtonInEmail() {
      //  browser.sleep(6000);

        // var interestButton = element(by.xpath('//*[contains(text(),"m interested")]'))
        let interestButton = element(by.xpath('//*[contains(text(),"' + 'm interested")]'));

       Common.waitForElement(interestButton);

        interestButton.getText().then(function (value) {
            browser.logger.info("Interested button found with text as:" + value)

        });

        interestButton.click().then(function () {
            browser.logger.info('Landing on Collaboration accepting page...');
            let winHandles = browser.getAllWindowHandles();
            winHandles.then(function (handles) {
                let parentWindow = handles[0];
                let popUpWindow = handles[1];
                browser.switchTo().window(popUpWindow);
                expect(browser.getCurrentUrl()).toContain('https://staging.unityinfluence.com/influencer/collaborate');
                browser.sleep(2000)
            })

        });


    }


};


module.exports = Gmail;