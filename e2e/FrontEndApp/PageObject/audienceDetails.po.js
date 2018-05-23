let commonActions = require('../../../Common/CommonActions');


function AudienceDetails() {
    let pageHeading = $('div.container-fluid > h2 > b');
    let pageSubHeading = $('div.container-fluid > p');
    let ageCheckBox = $('label > span.custom-control-indicator');
    let genderDropDown = element(by.cssContainingText('[class*="placeholder"]', 'Please select a gender'));
    let selectGenderDropDown = $('select-dropdown > div > div > ul > li');
    let countryDropDown = element(by.cssContainingText('[class*="placeholder"]', 'Select a country'));
    let selectCountryDropDown = $('div.options > ul > li:nth-child(174)');
    let targetByAreaCheckBox = element(by.cssContainingText('[class*="custom-control-input-text.right-question-icon.small-font"]', 'Target by area'));
    let stateDropDown = element(by.cssContainingText('[class*="placeholder"]', 'State'));
    let targetByInterestCheckBox = element(by.cssContainingText('[class*="custom-control-input-text.right-question-icon.small-font"]', 'Target by interest'));
    let targetByInterestTextField = $('#interest > div > ul > li > input');
    let nextPostSettingButton = $("[class*='custom-submit']");


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

module.exports = new AudienceDetails();

