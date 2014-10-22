module.exports = function() {
    
    var imageLink = 'a.q.qs';
    var searchButton = 'span.gbqfi.gb_Ia';
    var searchBox = 'input[name="q"]';
    var URLtoTest = 'http://www.google.com';
    
    this.World = require("../support/world.js").World;
    
    this.Given(/^I am on Google homepage$/, function (callback) {
        this.visit(URLtoTest, callback);
    });
    
    this.When(/^I enter "([^"]*)" in the search box$/, function (query, callback) {
        this.browser.setValue(searchBox, query);
        callback();
    });
    
    this.When(/^I press the "([^"]*)" button$/, function (button, callback) {
        this.browser.waitFor(searchButton);
        this.browser.click(searchButton);
        callback();
    });
    
    this.When(/^I press the "([^"]*)" link$/, function (link, callback) {
        this.browser.waitFor(imageLink);
        this.browser.click(imageLink);
        callback();
    });
};