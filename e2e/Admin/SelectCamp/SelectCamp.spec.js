var Home = require('../../Admin/AdminHome/Home.po');
var SelectCamp = require('../../Admin/SelectCamp/SelectCamp.po');
var CommonActions = require('../../../Common/CommonActions');

describe('Verify Camp Selection flow', function () {


    it('Search For Campaign having shipping address', function () {
        let campName = element(by.css('#id_name'));
        expect(browser.getTitle()).toBe('Select campaign to change | Django site admin');
        SelectCamp.searchCampaign(browser.params.FirstCampName);
        expect(campName.getAttribute('value')).toEqual(browser.params.FirstCampName)


    });

   /* it('Search For Campaign without shipping address', function () {
        let campName = element(by.css('#id_name'));
        expect(browser.getTitle()).toBe('Select campaign to change | Django site admin');
        SelectCamp.searchCampaign(browser.params.NotShippedCampaign);
        expect(campName.getAttribute('value')).toEqual(browser.params.NotShippedCampaign)


    });*/

});