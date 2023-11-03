//npx cypress open --config-file cypress.config.mobile.js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 375,
  viewportHeight: 667,
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
