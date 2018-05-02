let commonActions = require('../../../Common/CommonActions');


function planSelectionPage() {
    var pageHeading = $('div.container-fluid > h2 > b');
    var tabForPhotoContentSelection = $('#photo-tab');
    var tabForVideoContentSelection = $('#video-tab');
    var oneTimePlanSelection = $('td.one-time-pack > button');
    var closeButton = $('div.container-fluid > button');

    this.getPageHeading = function () {
        commonActions.waitForElement(pageHeading);
        return pageHeading;
    };
    this.getTabForPhotoContentSelection = function () {
        commonActions.waitForElement(tabForPhotoContentSelection);
        return tabForPhotoContentSelection;
    };

    this.getTabForVideoContentSelection = function () {
        commonActions.waitForElement(tabForVideoContentSelection);
        return tabForVideoContentSelection;
    };

    this.getOneTimePlanSelection = function () {
        commonActions.waitForElement(oneTimePlanSelection);
        return oneTimePlanSelection;


    };

    this.getCloseButton = function () {
        commonActions.waitForElement(closeButton);
        return closeButton;
    };
};

module.exports = new planSelectionPage();