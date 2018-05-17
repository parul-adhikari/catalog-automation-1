function mailinatorPage() {


    this.unityMailLoactor = element(by.cssContainingText('.all_message-min_text', 'Confirm your Unity account'));
    this.otpMailLocator = $("tbody>tr>td>span:nth-child(2)");

}
module.exports = new mailinatorPage();