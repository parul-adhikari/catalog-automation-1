var commonActions = require('../../../Common/CommonActions');


function SelectCampaign() {



    //id locators
    let searchTextBox = $('#searchbar');
    //xpath locators
    let searchButton = $('#changelist-search > div > input[type="submit"]:nth-child(3)');
    let firstCampaignLink = $('#result_list > tbody > tr:nth-child(1) > td.field-name > a');


    this.getSearchTextBox = function () {

        commonActions.waitForElement(searchTextBox);
        return searchTextBox;
    };
    this.getSearchButton = function () {
        commonActions.waitForElement(searchButton);
        return searchButton;
    };
    this.getFirstCampaignLink = function () {
        commonActions.waitForElement(firstCampaignLink);
        return firstCampaignLink;

    };
    this.searchForCampaignAndClick = function (campaignName) {
        this.getSearchTextBox().sendKeys(campaignName);
        this.getSearchButton().click();
        this.getFirstCampaignLink().click();

    };

};


module.exports = new SelectCampaign();