const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: '35mp4n',
    baseUrl: 'https://magento.softwaretestingboard.com/',
    defaultCommandTimeout: 100000,
    setupNodeEvents(on, config) {

    },
  },
});
