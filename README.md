# saucedemo-cypress-js

This project contains Cypress end-to-end and API tests written in JavaScript.
It validates key flows from SauceDemo and includes a simple API service test for Mercado Libre.

The automation framework follows a Page Object Model and service layer approach to keep tests readable, reusable, and maintainable.

## Prerequisites

Make sure the following browsers are installed locally before running browser-specific test commands:

- Google Chrome
- Mozilla Firefox

## Installation

Install project dependencies:

```bash
npm install
```

## Test Execution

Open Cypress in UI mode:

```bash
npm run cy:open
```

Run tests in CLI mode:

```bash
npm run cy:run
```

Run tests in Chrome:

```bash
npm run "cy:run chrome"
```

Run tests in Edge:

```bash
npm run "cy:run edge"
```

## Environment Variables

The project uses a local `.dotenv` file to load test data and API configuration.

## Reports
The report is generated in the file index.html in the cypress/results path.
The screenshots are generated in the cypress/screenshots path.
