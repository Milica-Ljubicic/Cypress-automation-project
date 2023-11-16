const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: 'zf556p',
    baseUrl: 'https://magento.softwaretestingboard.com/',
    defaultCommandTimeout: 100000,
    setupNodeEvents(on, config) {

    },
  },
});
