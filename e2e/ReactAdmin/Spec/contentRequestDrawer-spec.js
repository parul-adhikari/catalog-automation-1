let contentRequestPage = require('../PageObject/contentRequest-po.js');
let fakeData = require('../../../Utils/FakeData.js');
let common = require ('../../../Utils/common.js');
let data = require ('../../../Utils/dataFile_React.js');

describe('Verify Content request page on React admin', function () {

    beforeAll(function () {
        expect(browser.getCurrentUrl()).toContain('content-requests');

    });

    it('Verify Opening of edit widget on the click of any row', function () {

        data.reactContentRequest.brandName.click();
        common.commonFunctions.waitForElement(data.reactContentRequest.commentButton);
        if(expect(data.reactContentRequest.commentButton.isDisplayed()).toBeTruthy()){
            browser.logger.info('Edit drawer opened successfully!!');
        }

    });

    it('Verify status selected in edit drawer', function () {

        let expectedStatus = data.reactContentRequest.status_1;
        contentRequestPage.verifyDataOnListing(data.reactContentRequest.statusDropDown, expectedStatus, 'Status');
    });

    it('Verify brand selected in edit drawer', function () {

        let expectedBrandName = data.reactGlobal.fakeData;
        contentRequestPage.verifyDataOnListing(data.reactContentRequest.selectedBrand, expectedBrandName, 'Brand name');

    });

    it('Verify channel selected in edit drawer', function () {

        let expectedChannel = data.reactContentRequest.channel;
        contentRequestPage.verifyDataOnListing(data.reactContentRequest.selectedChannel, expectedChannel, 'Channel name');

    });

    // RIGHTNOW THIS IS TAKING ADMINS TO DJANGO ADMIN
    // it('Verify that by clicking on Add new a drawer opens', function () {
    //
    //     data.reactContentRequest.addNewCr.click();
    // });
    //
    // it('Verify by changing details in the drawer', function () {
    //
    //     contentRequestPage.updateDataFromDrawer();
    // });




});
