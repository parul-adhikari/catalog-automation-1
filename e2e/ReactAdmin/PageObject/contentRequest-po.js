let common = require ('../../../Utils/common.js');
let data = require ('../../../Utils/dataFile_React.js');
let dJangoAdminLogin = require('../../Admin/PageObject/adminLogin_po.js');
let queries = require('../../../Utils/queriesToRun');
let pg = require('../../../Utils/postgresDB.js');
var idArray = [];
var isDescending = true;
var isAscending = true;


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

    };


    this.arrayOfIds =  function () {

        var promise = new Promise(function(resolve, reject) {
            idArray = [];
            for (i=1; ; i++) {
                if (i > 4) break;
                $('div:nth-child(' + i + ') > div:nth-child(1) > div > span').getText().then(function (id) {
                    browser.logger.info("id is: " + id);
                    idArray.push(id);
                    browser.logger.info('Element pushed into ids is: ' + idArray);
                })
            };
            resolve();
            return idArray;
        });
    };

    function verifySortingOrder (response) {
        browser.logger.info("Inside 2nd loop, value of ids is: " + response)

        for (let j=0, l=response.length-1; j<=l; j++)
        {
            browser.logger.info("inside 2nd for loop!!");
            browser.logger.info("Inside 2nd loop, value of ids is: " + response)
            // true if this is greater than the next and all other so far have been true
            isDescending = isDescending && (response[j] > response[j+1]);
            browser.logger.info("Isdescending is??: " + isDescending);

            // true if this is less than the next and all others so far have been true
            isAscending = isAscending && (response[j] < response[j+1]);
            browser.logger.info("isAscending is??: " + isAscending);

        }

        if (isAscending)
        {
            browser.logger.info('CRs are in ascending order');
        }
        else if (isDescending)
        {
            browser.logger.info('CRs are in descending order');
        }
        else
        {
            browser.logger.info('CRs are not sorted');
        }
    };


    this.updateDataFromDrawer =  function () {

        data.reactContentRequest.crossIconSingle.click();
        data.reactContentRequest.addBrand.sendKeys(data.reactGlobal.fakeData);
        data.reactContentRequest.selectFirstBrand.click();
        for(k=1; k<3; k++){
            $('div:nth-child(3) > div > div.dropdown-display > div:nth-child(' + k + ') > i').click();
        }
        data.reactContentRequest.addChannels.sendKeys(data.reactContentRequest.channel);
        data.reactContentRequest.selectFirstChannel.click();
        let today = common.commonFunctions.returnCurrentDate();
        data.reactGlobal.datePicker.sendKeys(today);
        data.reactGlobal.datePickerCross.click();
        data.reactGlobal.datePicker.sendKeys(today);

    }

};

module.exports = new contentRequestPage();
