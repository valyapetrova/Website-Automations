const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://mind-wend-913065.framer.app/",
    defaultCommandTimeout: 20000,
    video: false,
    scrollBehavior: false,
    specPattern: "cypress/integration/**/*.cy.js",
  },
});
