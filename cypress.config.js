const { defineConfig } = require("cypress");

// Load environment variables from .env file
require('dotenv').config(); 


module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com',
  },
});
