let commonActions = require('../../../Common/CommonActions');


function audienceDetails() {
    var pageHeading = $('div.container-fluid > h2 > b');
    var pageSubHeading = $('div.container-fluid > p');
    var ageCheckBox = $('label > span.custom-control-indicator');
    var genderDropDown = element(by.cssContainingText('[class*="placeholder"]', 'Please select a gender'));
    var selectGenderDropDown = $('select-dropdown > div > div > ul > li');
    var countryDropDown = element(by.cssContainingText('[class*="placeholder"]', 'Select a country'));
    var selectCountryDropDown = $('div.options > ul > li:nth-child(174)');
    var targetByAreaCheckBox = element(by.cssContainingText('[class*="custom-control-input-text.right-question-icon.small-font"]', 'Target by area'));
    var stateDropDown = element(by.cssContainingText('[class*="placeholder"]', 'State'));
    var targetByInterestCheckBox = element(by.cssContainingText('[class*="custom-control-input-text.right-question-icon.small-font"]', 'Target by interest'));
    var targetByInterestTextField = $('#interest > div > ul > li > input');
    var nextPostSettingButton = $("[class*='custom-submit']");


    this.getPageHeading = function () {
        commonActions.waitForElement(pageHeading);
        return pageHeading;
    };
    this.getNextPostSettingButton = function () {
        commonActions.waitForElement(nextPostSettingButton);
        return nextPostSettingButton;
    };
    this.getPageSubHeading = function () {
        commonActions.waitForElement(pageSubHeading);
        return pageSubHeading;
    };

    this.getAgeCheckBox = function () {
        commonActions.waitForElement(ageCheckBox);
        return ageCheckBox;
    };

    this.getGenderDropDown = function () {
        commonActions.waitForElement(genderDropDown);
        return genderDropDown;
    };

    this.getSelectGenderDropDown = function () {
        commonActions.waitForElement(selectGenderDropDown);
        return selectGenderDropDown;
    };

    this.getCountryDropDown = function () {
        commonActions.waitForElement(countryDropDown);
        return countryDropDown;
    };

    this.getSelectCountryDropDown = function () {
        commonActions.waitForElement(selectCountryDropDown);
        return selectCountryDropDown;
    }
    this.getTargetByAreaCheckBox = function () {
        commonActions.waitForElement(targetByAreaCheckBox);
        return targetByAreaCheckBox;
    };

    this.getStateDropDown = function () {
        commonActions.waitForElement(stateDropDown);
        return stateDropDown;
    };

    this.getTargetByInterestCheckBox = function () {
        commonActions.waitForElement(targetByInterestCheckBox);
        return targetByInterestCheckBox;
    };

    this.getTargetByInterestTextField = function () {
        commonActions.waitForElement(targetByInterestTextField);
        return targetByInterestTextField;
    };

    this.fillAudienceDetails = function () {
        browser.actions().mouseMove(this.getAgeCheckBox()).doubleClick().perform();
        browser.sleep(1000);
        this.getGenderDropDown().click();
        this.getSelectGenderDropDown().click();

        this.getCountryDropDown().click();

        this.getSelectCountryDropDown().click();

        // this.getTargetByAreaCheckBox().click();
        //
        // this.getStateDropDown().click();
        //
        // this.getTargetByInterestCheckBox().click();
        //
        // this.getTargetByInterestTextField().sendKeys('Test');
        //
        // this.getTargetByInterestTextField().sendKeys(protractor.Key.ENTER);
        //
        // this.getTargetByInterestTextField().sendKeys('Test34');


    };

};

module.exports = new audienceDetails();

