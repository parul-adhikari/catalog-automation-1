var Login = {

    PageElements: {
        emailInput: element(by.css('#email')),
        passwordInput: element(by.css('#password')),
        loginForm: element(by.css('#form')),
    },
    goHome: function goHome() {
        browser.get('/signin');
    },
    doLogin: function doLogin() {
        this.PageElements.emailInput.sendKeys('blahblah@email.com');
        this.PageElements.passwordInput.sendKeys('blahblah');
        this.PageElements.loginForm.submit();
    },
};

module.exports = Login;