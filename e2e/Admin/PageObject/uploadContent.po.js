let path = require('path');
let dirnameFile = '/media/parul/E21A2A4E1A2A1FD1/catalog/Images/';
let remote = require('../../../node_modules/protractor/node_modules/selenium-webdriver/remote');
browser.setFileDetector(new remote.FileDetector());
let dataDictionary = require ('../../../Utils/DataFile.js');
function uploadContent() {

    this.multipleFileUpload = function (fileToUpload1, fileToUpload2, fileToUpload3, fileToUpload4, fileToUpload5, fileToUpload6) {

        let imagePath1 = path.resolve(dirnameFile, fileToUpload1);
        let imagePath2 = path.resolve(dirnameFile, fileToUpload2);
        let imagePath3 = path.resolve(dirnameFile, fileToUpload3);
        let imagePath4 = path.resolve(dirnameFile, fileToUpload4);
        let imagePath5 = path.resolve(dirnameFile, fileToUpload5);
        let imagePath6 = path.resolve(dirnameFile, fileToUpload6);
        browser.logger.info("Path of image 1 is : " + imagePath1);
        dataDictionary.fileElement.sendKeys(imagePath1+ "\n" + imagePath2+ "\n" + imagePath3+ "\n" + imagePath4 +  "\n" + imagePath5+ "\n" + imagePath6);
    };

    this.afterUploadClick = function() {

        //Verify after upload screen (disabled states) and success screen
        browser.logger.info("Upload button is enabled!");
        dataDictionary.uploadButton.click();
        dataDictionary.waitForElement(dataDictionary.progressBar);
        expect(dataDictionary.progressBar.isDisplayed()).toBeTruthy();
        expect(dataDictionary.crossIcon.isDisplayed()).toEqual(false);
        expect(dataDictionary.uploadButton.isEnabled()).toBe(false);
        browser.sleep(3000);
        dataDictionary.waitForElement(dataDictionary.successMessageAfterUpload);
        browser.logger.info("Content successfully uploaded!!");

    };
}

module.exports = new uploadContent();