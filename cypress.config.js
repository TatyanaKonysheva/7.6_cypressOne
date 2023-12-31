const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // These settings apply everywhere unless overridden
  defaultCommandTimeout: 5000,
  viewportWidth: 1000,
  viewportHeight: 600,
  e2e: {
    baseUrl: "http://localhost:3000",
    retrise: {
      openMode: 1,
      runMode: 2,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
