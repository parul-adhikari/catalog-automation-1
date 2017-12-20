var common = require('../../Common/CommonActions')

var gmail = {

        gmailSignIn: function gmailSignIn(usrEmail, usrPswd) {
            browser.get('https://accounts.google.com')
            browser.driver.manage().window().maximize()
            browser.sleep(6000)
            common.waitForElement(element(by.xpath('//*[@type="email"]')))
            element(by.xpath('//*[@type="email"]')).sendKeys(usrEmail)
            element(by.id('identifierNext')).click()
            browser.sleep(6000)
            common.waitForElement(element(by.xpath('//*[@type="password"]')))
            element(by.xpath('//*[@type="password"]')).sendKeys(usrPswd)
            element(by.id('passwordNext')).click()
            common.waitForUrlToChange('https://myaccount.google.com')
            element(by.xpath('//*[@href="https://mail.google.com"]')).click()
            common.waitForUrlToChange('https://mail.google.com/mail')
        },


        verifyReceivedEmail: function verifyReceivedEmail() {

            common.waitForElement(element.all(by.xpath('//*[@name="Chloe Van Patten"]')))
            //var emailList = element.all(by.xpath('//*[@email="chloe@unityinfluence.com"]'))
            var emailList = element.all(by.xpath('//*[@name="Chloe Van Patten"]'))

            var myMailerName = "Chloe Van Patten";

            emailList.count().then(function (originalCount) {
                if (originalCount >= 0) {
                    startCount = originalCount;
                    browser.logger.info('No.of Emails:' + startCount)

                }
                else {
                    browser.logger.info('Error in fetching email count' + startCount)
                }


                var first = emailList.get(1)
                first.getText().then(function (value) {
                    browser.logger.info('First Email selected from:' + value)
                    //    console.log(typeof firstBrand)
                    first.click()

                })


            })
        },

        verifyButtonInEmail: function verifyButtonInEmail() {

            var interestButton = element(by.xpath('//*[contains(text(),"m interested")]'))

            interestButton.getText().then(function (value) {
                browser.logger.info("Interested button found with text as:" + value)

            }), function (err) {

                browser.logger.error('No Interested button found in received Email' + err)

            };

            browser.sleep(2000)
            interestButton.click()
            browser.logger.info('Landing on Collaboration accepting page...')
            common.waitForUrlToChange('https://staging.unityinfluence.com/influencer/collaborate')

        }


    }


module.exports = gmail