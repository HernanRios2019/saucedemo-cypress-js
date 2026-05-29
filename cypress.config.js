const { defineConfig } = require("cypress");

// Load environment variables from the local dotenv file.
require('dotenv').config({ path: '.dotenv', quiet: true });


module.exports = defineConfig({
  allowCypressEnv: true,
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
    },
    baseUrl: 'https://www.saucedemo.com',
  },
});
