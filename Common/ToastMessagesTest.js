var _toastAlert = function (type, cb) {
    var toast = null;

    switch (type) {
        case "success":
            toast = element(by.xpath('//*[@class="success"]'));
            break;
        case "error":
            toast = element(by.xpath('//*[@class="errornote"]'));
            break;
    }

    if (!toast) {
        throw new Error("Unable to determine the correct toast's type");
    }

    browser.ignoreSynchronization = true;
    browser.sleep(500);
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.presenceOf(toast), 10000).then(function () {
        cb(toast);
        toast.click();
        browser.ignoreSynchronization = false;
    })


}

var toastAlert = function () {
    this.successAlert = function (cb) {
        _toastAlert("success", cb);
    };
    this.errorAlert = function(cb) {
        _toastAlert("Error", cb);
    }
}

module.exports = toastAlert;