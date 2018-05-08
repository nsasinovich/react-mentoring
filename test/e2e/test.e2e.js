module.exports = {
    'Click search input': function (client) {
        client
            .url(client.launchUrl)
            .waitForElementVisible('.search-input', 1000)
            .click('.search-input')
            .end();
    },
};
