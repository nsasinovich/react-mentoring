const chromedriver = require('chromedriver');

module.exports = {
    before(browser, done) {
        chromedriver.start();
        done();
    },

    after(browser, done) {
        chromedriver.stop();
        done();
    },
    'Click search input': function (client) {
        client
            .url(client.launchUrl)
            .waitForElementVisible('.search-input', 1000)
            .click('.search-input')
            .end();
    },
};
