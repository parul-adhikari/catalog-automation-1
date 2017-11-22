var loginForm = {

    PageElements: {
        txtbtn_userID: element(by.id('loginEmail')),
        txtbtn_userpswd: element(by.id('loginPassword')),
        btn_Login: element(by.xpath('.//input[@value="Login"]')),
        lnk_reg: element(by.xpath('//a[text()="Register1"]'))
    },


    clickLoginbtn: function clickLoginbtn(userid, userpswd) {

       this.PageElements.txtbtn_userID.sendKeys(userid);
        this.PageElements.txtbtn_userpswd.sendKeys(userpswd);
        this.PageElements.btn_Login.click();
    },

    clickReglink: function clickReglink() {
        this.PageElements.lnk_reg.click().then(function() {

            browser.logger.info("Clicked Register Link" );



        },function (err) {

            browser.logger.error(" not able to find element" +err)

            }
        );


}

};
module.exports = loginForm