const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "35mp4n",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
