let uploadContentPage = require('../PageObject/uploadContent.po');


   describe('Verify Upload content functionality', function () {

    beforeAll(function () {
        browser.get('https://staging.unityinfluence.com/content-upload?brand_id=401&brand_name=Automation%20Brand%20:%20Do%20not%20Touch&content_request=997&type=1');
        });

    // afterAll(function () {
    //     browser.close();
    // });

      it('Verify file upload while selecting multiple file', function () {
           uploadContentPage.multipleFileUpload("test1.jpg", "test2.jpg", "test3.jpg", "test4.png");
       });

       it('Verify removing an uploaded image', function () {
           uploadContentPage.removeUploadedImage();
       });

       it('Verify states of buttons after clicking on Upload button and the success screen', function () {
           uploadContentPage.afterUploadClick();

       });




});

