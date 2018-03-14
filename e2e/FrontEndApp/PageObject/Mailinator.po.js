function mailinatorPage() {


    this.our_Mail_locator = element(by.cssContainingText('.all_message-min_text', 'Confirm your Unity account'))
    this.otp_Code_Loctor = $("tbody>tr>td>span:nth-child(2)")

}
module.exports = new mailinatorPage();