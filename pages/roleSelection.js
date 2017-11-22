var roleType = function () {

    var studRole = element(by.xpath('//li[@data-role="Student"]'))


    this.chooseStudRole = function () {
        studRole.click()

    }
}

module.exports = new roleType()