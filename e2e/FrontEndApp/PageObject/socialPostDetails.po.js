let commonActions = require('../../../Common/CommonActions');


function socialPostDetails() {
    var pageHeading = $('div.container-fluid > h2 > b');
    var shortDescriptionTextBox = $('[id*="short_description"]');
    var suggestedSocialHandlesTextBox = $('[formcontrolname*="content_social_handles"]');
    var contentHashTagsTextBox = $('[formcontrolname*="content_hashtags"]');
    var nextPlanButton = $('[class*="next-button"]');


    this.getPageHeading = function () {
        commonActions.waitForElement(pageHeading);
        return pageHeading;
    };
    this.getShortDescriptionTextBox = function () {
        commonActions.waitForElement(shortDescriptionTextBox);
        return shortDescriptionTextBox;
    };
    this.getSuggestedSocialHandlesTextBox = function () {
        commonActions.waitForElement(suggestedSocialHandlesTextBox);
        return suggestedSocialHandlesTextBox;
    };
    this.getContentHashTagsTextBox = function () {
        commonActions.waitForElement(contentHashTagsTextBox);
        return contentHashTagsTextBox;
    };
    this.getNextPlanButton = function () {
        commonActions.waitForElement(nextPlanButton);
        return nextPlanButton;

    }
    this.fillPostDetails = function (shortDescription, socialHandles, hashTags) {
        this.getShortDescriptionTextBox().clear();

        this.getShortDescriptionTextBox().sendKeys(shortDescription);

        this.getSuggestedSocialHandlesTextBox().clear();

        this.getSuggestedSocialHandlesTextBox().sendKeys(socialHandles);
        this.getContentHashTagsTextBox().clear();

        this.getContentHashTagsTextBox().sendKeys(hashTags);


    };

};

module.exports = new socialPostDetails();

