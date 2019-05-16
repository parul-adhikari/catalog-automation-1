let data = require('./dataFile_React.js');

exports.commonFunctions = {
    getAdminUrl: function (type) {
        switch (type) {
            case 'admin-home': return data.reactLogin.admin;
                break;

            default:  browser.logger.info("Unknown Url type");
        }

    },

    waitForElement :function (elem) {

        let EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(elem), 20000, elem+ " was not visible!");
    },

    returnCurrentDate : function () {

        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1; //January is 0!

        let yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        today = mm + '/' + dd + '/' + yyyy;
        return today;
    }

};
