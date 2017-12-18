var gmail = require('../../AdminFlowWithExistingInfluencer/Test/GmailTest')

describe('Verify Gmail Login',function () {

it('Gmail',function () {
    gmail.gmailSignIn(browser.params.GmailAddress,browser.params.GmailPswd)
    gmail.verifyReceivedEmail()
    gmail.verifyButtonInEmail()


})

})