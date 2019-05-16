let contentRequestPage = require('../PageObject/contentRequest-po.js');
let fakeData = require('../../../Utils/FakeData.js');
let common = require ('../../../Utils/common.js');
let data = require ('../../../Utils/dataFile_React.js');
let pg = require('../../../Utils/postgresDB.js');
let queries = require('../../../Utils/queriesToRun');
var response = [];
var isDescending = true;
var isAscending = true;

describe('Verify Content request page on React admin', function () {

    beforeAll(function () {
        common.commonFunctions.waitForElement(data.reactContentRequest.crNavigation);
        data.reactContentRequest.crNavigation.click();
        common.commonFunctions.waitForElement(data.reactContentRequest.viewShotList);
        if(data.reactContentRequest.viewShotList){
            browser.logger.info('Admin is on content request listing page');
        }else{
            browser.logger.info("Admin couldn't reach the CR listing page");
        }
    });

    it('Verify the page title', function () {
        contentRequestPage.verifyDataOnListing(data.reactGlobal.titleLeft, data.reactContentRequest.crTitle, 'Title');

    });

    it('Verify orders of CRs in the listing', function () {
        contentRequestPage.arrayOfIds(verifySortingOrder);

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


    });

    // it('Search for CR based on brand', function () {
    //     data.reactGlobal.searchIcon.click();
    //     common.commonFunctions.waitForElement(data.reactGlobal.searchTextField);
    //     data.reactGlobal.searchTextField.sendKeys(data.reactGlobal.fakeData);
    //     common.commonFunctions.waitForElement(data.reactContentRequest.viewShotList);
    // });

    it('Verify brand name and creator email on CR listing page', function () {
        let expectedBrandName = "Name: " + data.reactGlobal.fakeData;
        contentRequestPage.verifyDataOnListing(data.reactContentRequest.brandName, expectedBrandName, 'Brand name');

        let expectedCreatorName = "Creator: " + data.reactGlobal.fakeData + " (" + data.reactGlobal.fakeData + "@mailinator.com)";
        contentRequestPage.verifyDataOnListing(data.reactContentRequest.crCreator, expectedCreatorName, 'Creator name');

    });

    it('Verify category of CR', function () {
        let expectedCategories = data.reactContentRequest.category_1 + ', ' + data.reactContentRequest.category_2;
        contentRequestPage.verifyDataOnListing(data.reactContentRequest.categories, expectedCategories, 'Categories');
    });

    it('Verify status of CR', function () {
        let expectedStatus = data.reactContentRequest.status_1;
        contentRequestPage.verifyDataOnListing(data.reactContentRequest.status, expectedStatus, 'Status');
    });

    it('Verify Submission date of CR', function () {

        let expectedSubmission = common.commonFunctions.returnCurrentDate();
        contentRequestPage.verifyDataOnListing(data.reactContentRequest.submissionDate, expectedSubmission, 'Submission date');
    });


});
