const { defineConfig } = require("cypress");

// Load environment variables from the local dotenv file.
require('dotenv').config({ path: '.dotenv', quiet: true });


module.exports = defineConfig({
  allowCypressEnv: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    json: false,
  },
  viewportWidth: 1536,
  viewportHeight: 960,
  env: {
    STANDARD_USER: process.env.CYPRESS_STANDARD_USER,
    VALID_PASSWORD: process.env.CYPRESS_VALID_PASSWORD,
    INVALID_PASSWORD: process.env.CYPRESS_INVALID_PASSWORD,
    PRODUCT_NAME_1: process.env.CYPRESS_PRODUCT_NAME_1,
    PRODUCT_NAME_2: process.env.CYPRESS_PRODUCT_NAME_2,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on); // Add the mochawesome reporter plugin
    },
    baseUrl: 'https://www.saucedemo.com',
  },
});
