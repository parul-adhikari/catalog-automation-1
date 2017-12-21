var common = require('../Common/CommonActions')

var gmail = {

    gmailSignIn: function gmailSignIn(usrEmail, usrPswd) {

        browser.get('https://accounts.google.com')
        browser.driver.manage().window().maximize();
        browser.sleep(2000)

        element(by.xpath('//*[@href="https://mail.google.com"]')).click().then(function () {
            browser.logger.info('https://mail.google.com/mail')

        })
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


            var first = emailList.get(0)
            first.getText().then(function (value) {
                browser.logger.info('First Email selected from:' + value)
                //    console.log(typeof firstBrand)
                common.waitForElement(first)
                first.click()


            })


        })
    },

    verifyButtonInEmail: function verifyButtonInEmail() {
        browser.sleep(6000)

       // var interestButton = element(by.xpath('//*[contains(text(),"m interested")]'))
        var interestButton = element(by.xpath('//*[contains(text(),"'+'m interested")]'))

       // I'm interested

        interestButton.getText().then(function (value) {
            browser.logger.info("Interested button found with text as:" + value)

        })


        interestButton.click().then(function () {
            browser.logger.info('Landing on Collaboration accepting page...')

        })

        var winHandles = browser.getAllWindowHandles();
        winHandles.then(function (handles) {
            var parentWindow = handles[0];
            var  popUpWindow = handles[1];
            browser.switchTo().window(popUpWindow)
            expect(browser.getCurrentUrl()).toContain('https://staging.unityinfluence.com/influencer/collaborate')
            browser.sleep(2000)
        })
    }


}


module.exports = gmail