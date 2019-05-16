let common = require ('../../../Utils/common.js');
let data = require ('../../../Utils/dataFile_React.js');
let dJangoAdminLogin = require('../../Admin/PageObject/adminLogin_po.js');
let queries = require('../../../Utils/queriesToRun');
let pg = require('../../../Utils/postgresDB.js');
// var isDescending = true;
// var isAscending = true;


function contentRequestPage() {

    this.verifyDataOnListing =  function (elem, expectedValue, field) {
        elem.getText().then(function (value) {
            if (value === expectedValue) {
                browser.logger.info("Actual value of " + field + " i.e. " + value + " same as expected! i.e. " + expectedValue);
            }
            else{
                browser.logger.info(field + " differs from expected i.e. " + expectedValue);
            }
        })

    }

    this.arrayOfIds =  function (successCallBack) {
        var idArray = [];
        for (i=1; ; i++) {
            if (i > 4) break;
            $('div:nth-child(' + i + ') > div:nth-child(1) > div > span').getText().then(function (id) {
                browser.logger.info("id is: " + id);
                idArray.push(id);
                browser.logger.info('Element pushed into ids is: ' + idArray);

            })
        };
        successCallBack(idArray);

    }

};

module.exports = new contentRequestPage();
