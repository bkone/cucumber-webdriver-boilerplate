var expect = require('chai').expect;
var assert = require('chai').assert;
var webdriverjs = require("webdriverio");

var client = webdriverjs.remote({
    desiredCapabilities: {
        // You may choose other browsers
        // http://code.google.com/p/selenium/wiki/DesiredCapabilities
        browserName: 'firefox'
    },
    // webdriverjs has a lot of output which is generally useless
    // However, if anything goes wrong, remove this to see more details
    logLevel: 'verbose'
});

client.init();


var World = function World(callback) {
    this.assert = assert;
    this.expect = expect;
    this.browser = client; // this.browser will be available in step definitions

    this.visit = function (url, callback) {
        this.browser.url(url, callback);
    };

    callback(); // tell Cucumber we're finished and to use 'this' as the world instance
};

exports.World = World;