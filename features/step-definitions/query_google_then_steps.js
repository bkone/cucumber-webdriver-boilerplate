module.exports = function() {
    
    var kittenPicture = 'img.rg_i';
    
    this.World = require("../support/world.js").World;
    
    this.Then(/^I see kittens in the results page$/, function() {
        this.assert(this.browser.isExisting(kittenPicture));
        this.browser.close();
    });

};